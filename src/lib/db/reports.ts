import { subMonths, startOfMonth, endOfMonth, eachMonthOfInterval } from 'date-fns';
import { prisma } from '@/lib/db';

export async function getMonthlyRevenue(months = 12) {
  const end = new Date();
  const start = subMonths(startOfMonth(end), months - 1);

  const bookings = await prisma.booking.findMany({
    where: {
      status: 'COMPLETED',
      scheduledDate: { gte: start, lte: end },
    },
    select: { totalAmount: true, scheduledDate: true },
  });

  const monthRange = eachMonthOfInterval({ start, end });

  return monthRange.map((month) => {
    const label = month.toLocaleString('en-GB', { month: 'short', year: '2-digit' });
    const revenue = bookings
      .filter((b) => {
        const d = b.scheduledDate;
        return d.getFullYear() === month.getFullYear() && d.getMonth() === month.getMonth();
      })
      .reduce((sum, b) => sum + Number(b.totalAmount), 0);
    return { month: label, revenue };
  });
}

export async function getServicePopularity() {
  const data = await prisma.bookingService.groupBy({
    by: ['serviceId'],
    _count: { serviceId: true },
    _sum: { priceAtBooking: true },
  });

  const services = await prisma.service.findMany({
    where: { id: { in: data.map((d) => d.serviceId) } },
    select: { id: true, name: true },
  });

  const nameMap = Object.fromEntries(services.map((s) => [s.id, s.name]));

  return data
    .map((d) => ({
      service: nameMap[d.serviceId] ?? 'Unknown',
      count: d._count.serviceId,
      revenue: Number(d._sum.priceAtBooking ?? 0),
    }))
    .sort((a, b) => b.count - a.count);
}

export async function getCustomerRetentionStats() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [newCustomers, recentBookings] = await Promise.all([
    prisma.customer.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.booking.findMany({
      where: { status: 'COMPLETED', scheduledDate: { gte: thirtyDaysAgo } },
      select: { customerId: true },
    }),
  ]);

  const uniqueCustomerIds = [...new Set(recentBookings.map((b) => b.customerId))];

  const returningCounts = await Promise.all(
    uniqueCustomerIds.map((id) => prisma.booking.count({ where: { customerId: id } }))
  );

  const returning = returningCounts.filter((count) => count > 1).length;

  return {
    newCustomers,
    returningCustomers: returning,
    total: uniqueCustomerIds.length,
  };
}

export async function getTechnicianPerformance(months = 3) {
  const start = subMonths(new Date(), months);

  const data = await prisma.booking.groupBy({
    by: ['assignedToId'],
    where: {
      status: 'COMPLETED',
      scheduledDate: { gte: start },
      assignedToId: { not: null },
    },
    _count: { id: true },
    _sum: { totalAmount: true },
    _avg: { totalAmount: true },
  });

  const staffIds = data.map((d) => d.assignedToId!).filter(Boolean);
  const staff = await prisma.user.findMany({
    where: { id: { in: staffIds } },
    select: { id: true, name: true, image: true },
  });

  const staffMap = Object.fromEntries(staff.map((s) => [s.id, s]));

  return data.map((d) => ({
    staff: staffMap[d.assignedToId!] ?? { name: 'Unassigned' },
    completedJobs: d._count.id,
    totalRevenue: Number(d._sum.totalAmount ?? 0),
    avgJobValue: Number(d._avg.totalAmount ?? 0),
  }));
}

export async function getConversionStats() {
  const [total, completed, cancelled, avgValue] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { status: 'COMPLETED' } }),
    prisma.booking.count({ where: { status: 'CANCELLED' } }),
    prisma.booking.aggregate({
      where: { status: 'COMPLETED' },
      _avg: { totalAmount: true },
    }),
  ]);

  return {
    total,
    completed,
    cancelled,
    conversionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    avgBookingValue: Number(avgValue._avg.totalAmount ?? 0),
  };
}
