import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';
import { BookingStatus } from '@prisma/client';
import {
  sendBookingConfirmedByAdmin,
  sendBookingCancelledEmail,
  sendReviewRequest,
} from '@/lib/email';

const statusSchema = z.object({
  status: z.nativeEnum(BookingStatus),
  note: z.string().optional(),
});

const validTransitions: Record<BookingStatus, BookingStatus[]> = {
  PENDING: ['CONFIRMED', 'CANCELLED'],
  CONFIRMED: ['IN_PROGRESS', 'CANCELLED', 'NO_SHOW'],
  IN_PROGRESS: ['COMPLETED', 'CANCELLED'],
  COMPLETED: [],
  CANCELLED: [],
  NO_SHOW: [],
};

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;

  const booking = await prisma.booking.findFirst({
    where: { OR: [{ id }, { bookingRef: id }] },
    include: {
      customer: { select: { firstName: true, lastName: true, email: true } },
      vehicle: { select: { make: true, model: true, year: true, registration: true } },
      services: { include: { service: { select: { name: true } } } },
    },
  });
  if (!booking) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const body = await req.json();
  const parsed = statusSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 });
  }

  const { status: newStatus, note } = parsed.data;

  if (!validTransitions[booking.status].includes(newStatus)) {
    return NextResponse.json(
      { error: `Cannot transition from ${booking.status} to ${newStatus}` },
      { status: 422 }
    );
  }

  const [updated] = await prisma.$transaction([
    prisma.booking.update({
      where: { id: booking.id },
      data: { status: newStatus },
    }),
    prisma.bookingStatusHistory.create({
      data: {
        bookingId: booking.id,
        status: newStatus,
        note: note ?? `Status changed to ${newStatus}`,
        changedById: session.user.id,
      },
    }),
  ]);

  // Fire notification emails (non-fatal)
  const customerName = `${booking.customer.firstName} ${booking.customer.lastName}`;
  const customerEmail = booking.customer.email;
  const serviceNames = booking.services.map((s) => s.name || s.service.name);
  const vehicleDesc = [
    booking.vehicle?.year,
    booking.vehicle?.make,
    booking.vehicle?.model,
    booking.vehicle?.registration ? `(${booking.vehicle.registration.toUpperCase()})` : null,
  ].filter(Boolean).join(' ');

  try {
    if (newStatus === 'CONFIRMED') {
      await sendBookingConfirmedByAdmin({
        customerName,
        customerEmail,
        bookingRef: booking.bookingRef,
        scheduledDate: booking.scheduledDate,
        services: serviceNames,
        totalAmount: Number(booking.totalAmount),
        depositAmount: Number(booking.depositAmount),
        depositPaid: booking.depositPaid,
        vehicleDescription: vehicleDesc,
      });
    } else if (newStatus === 'CANCELLED') {
      await sendBookingCancelledEmail({
        customerName,
        customerEmail,
        bookingRef: booking.bookingRef,
        scheduledDate: booking.scheduledDate,
        reason: note,
      });
    } else if (newStatus === 'COMPLETED') {
      await sendReviewRequest({
        customerName,
        customerEmail,
        bookingRef: booking.bookingRef,
        services: serviceNames,
      });
    }
  } catch {
    // non-fatal — booking status was already updated
  }

  return NextResponse.json({ booking: updated });
}
