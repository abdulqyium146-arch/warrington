import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { sendBookingReminder } from '@/lib/email';
import { startOfDay, endOfDay, addDays } from 'date-fns';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const tomorrow = addDays(new Date(), 1);
  const tomorrowStart = startOfDay(tomorrow);
  const tomorrowEnd = endOfDay(tomorrow);

  const bookings = await prisma.booking.findMany({
    where: {
      scheduledDate: { gte: tomorrowStart, lte: tomorrowEnd },
      status: 'CONFIRMED',
    },
    include: {
      customer: { select: { firstName: true, email: true } },
      services: { include: { service: { select: { name: true } } } },
    },
  });

  if (bookings.length === 0) {
    return NextResponse.json({ sent: 0, skipped: 0, total: 0 });
  }

  // Check which bookings already have a reminder sent today
  const todayStart = startOfDay(new Date());
  const alreadySent = await prisma.activityLog.findMany({
    where: {
      action: 'reminder.sent',
      entity: 'booking',
      entityId: { in: bookings.map((b) => b.id) },
      createdAt: { gte: todayStart },
    },
    select: { entityId: true },
  });
  const sentIds = new Set(alreadySent.map((l) => l.entityId));

  let sent = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const booking of bookings) {
    if (sentIds.has(booking.id)) {
      skipped++;
      continue;
    }

    try {
      const balanceDue = Math.max(0, Number(booking.totalAmount) - Number(booking.amountPaid ?? 0));
      await sendBookingReminder({
        customerName: booking.customer.firstName,
        customerEmail: booking.customer.email,
        bookingRef: booking.bookingRef,
        scheduledDate: booking.scheduledDate,
        services: booking.services.map((s) => s.name || s.service.name),
        balanceDue,
      });

      await prisma.activityLog.create({
        data: {
          action: 'reminder.sent',
          entity: 'booking',
          entityId: booking.id,
        },
      });

      sent++;
    } catch {
      errors.push(booking.bookingRef);
    }
  }

  return NextResponse.json({ sent, skipped, errors, total: bookings.length });
}
