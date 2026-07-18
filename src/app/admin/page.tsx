import type { Metadata } from 'next';
import { Suspense } from 'react';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { StatsCard } from '@/components/admin/stats-card';
import { Topbar } from '@/components/admin/topbar';
import { BookingStatusBadge } from '@/components/admin/booking-status-badge';
import { formatCurrency, formatDateTime } from '@/lib/utils';
import { CalendarDays, BookOpen, PoundSterling, Users, Clock, TrendingUp } from 'lucide-react';
import { startOfDay, endOfDay, startOfMonth, endOfMonth, subMonths } from 'date-fns';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = { title: 'Dashboard' };
export const dynamic = 'force-dynamic';

async function getDashboardData() {
  const now = new Date();
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);
  const todayStart = startOfDay(now);
  const todayEnd = endOfDay(now);
  const lastMonthStart = startOfMonth(subMonths(now, 1));
  const lastMonthEnd = endOfMonth(subMonths(now, 1));

  const [
    thisMonthBookings,
    lastMonthBookings,
    todayBookings,
    pendingBookings,
    revenueThisMonth,
    revenueLastMonth,
    newCustomersThisMonth,
    recentBookings,
    upcomingToday,
  ] = await Promise.all([
    prisma.booking.count({ where: { createdAt: { gte: monthStart, lte: monthEnd } } }),
    prisma.booking.count({ where: { createdAt: { gte: lastMonthStart, lte: lastMonthEnd } } }),
    prisma.booking.count({ where: { scheduledDate: { gte: todayStart, lte: todayEnd } } }),
    prisma.booking.count({ where: { status: 'PENDING' } }),
    prisma.booking.aggregate({
      where: { createdAt: { gte: monthStart, lte: monthEnd }, status: { in: ['COMPLETED', 'IN_PROGRESS', 'CONFIRMED'] } },
      _sum: { totalAmount: true },
    }),
    prisma.booking.aggregate({
      where: { createdAt: { gte: lastMonthStart, lte: lastMonthEnd }, status: { in: ['COMPLETED', 'IN_PROGRESS', 'CONFIRMED'] } },
      _sum: { totalAmount: true },
    }),
    prisma.customer.count({ where: { createdAt: { gte: monthStart, lte: monthEnd } } }),
    prisma.booking.findMany({
      take: 6,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: { select: { firstName: true, lastName: true } },
        services: { include: { service: { select: { name: true } } }, take: 1 },
      },
    }),
    prisma.booking.findMany({
      take: 5,
      where: { scheduledDate: { gte: todayStart, lte: todayEnd }, status: { in: ['PENDING', 'CONFIRMED', 'IN_PROGRESS'] } },
      orderBy: { scheduledDate: 'asc' },
      include: {
        customer: { select: { firstName: true, lastName: true } },
        services: { include: { service: { select: { name: true } } }, take: 1 },
      },
    }),
  ]);

  const revenueCurrent = Number(revenueThisMonth._sum.totalAmount ?? 0);
  const revenuePrev = Number(revenueLastMonth._sum.totalAmount ?? 0);
  const revenueChange = revenuePrev > 0 ? Math.round(((revenueCurrent - revenuePrev) / revenuePrev) * 100) : 0;
  const bookingChange = lastMonthBookings > 0 ? Math.round(((thisMonthBookings - lastMonthBookings) / lastMonthBookings) * 100) : 0;

  return { thisMonthBookings, bookingChange, todayBookings, pendingBookings, revenueCurrent, revenueChange, newCustomersThisMonth, recentBookings, upcomingToday };
}

export default async function AdminDashboard() {
  const session = await auth();
  const data = await getDashboardData();
  const firstName = session?.user.name?.split(' ')[0] ?? 'Admin';

  return (
    <>
      <Topbar title="Dashboard" pendingCount={data.pendingBookings} />
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Good morning, {firstName}</h2>
          <p className="text-gray-400 text-sm mt-0.5">Here&rsquo;s what&rsquo;s happening with your business today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatsCard title="This Month Bookings" value={data.thisMonthBookings} change={data.bookingChange} changeLabel="vs last month" icon={BookOpen} />
          <StatsCard title="Today's Bookings" value={data.todayBookings} icon={CalendarDays} iconColor="text-blue-400" />
          <StatsCard title="Monthly Revenue" value={formatCurrency(data.revenueCurrent)} change={data.revenueChange} changeLabel="vs last month" icon={PoundSterling} iconColor="text-green-400" />
          <StatsCard title="New Customers" value={data.newCustomersThisMonth} icon={Users} iconColor="text-purple-400" />
        </div>

        {data.pendingBookings > 0 && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-amber-400 font-medium text-sm">{data.pendingBookings} booking{data.pendingBookings !== 1 ? 's' : ''} awaiting confirmation</p>
                <p className="text-amber-400/70 text-xs">Review and confirm to secure payment</p>
              </div>
            </div>
            <Link href="/admin/bookings?status=PENDING">
              <Button size="sm" variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
                Review
              </Button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-brand-white">Recent Bookings</h3>
              <Link href="/admin/bookings" className="text-xs text-brand-gold hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {data.recentBookings.length === 0 && <p className="text-gray-500 text-sm">No bookings yet</p>}
              {data.recentBookings.map((b) => (
                <Link key={b.id} href={`/admin/bookings/${b.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-gray/30 transition-colors group">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-brand-white truncate">{b.customer.firstName} {b.customer.lastName}</p>
                    <p className="text-xs text-gray-400 truncate">{b.services[0]?.name ?? 'Service'} • {b.bookingRef}</p>
                  </div>
                  <BookingStatusBadge status={b.status} />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-brand-white">Today&rsquo;s Schedule</h3>
              <Link href="/admin/calendar" className="text-xs text-brand-gold hover:underline">Calendar</Link>
            </div>
            <div className="space-y-3">
              {data.upcomingToday.length === 0 && <p className="text-gray-500 text-sm">No bookings scheduled for today</p>}
              {data.upcomingToday.map((b) => (
                <Link key={b.id} href={`/admin/bookings/${b.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-gray/30 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="text-center shrink-0">
                      <p className="text-brand-gold font-bold text-sm leading-none">
                        {new Date(b.scheduledDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-brand-white truncate">{b.customer.firstName} {b.customer.lastName}</p>
                      <p className="text-xs text-gray-400 truncate">{b.services[0]?.name ?? 'Service'}</p>
                    </div>
                  </div>
                  <BookingStatusBadge status={b.status} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'New Booking', href: '/book', icon: BookOpen, desc: 'Create a booking for a customer' },
            { label: 'Add Customer', href: '/admin/customers', icon: Users, desc: 'Register a new customer' },
            { label: 'View Reports', href: '/admin/reports', icon: TrendingUp, desc: 'Revenue & performance' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-4 hover:border-brand-gold/40 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold/20 transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-brand-white text-sm">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
