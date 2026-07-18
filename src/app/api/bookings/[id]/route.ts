import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

async function getBooking(id: string) {
  return prisma.booking.findFirst({
    where: { OR: [{ id }, { bookingRef: id }] },
    include: {
      customer: true,
      vehicle: true,
      services: { include: { service: true } },
      addons: { include: { addon: true } },
      photos: true,
      invoice: true,
      payments: true,
      statusHistory: { orderBy: { createdAt: 'desc' } },
      assignedTo: { select: { id: true, name: true, email: true } },
    },
  });
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const booking = await getBooking(id);
  if (!booking) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json({ booking });
}

const updateBookingSchema = z.object({
  scheduledDate: z.string().optional(),
  scheduledTime: z.string().optional(),
  notes: z.string().optional(),
  internalNotes: z.string().optional(),
  assignedToId: z.string().optional().nullable(),
});

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const booking = await getBooking(id);
  if (!booking) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const body = await req.json();
  const parsed = updateBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 });
  }

  const updateData: Record<string, unknown> = {};
  if (parsed.data.notes !== undefined) updateData.notes = parsed.data.notes;
  if (parsed.data.internalNotes !== undefined) updateData.internalNotes = parsed.data.internalNotes;
  if (parsed.data.assignedToId !== undefined) updateData.assignedToId = parsed.data.assignedToId;
  if (parsed.data.scheduledDate && parsed.data.scheduledTime) {
    const { parse: dateParse } = await import('date-fns');
    updateData.scheduledDate = dateParse(
      `${parsed.data.scheduledDate} ${parsed.data.scheduledTime}`,
      'yyyy-MM-dd HH:mm',
      new Date()
    );
  }

  const updated = await prisma.booking.update({
    where: { id: booking.id },
    data: updateData,
    include: { customer: true, vehicle: true, services: { include: { service: true } } },
  });

  return NextResponse.json({ booking: updated });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!['SUPER_ADMIN', 'ADMIN'].includes(session.user.role)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { id } = await params;
  const booking = await getBooking(id);
  if (!booking) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  await prisma.booking.update({
    where: { id: booking.id },
    data: { status: 'CANCELLED', statusHistory: { create: { status: 'CANCELLED', note: 'Deleted by admin' } } },
  });

  return NextResponse.json({ success: true });
}
