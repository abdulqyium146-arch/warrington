import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { startOfMonth, endOfMonth, startOfDay, endOfDay, subMonths } from 'date-fns';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const now = new Date();
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);
  const todayStart = startOfDay(now);
  const todayEnd = endOfDay(now);
  const lastMonthStart = startOfMonth(subMonths(now, 1));
  const lastMonthEnd = endOfMonth(subMonths(now, 1));

  const [
    totalBookings,
    thisMonthBookings,
    lastMonthBookings,
    todayBookings,
    pendingBookings,
    revenueThisMonth,
    revenueLastMonth,
    totalCustomers,
    newCustomersThisMonth,
    recentBookings,
    upcomingBookings,
  ] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { createdAt: { gte: monthStart, lte: monthEnd } } }),
    prisma.booking.count({ where: { createdAt: { gte: lastMonthStart, lte: lastMonthEnd } } }),
    prisma.booking.count({ where: { scheduledDate: { gte: todayStart, lte: todayEnd } } }),
    prisma.booking.count({ where: { status: 'PENDING' } }),
    prisma.booking.aggregate({
      where: {
        createdAt: { gte: monthStart, lte: monthEnd },
        status: { in: ['COMPLETED', 'IN_PROGRESS', 'CONFIRMED'] },
      },
      _sum: { totalAmount: true },
    }),
    prisma.booking.aggregate({
      where: {
        createdAt: { gte: lastMonthStart, lte: lastMonthEnd },
        status: { in: ['COMPLETED', 'IN_PROGRESS', 'CONFIRMED'] },
      },
      _sum: { totalAmount: true },
    }),
    prisma.customer.count(),
    prisma.customer.count({ where: { createdAt: { gte: monthStart, lte: monthEnd } } }),
    prisma.booking.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: { select: { firstName: true, lastName: true } },
        services: { include: { service: { select: { name: true } } } },
      },
    }),
    prisma.booking.findMany({
      take: 5,
      where: { scheduledDate: { gte: todayStart }, status: { in: ['PENDING', 'CONFIRMED'] } },
      orderBy: { scheduledDate: 'asc' },
      include: {
        customer: { select: { firstName: true, lastName: true } },
        services: { include: { service: { select: { name: true } } } },
      },
    }),
  ]);

  const revenueCurrent = Number(revenueThisMonth._sum.totalAmount ?? 0);
  const revenuePrev = Number(revenueLastMonth._sum.totalAmount ?? 0);
  const revenueChange = revenuePrev > 0 ? ((revenueCurrent - revenuePrev) / revenuePrev) * 100 : 0;
  const bookingChange =
    lastMonthBookings > 0 ? ((thisMonthBookings - lastMonthBookings) / lastMonthBookings) * 100 : 0;

  return NextResponse.json({
    stats: {
      totalBookings,
      thisMonthBookings,
      bookingChangePercent: Math.round(bookingChange),
      todayBookings,
      pendingBookings,
      revenueThisMonth: revenueCurrent,
      revenueChangePercent: Math.round(revenueChange),
      totalCustomers,
      newCustomersThisMonth,
    },
    recentBookings,
    upcomingBookings,
  });
}
