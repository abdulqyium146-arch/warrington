import { BookingStatus, Prisma } from '@prisma/client';
import { prisma } from '@/lib/db';

export async function getBookings({
  search,
  status,
  page = 1,
  limit = 20,
}: {
  search?: string;
  status?: BookingStatus;
  page?: number;
  limit?: number;
}) {
  const where: Prisma.BookingWhereInput = {
    ...(status && { status }),
    ...(search && {
      OR: [
        { bookingRef: { contains: search, mode: 'insensitive' } },
        { customer: { firstName: { contains: search, mode: 'insensitive' } } },
        { customer: { lastName: { contains: search, mode: 'insensitive' } } },
        { customer: { email: { contains: search, mode: 'insensitive' } } },
      ],
    }),
  };

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: {
        customer: { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
        vehicle: { select: { id: true, make: true, model: true, year: true, registration: true, color: true } },
        assignedTo: { select: { id: true, name: true } },
        services: { include: { service: true } },
        payments: true,
        photos: true,
      },
      orderBy: { scheduledDate: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.booking.count({ where }),
  ]);

  return { bookings, total, pages: Math.ceil(total / limit) };
}

export async function getBookingById(id: string) {
  return prisma.booking.findFirst({
    where: { OR: [{ id }, { bookingRef: id }] },
    include: {
      customer: true,
      vehicle: true,
      assignedTo: { select: { id: true, name: true } },
      services: { include: { service: true } },
      addons: { include: { addon: true } },
      payments: true,
      photos: true,
      invoice: true,
      statusHistory: { orderBy: { createdAt: 'desc' }, include: { changedBy: { select: { name: true } } } },
      comments: { orderBy: { createdAt: 'asc' }, include: { user: { select: { id: true, name: true, image: true } } } },
    },
  });
}

export async function generateBookingRef(): Promise<string> {
  const year = new Date().getFullYear();
  const count = await prisma.booking.count({ where: { createdAt: { gte: new Date(`${year}-01-01`) } } });
  return `WCD-${year}-${String(count + 1).padStart(4, '0')}`;
}

export async function updateBookingStatus(bookingId: string, status: BookingStatus, changedById?: string, note?: string) {
  return prisma.$transaction([
    prisma.booking.update({ where: { id: bookingId }, data: { status, ...(status === 'COMPLETED' && { completedAt: new Date() }) } }),
    prisma.bookingStatusHistory.create({ data: { bookingId, status, changedById: changedById ?? null, note: note ?? null } }),
  ]);
}

export async function getBookingStats() {
  const today = new Date();
  const dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

  const [todayCount, monthRevenue, pendingCount] = await Promise.all([
    prisma.booking.count({ where: { scheduledDate: { gte: dayStart } } }),
    prisma.booking.aggregate({ where: { scheduledDate: { gte: monthStart }, status: 'COMPLETED' }, _sum: { totalAmount: true } }),
    prisma.booking.count({ where: { status: 'PENDING' } }),
  ]);

  return { todayCount, monthRevenue: Number(monthRevenue._sum.totalAmount ?? 0), pendingCount };
}
