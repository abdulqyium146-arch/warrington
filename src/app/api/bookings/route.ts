import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';
import { sendBookingConfirmation, sendAdminNewBookingAlert } from '@/lib/email';
import { parse } from 'date-fns';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
  const limit = Math.min(100, parseInt(searchParams.get('limit') ?? '20'));
  const search = searchParams.get('search') ?? '';
  const status = searchParams.get('status') ?? '';
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (from || to) {
    where.scheduledDate = {
      ...(from ? { gte: new Date(from) } : {}),
      ...(to ? { lte: new Date(to) } : {}),
    };
  }
  if (search) {
    where.OR = [
      { bookingRef: { contains: search, mode: 'insensitive' } },
      { customer: { firstName: { contains: search, mode: 'insensitive' } } },
      { customer: { lastName: { contains: search, mode: 'insensitive' } } },
      { customer: { email: { contains: search, mode: 'insensitive' } } },
    ];
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { scheduledDate: 'desc' },
      include: {
        customer: { select: { firstName: true, lastName: true, email: true, phone: true } },
        vehicle: { select: { make: true, model: true, year: true, color: true, registration: true } },
        services: { include: { service: { select: { name: true } } } },
        assignedTo: { select: { name: true } },
        _count: { select: { photos: true } },
      },
    }),
    prisma.booking.count({ where }),
  ]);

  return NextResponse.json({ bookings, total, page, limit, totalPages: Math.ceil(total / limit) });
}

const createBookingSchema = z.object({
  customer: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(7),
    marketingConsent: z.boolean().optional().default(false),
  }),
  vehicle: z.object({
    make: z.string().min(1),
    model: z.string().min(1),
    year: z.number().int().min(1950).max(new Date().getFullYear() + 1),
    color: z.string().optional(),
    registration: z.string().optional(),
    condition: z.string().optional(),
  }),
  services: z.array(z.object({ serviceId: z.string(), quantity: z.number().int().positive().optional().default(1) })).min(1),
  addonIds: z.array(z.string()).optional().default([]),
  scheduledDate: z.string(),
  scheduledTime: z.string().regex(/^\d{2}:\d{2}$/),
  notes: z.string().optional(),
  internalNotes: z.string().optional(),
});

async function generateBookingRef(): Promise<string> {
  const year = new Date().getFullYear();
  const count = await prisma.booking.count({ where: { createdAt: { gte: new Date(`${year}-01-01`) } } });
  return `WCD-${year}-${String(count + 1).padStart(4, '0')}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = createBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 });
  }

  const { customer, vehicle, services: serviceItems, addonIds, scheduledDate, scheduledTime, notes } = parsed.data;

  const serviceRecords = await prisma.service.findMany({
    where: { id: { in: serviceItems.map((s) => s.serviceId) }, isActive: true },
  });
  if (serviceRecords.length !== serviceItems.length) {
    return NextResponse.json({ error: 'One or more services not found or inactive' }, { status: 400 });
  }

  const addonRecords = addonIds.length
    ? await prisma.serviceAddon.findMany({ where: { id: { in: addonIds }, isActive: true } })
    : [];

  const servicesSubtotal = serviceItems.reduce((sum, item) => {
    const svc = serviceRecords.find((s) => s.id === item.serviceId)!;
    return sum + Number(svc.basePrice) * item.quantity;
  }, 0);
  const addonsSubtotal = addonRecords.reduce((sum, a) => sum + Number(a.price), 0);
  const subtotal = servicesSubtotal + addonsSubtotal;
  const totalAmount = subtotal;
  const depositAmount = Math.round(subtotal * 0.25 * 100) / 100;

  const totalDuration = serviceRecords.reduce((sum, s) => sum + s.durationMinutes, 0);

  const [dateStr, timeStr] = [scheduledDate, scheduledTime];
  const scheduled = parse(`${dateStr} ${timeStr}`, 'yyyy-MM-dd HH:mm', new Date());

  const existingCustomer = await prisma.customer.findUnique({ where: { email: customer.email } });

  const bookingRef = await generateBookingRef();

  const booking = await prisma.$transaction(async (tx) => {
    let cust = existingCustomer;
    if (!cust) {
      cust = await tx.customer.create({
        data: {
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email,
          phone: customer.phone,
          marketingConsent: customer.marketingConsent,
        },
      });
    }

    const veh = await tx.vehicle.create({
      data: {
        customerId: cust.id,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        color: vehicle.color,
        registration: vehicle.registration,
        condition: vehicle.condition,
      },
    });

    const newBooking = await tx.booking.create({
      data: {
        bookingRef,
        customerId: cust.id,
        vehicleId: veh.id,
        scheduledDate: scheduled,
        durationMinutes: totalDuration,
        status: 'PENDING',
        subtotal,
        totalAmount,
        depositAmount,
        depositPaid: false,
        notes,
        services: {
          create: serviceItems.map((item) => {
            const svc = serviceRecords.find((s) => s.id === item.serviceId)!;
            return {
              serviceId: svc.id,
              quantity: item.quantity,
              priceAtBooking: svc.basePrice,
              name: svc.name,
            };
          }),
        },
        addons: addonRecords.length
          ? {
              create: addonRecords.map((a) => ({
                addonId: a.id,
                priceAtBooking: a.price,
                name: a.name,
              })),
            }
          : undefined,
        statusHistory: {
          create: { status: 'PENDING', note: 'Booking created online' },
        },
      },
      include: {
        customer: true,
        vehicle: true,
        services: { include: { service: true } },
        addons: { include: { addon: true } },
      },
    });

    return newBooking;
  });

  try {
    const vehicleDesc = `${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.registration ? ` (${vehicle.registration.toUpperCase()})` : ''}`;
    const serviceNames = serviceRecords.map((s) => s.name);
    await sendBookingConfirmation({
      customerName: `${customer.firstName} ${customer.lastName}`,
      customerEmail: customer.email,
      bookingRef: booking.bookingRef,
      scheduledDate: booking.scheduledDate,
      services: serviceNames,
      totalAmount: Number(booking.totalAmount),
      depositAmount: Number(booking.depositAmount),
      depositPaid: false,
      vehicleDescription: vehicleDesc,
    });
    await sendAdminNewBookingAlert({
      bookingRef: booking.bookingRef,
      customerName: `${customer.firstName} ${customer.lastName}`,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      scheduledDate: booking.scheduledDate,
      services: serviceNames,
      totalAmount: Number(booking.totalAmount),
      vehicleDescription: vehicleDesc,
    });
  } catch {
    // non-fatal
  }

  return NextResponse.json({ booking, bookingRef }, { status: 201 });
}
