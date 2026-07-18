import { addMinutes, format, isAfter, isBefore, setHours, setMinutes } from 'date-fns';
import { prisma } from '@/lib/db';

export interface TimeSlot {
  time: string;
  datetime: Date;
  available: boolean;
}

export async function getAvailableSlots(date: Date, durationMinutes: number): Promise<TimeSlot[]> {
  const dayOfWeek = date.getDay();

  const [workingHours, holiday, existingBookings] = await Promise.all([
    prisma.workingHours.findUnique({ where: { dayOfWeek } }),
    prisma.holiday.findFirst({
      where: {
        date: {
          gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
          lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
        },
      },
    }),
    prisma.booking.findMany({
      where: {
        scheduledDate: {
          gte: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
          lte: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59),
        },
        status: { notIn: ['CANCELLED', 'NO_SHOW'] },
      },
      select: { scheduledDate: true, durationMinutes: true },
    }),
  ]);

  if (!workingHours || !workingHours.isOpen || holiday) return [];

  const slots: TimeSlot[] = [];
  const [openH, openM] = workingHours.openTime.split(':').map(Number);
  const [closeH, closeM] = workingHours.closeTime.split(':').map(Number);

  let cursor = setHours(setMinutes(new Date(date), openM), openH);
  const closeTime = setHours(setMinutes(new Date(date), closeM), closeH);
  const now = new Date();
  const SLOT_INTERVAL = 30; // minutes between slot start times

  while (isBefore(cursor, closeTime)) {
    const slotEnd = addMinutes(cursor, durationMinutes);

    if (isAfter(slotEnd, closeTime)) break;

    const isPast = isBefore(cursor, now);

    const overlaps = existingBookings.some((b) => {
      const bEnd = addMinutes(b.scheduledDate, b.durationMinutes);
      return isBefore(cursor, bEnd) && isAfter(slotEnd, b.scheduledDate);
    });

    slots.push({
      time: format(cursor, 'HH:mm'),
      datetime: new Date(cursor),
      available: !isPast && !overlaps,
    });

    cursor = addMinutes(cursor, SLOT_INTERVAL);
  }

  return slots;
}

export async function getUnavailableDates(year: number, month: number): Promise<string[]> {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0);

  const [workingHours, holidays] = await Promise.all([
    prisma.workingHours.findMany(),
    prisma.holiday.findMany({ where: { date: { gte: start, lte: end } } }),
  ]);

  const closedDays = workingHours.filter((w) => !w.isOpen).map((w) => w.dayOfWeek);
  const holidayDates = holidays.map((h) => format(h.date, 'yyyy-MM-dd'));

  const unavailable: string[] = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    const dow = cursor.getDay();
    const dateStr = format(cursor, 'yyyy-MM-dd');
    if (closedDays.includes(dow) || holidayDates.includes(dateStr)) {
      unavailable.push(dateStr);
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return unavailable;
}
