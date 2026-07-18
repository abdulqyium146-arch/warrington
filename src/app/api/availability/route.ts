import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { startOfDay, endOfDay, addMinutes, format, parse, isAfter, isBefore, addDays } from 'date-fns';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const querySchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  duration: z.coerce.number().int().positive().optional().default(60),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const parsed = querySchema.safeParse({
    date: searchParams.get('date'),
    duration: searchParams.get('duration'),
  });

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid parameters', issues: parsed.error.issues }, { status: 400 });
  }

  const { date, duration } = parsed.data;
  const requestedDate = parse(date, 'yyyy-MM-dd', new Date());
  const dayOfWeek = requestedDate.getDay(); // 0=Sun, 1=Mon...

  const workingHours = await prisma.workingHours.findUnique({
    where: { dayOfWeek },
  });

  if (!workingHours || !workingHours.isOpen) {
    return NextResponse.json({ slots: [], reason: 'Closed' });
  }

  const holiday = await prisma.holiday.findFirst({
    where: { date: requestedDate },
  });
  if (holiday) {
    return NextResponse.json({ slots: [], reason: holiday.name });
  }

  const existingBookings = await prisma.booking.findMany({
    where: {
      scheduledDate: { gte: startOfDay(requestedDate), lte: endOfDay(requestedDate) },
      status: { notIn: ['CANCELLED'] },
    },
    select: { scheduledDate: true, durationMinutes: true },
  });

  const openTime = parse(workingHours.openTime, 'HH:mm', requestedDate);
  const closeTime = parse(workingHours.closeTime, 'HH:mm', requestedDate);
  const slotInterval = 30;
  const slots: string[] = [];
  const now = new Date();

  let cursor = openTime;
  while (isBefore(addMinutes(cursor, duration), closeTime) || format(addMinutes(cursor, duration), 'HH:mm') === format(closeTime, 'HH:mm')) {
    const slotEnd = addMinutes(cursor, duration);

    if (isAfter(cursor, now)) {
      const hasConflict = existingBookings.some((b) => {
        const bStart = b.scheduledDate;
        const bEnd = addMinutes(bStart, b.durationMinutes ?? 60);
        return isBefore(cursor, bEnd) && isAfter(slotEnd, bStart);
      });

      if (!hasConflict) {
        slots.push(format(cursor, 'HH:mm'));
      }
    }

    cursor = addMinutes(cursor, slotInterval);
    if (!isBefore(cursor, closeTime)) break;
  }

  return NextResponse.json({ slots, date, workingHours: { open: workingHours.openTime, close: workingHours.closeTime } });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fromDate, toDate } = body;

  if (!fromDate || !toDate) {
    return NextResponse.json({ error: 'fromDate and toDate required' }, { status: 400 });
  }

  const start = new Date(fromDate);
  const end = new Date(toDate);
  const unavailable: string[] = [];

  const holidays = await prisma.holiday.findMany({
    where: { date: { gte: start, lte: end } },
    select: { date: true },
  });

  const closedDays = await prisma.workingHours.findMany({
    where: { isOpen: false },
    select: { dayOfWeek: true },
  });

  const closedDayNumbers = new Set(closedDays.map((d) => d.dayOfWeek));
  const holidayDates = new Set(holidays.map((h) => format(h.date, 'yyyy-MM-dd')));

  let current = start;
  while (isBefore(current, end) || format(current, 'yyyy-MM-dd') === format(end, 'yyyy-MM-dd')) {
    const dateStr = format(current, 'yyyy-MM-dd');
    if (closedDayNumbers.has(current.getDay()) || holidayDates.has(dateStr)) {
      unavailable.push(dateStr);
    }
    current = addDays(current, 1);
  }

  return NextResponse.json({ unavailable });
}
