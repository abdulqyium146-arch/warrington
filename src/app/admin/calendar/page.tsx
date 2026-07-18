import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { BookingStatusBadge } from '@/components/admin/booking-status-badge';
import { Button } from '@/components/ui/button';
import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, format, isSameDay, isToday, isSameMonth,
  addWeeks, subWeeks, parseISO,
} from 'date-fns';

export const metadata: Metadata = { title: 'Calendar' };
export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ month?: string; year?: string; view?: string; weekStart?: string }>;
}

const STATUS_COLORS: Record<string, string> = {
  PENDING: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  CONFIRMED: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  IN_PROGRESS: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  COMPLETED: 'bg-green-500/20 text-green-400 border-green-500/30',
  NO_SHOW: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export default async function CalendarPage({ searchParams }: PageProps) {
  const now = new Date();
  const sp = await searchParams;
  const view = sp.view === 'week' ? 'week' : 'month';

  // ── Week view ──────────────────────────────────────────────────────────────
  if (view === 'week') {
    const weekStart = sp.weekStart
      ? startOfWeek(parseISO(sp.weekStart), { weekStartsOn: 1 })
      : startOfWeek(now, { weekStartsOn: 1 });

    const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
    const prevWeekStart = subWeeks(weekStart, 1);
    const nextWeekStart = addWeeks(weekStart, 1);

    const bookings = await prisma.booking.findMany({
      where: {
        scheduledDate: { gte: weekStart, lte: weekEnd },
        status: { notIn: ['CANCELLED'] },
      },
      include: {
        customer: { select: { firstName: true, lastName: true } },
        services: { take: 1 },
      },
      orderBy: { scheduledDate: 'asc' },
    });

    const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

    return (
      <>
        <Topbar title="Calendar" />
        <div className="p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Link href="?view=month">
                <Button variant="outline" size="sm">Month</Button>
              </Link>
              <Button size="sm" className="pointer-events-none">Week</Button>
            </div>
            <h2 className="text-lg font-heading font-bold text-brand-white order-first sm:order-none">
              {format(weekStart, 'd MMM')} – {format(weekEnd, 'd MMM yyyy')}
            </h2>
            <div className="flex items-center gap-2">
              <Link href={`?view=week&weekStart=${format(prevWeekStart, 'yyyy-MM-dd')}`}>
                <Button variant="outline" size="sm">← Prev</Button>
              </Link>
              <Link href={`?view=week&weekStart=${format(startOfWeek(now, { weekStartsOn: 1 }), 'yyyy-MM-dd')}`}>
                <Button variant="outline" size="sm">This Week</Button>
              </Link>
              <Link href={`?view=week&weekStart=${format(nextWeekStart, 'yyyy-MM-dd')}`}>
                <Button variant="outline" size="sm">Next →</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-7 gap-3">
            {days.map((day) => {
              const dayBookings = bookings.filter((b) => isSameDay(new Date(b.scheduledDate), day));
              const isT = isToday(day);

              return (
                <div key={day.toISOString()} className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
                  <div className={`px-3 py-2 border-b border-brand-gray/50 ${isT ? 'bg-brand-gold/10' : ''}`}>
                    <p className={`text-xs font-medium ${isT ? 'text-brand-gold' : 'text-gray-400'}`}>
                      {format(day, 'EEE')}
                    </p>
                    <p className={`text-lg font-heading font-bold ${isT ? 'text-brand-gold' : 'text-brand-white'}`}>
                      {format(day, 'd')}
                    </p>
                  </div>
                  <div className="p-2 space-y-1.5 min-h-[120px]">
                    {dayBookings.length === 0 && (
                      <p className="text-xs text-gray-600 pt-1">No bookings</p>
                    )}
                    {dayBookings.map((b) => (
                      <Link
                        key={b.id}
                        href={`/admin/bookings/${b.id}`}
                        className={`block px-2 py-1.5 rounded-lg border text-xs ${STATUS_COLORS[b.status] ?? 'bg-gray-500/20 text-gray-400 border-gray-500/30'} hover:opacity-80 transition-opacity`}
                      >
                        <p className="font-semibold">
                          {format(new Date(b.scheduledDate), 'HH:mm')}
                        </p>
                        <p className="truncate">
                          {b.customer.firstName} {b.customer.lastName.charAt(0)}.
                        </p>
                        {b.services[0] && (
                          <p className="truncate opacity-75">{b.services[0].name}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <Legend />
        </div>
      </>
    );
  }

  // ── Month view ─────────────────────────────────────────────────────────────
  const year = parseInt(sp.year ?? String(now.getFullYear()));
  const month = parseInt(sp.month ?? String(now.getMonth() + 1)) - 1;
  const currentMonthDate = new Date(year, month, 1);

  const monthStart = startOfMonth(currentMonthDate);
  const monthEnd = endOfMonth(currentMonthDate);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const bookings = await prisma.booking.findMany({
    where: {
      scheduledDate: { gte: calStart, lte: calEnd },
      status: { notIn: ['CANCELLED'] },
    },
    include: {
      customer: { select: { firstName: true, lastName: true } },
      services: { take: 1 },
    },
    orderBy: { scheduledDate: 'asc' },
  });

  const days = eachDayOfInterval({ start: calStart, end: calEnd });
  const prevMonth = month === 0 ? { month: 12, year: year - 1 } : { month, year };
  const nextMonth = month === 11 ? { month: 1, year: year + 1 } : { month: month + 2, year };

  const thisWeekMonday = format(startOfWeek(now, { weekStartsOn: 1 }), 'yyyy-MM-dd');

  return (
    <>
      <Topbar title="Calendar" />
      <div className="p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button size="sm" className="pointer-events-none">Month</Button>
            <Link href={`?view=week&weekStart=${thisWeekMonday}`}>
              <Button variant="outline" size="sm">Week</Button>
            </Link>
          </div>
          <h2 className="text-xl font-heading font-bold text-brand-white order-first sm:order-none">
            {format(currentMonthDate, 'MMMM yyyy')}
          </h2>
          <div className="flex items-center gap-2">
            <Link href={`?month=${prevMonth.month}&year=${prevMonth.year}`}>
              <Button variant="outline" size="sm">← Prev</Button>
            </Link>
            <Link href={`?month=${now.getMonth() + 1}&year=${now.getFullYear()}`}>
              <Button variant="outline" size="sm">Today</Button>
            </Link>
            <Link href={`?month=${nextMonth.month}&year=${nextMonth.year}`}>
              <Button variant="outline" size="sm">Next →</Button>
            </Link>
          </div>
        </div>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-7 border-b border-brand-gray/50">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
              <div key={d} className="py-3 text-center text-xs font-medium text-gray-400 border-r border-brand-gray/30 last:border-r-0">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {days.map((day, i) => {
              const dayBookings = bookings.filter((b) => isSameDay(new Date(b.scheduledDate), day));
              const isCurrentMonth = isSameMonth(day, currentMonthDate);
              const isT = isToday(day);
              const weekMon = format(startOfWeek(day, { weekStartsOn: 1 }), 'yyyy-MM-dd');

              return (
                <div
                  key={day.toISOString()}
                  className={`min-h-[110px] p-2 border-b border-r border-brand-gray/30 ${i % 7 === 6 ? 'border-r-0' : ''} ${!isCurrentMonth ? 'opacity-40' : ''}`}
                >
                  <Link href={`?view=week&weekStart=${weekMon}`} className="inline-flex">
                    <div className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium mb-1 hover:ring-1 hover:ring-brand-gold/50 transition-all ${isT ? 'bg-brand-gold text-brand-black' : 'text-gray-300'}`}>
                      {format(day, 'd')}
                    </div>
                  </Link>
                  <div className="space-y-1">
                    {dayBookings.slice(0, 3).map((b) => (
                      <Link
                        key={b.id}
                        href={`/admin/bookings/${b.id}`}
                        className={`block px-1.5 py-0.5 rounded text-xs border truncate ${STATUS_COLORS[b.status] ?? 'bg-gray-500/20 text-gray-400'}`}
                      >
                        {format(new Date(b.scheduledDate), 'HH:mm')} {b.customer.firstName} {b.customer.lastName.charAt(0)}.
                      </Link>
                    ))}
                    {dayBookings.length > 3 && (
                      <p className="text-xs text-gray-500 px-1">+{dayBookings.length - 3} more</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Legend />
      </div>
    </>
  );
}

function Legend() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {Object.entries({
        PENDING: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        CONFIRMED: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        IN_PROGRESS: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        COMPLETED: 'bg-green-500/20 text-green-400 border-green-500/30',
      }).map(([status, classes]) => (
        <div key={status} className="flex items-center gap-1.5">
          <div className={`w-3 h-3 rounded border ${classes}`} />
          <span className="text-xs text-gray-400">{status.replace('_', ' ')}</span>
        </div>
      ))}
    </div>
  );
}
