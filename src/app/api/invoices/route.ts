import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
  const limit = Math.min(100, parseInt(searchParams.get('limit') ?? '20'));
  const search = searchParams.get('search') ?? '';

  const where = search
    ? {
        OR: [
          { invoiceNumber: { contains: search, mode: 'insensitive' as const } },
          { booking: { customer: { firstName: { contains: search, mode: 'insensitive' as const } } } },
          { booking: { customer: { lastName: { contains: search, mode: 'insensitive' as const } } } },
        ],
      }
    : {};

  const [invoices, total] = await Promise.all([
    prisma.invoice.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        booking: {
          include: {
            customer: { select: { firstName: true, lastName: true, email: true } },
            services: { include: { service: { select: { name: true } } } },
          },
        },
      },
    }),
    prisma.invoice.count({ where }),
  ]);

  return NextResponse.json({ invoices, total, page, limit, totalPages: Math.ceil(total / limit) });
}

const createInvoiceSchema = z.object({ bookingId: z.string() });

async function generateInvoiceNumber(): Promise<string> {
  const year = new Date().getFullYear();
  const count = await prisma.invoice.count({ where: { createdAt: { gte: new Date(`${year}-01-01`) } } });
  return `INV-${year}-${String(count + 1).padStart(4, '0')}`;
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const parsed = createInvoiceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({
    where: { id: parsed.data.bookingId },
    include: {
      customer: true,
      vehicle: true,
      services: { include: { service: true } },
      addons: { include: { addon: true } },
    },
  });
  if (!booking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 });

  const existing = await prisma.invoice.findUnique({ where: { bookingId: booking.id } });
  if (existing) return NextResponse.json({ invoice: existing, message: 'Already exists' });

  const invoiceNumber = await generateInvoiceNumber();
  const vatRate = 0.20;
  const subtotalExVat = Number(booking.subtotal) / (1 + vatRate);
  const vatAmount = Number(booking.subtotal) - subtotalExVat;

  const invoice = await prisma.invoice.create({
    data: {
      invoiceNumber,
      bookingId: booking.id,
      customerId: booking.customerId,
      subtotal: subtotalExVat,
      vatAmount,
      totalAmount: Number(booking.totalAmount),
      status: Number(booking.amountPaid ?? 0) >= Number(booking.totalAmount) ? 'PAID' : 'UNPAID',
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
  });

  return NextResponse.json({ invoice }, { status: 201 });
}
