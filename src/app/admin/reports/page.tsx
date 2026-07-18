import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { StatsCard } from '@/components/admin/stats-card';
import { RevenueChart } from '@/components/admin/revenue-chart';
import { StatusChart } from '@/components/admin/status-chart';
import { formatCurrency } from '@/lib/utils';
import { PoundSterling, Users, BookOpen, TrendingUp, Percent } from 'lucide-react';
import { startOfYear, endOfYear, format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

export const metadata: Metadata = { title: 'Reports' };
export const dynamic = 'force-dynamic';

export default async function ReportsPage() {
  const now = new Date();
  const yearStart = startOfYear(now);
  const yearEnd = endOfYear(now);

  const monthlyData = await Promise.all(
    Array.from({ length: 12 }, (_, i) => {
      const d = subMonths(now, 11 - i);
      return prisma.booking.aggregate({
        where: {
          scheduledDate: { gte: startOfMonth(d), lte: endOfMonth(d) },
          status: { in: ['COMPLETED', 'IN_PROGRESS', 'CONFIRMED'] },
        },
        _sum: { totalAmount: true },
        _count: true,
      }).then((r) => ({
        month: format(d, 'MMM yy'),
        revenue: Number(r._sum.totalAmount ?? 0),
        bookings: r._count,
      }));
    })
  );

  const [
    totalRevenue,
    totalBookings,
    completedBookings,
    totalCustomers,
    topServices,
    statusBreakdown,
    avgJobValue,
  ] = await Promise.all([
    prisma.booking.aggregate({
      where: { scheduledDate: { gte: yearStart, lte: yearEnd }, status: { in: ['COMPLETED', 'IN_PROGRESS', 'CONFIRMED'] } },
      _sum: { totalAmount: true },
    }),
    prisma.booking.count({ where: { scheduledDate: { gte: yearStart, lte: yearEnd } } }),
    prisma.booking.count({ where: { scheduledDate: { gte: yearStart, lte: yearEnd }, status: 'COMPLETED' } }),
    prisma.customer.count(),
    prisma.bookingService.groupBy({
      by: ['serviceId', 'name'],
      _count: { serviceId: true },
      _sum: { priceAtBooking: true },
      orderBy: { _count: { serviceId: 'desc' } },
      take: 5,
    }),
    prisma.booking.groupBy({
      by: ['status'],
      _count: { status: true },
      where: { scheduledDate: { gte: yearStart, lte: yearEnd } },
    }),
    prisma.booking.aggregate({
      where: { status: 'COMPLETED', scheduledDate: { gte: yearStart, lte: yearEnd } },
      _avg: { totalAmount: true },
    }),
  ]);

  const revenueYTD = Number(totalRevenue._sum.totalAmount ?? 0);
  const conversionRate = totalBookings > 0 ? Math.round((completedBookings / totalBookings) * 100) : 0;
  const avgValue = Number(avgJobValue._avg.totalAmount ?? 0);

  const statusData = statusBreakdown.map((s) => ({
    status: s.status,
    count: s._count.status,
  }));

  return (
    <>
      <Topbar title="Reports" />
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Business Reports</h2>
          <p className="text-gray-400 text-sm">Year-to-date performance — {format(now, 'yyyy')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatsCard title="YTD Revenue" value={formatCurrency(revenueYTD)} icon={PoundSterling} iconColor="text-green-400" />
          <StatsCard title="YTD Bookings" value={totalBookings} icon={BookOpen} />
          <StatsCard title="Completion Rate" value={`${conversionRate}%`} icon={Percent} iconColor="text-blue-400" />
          <StatsCard title="Avg Job Value" value={formatCurrency(avgValue)} icon={TrendingUp} iconColor="text-purple-400" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-brand-white">Revenue — Last 12 Months</h3>
              <span className="text-xs text-gray-500">Confirmed + In Progress + Completed</span>
            </div>
            <RevenueChart data={monthlyData} />
          </div>

          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
            <h3 className="font-heading font-semibold text-brand-white mb-4">Bookings by Status (YTD)</h3>
            <StatusChart data={statusData} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
            <h3 className="font-heading font-semibold text-brand-white mb-5">Top Services</h3>
            <div className="space-y-3">
              {topServices.length === 0 && <p className="text-gray-500 text-sm">No data yet</p>}
              {topServices.map((s, i) => {
                const totalSvcRevenue = Number(s._sum.priceAtBooking ?? 0);
                return (
                  <div key={s.serviceId} className="flex items-center gap-3">
                    <span className="text-brand-gold font-bold text-sm w-6 shrink-0">#{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-brand-white text-sm font-medium truncate">{s.name ?? s.serviceId}</p>
                      <div className="mt-1 h-1.5 bg-brand-gray/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-gold rounded-full"
                          style={{ width: `${Math.round((s._count.serviceId / (topServices[0]?._count.serviceId ?? 1)) * 100)}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-brand-white">{s._count.serviceId} jobs</p>
                      <p className="text-xs text-gray-400">{formatCurrency(totalSvcRevenue)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
            <h3 className="font-heading font-semibold text-brand-white mb-4">Monthly Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-gray/50">
                    {['Month', 'Revenue', 'Jobs', 'Avg Value'].map((h) => (
                      <th key={h} className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...monthlyData].reverse().slice(0, 6).map((m) => (
                    <tr key={m.month} className="border-b border-brand-gray/20">
                      <td className="py-2.5 pr-4 font-medium text-brand-white">{m.month}</td>
                      <td className="py-2.5 pr-4 text-green-400">{formatCurrency(m.revenue)}</td>
                      <td className="py-2.5 pr-4 text-gray-300">{m.bookings}</td>
                      <td className="py-2.5 pr-4 text-gray-300">
                        {m.bookings > 0 ? formatCurrency(m.revenue / m.bookings) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Total Customers</p>
            <p className="text-2xl font-heading font-bold text-brand-white">{totalCustomers}</p>
          </div>
          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Jobs Completed (YTD)</p>
            <p className="text-2xl font-heading font-bold text-brand-white">{completedBookings}</p>
          </div>
          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Completion Rate</p>
            <p className="text-2xl font-heading font-bold text-brand-white">{conversionRate}%</p>
          </div>
        </div>
      </div>
    </>
  );
}
