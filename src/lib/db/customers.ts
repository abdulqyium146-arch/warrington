import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/db';

export async function getCustomers({ search, page = 1, limit = 20 }: { search?: string; page?: number; limit?: number }) {
  const where: Prisma.CustomerWhereInput = search
    ? {
        OR: [
          { firstName: { contains: search, mode: 'insensitive' } },
          { lastName: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
          { phone: { contains: search } },
          { vehicles: { some: { registration: { contains: search, mode: 'insensitive' } } } },
        ],
      }
    : {};

  const [customers, total] = await Promise.all([
    prisma.customer.findMany({
      where,
      include: {
        vehicles: { select: { id: true, make: true, model: true, year: true, registration: true }, take: 1 },
        _count: { select: { bookings: true, vehicles: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.customer.count({ where }),
  ]);

  return { customers, total, pages: Math.ceil(total / limit) };
}

export async function getCustomerById(id: string) {
  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      vehicles: { orderBy: { createdAt: 'desc' } },
      bookings: {
        orderBy: { scheduledDate: 'desc' },
        take: 20,
        include: { services: { include: { service: true } }, vehicle: { select: { make: true, model: true } } },
      },
      _count: { select: { bookings: true, vehicles: true } },
    },
  });

  if (!customer) return null;

  const stats = await prisma.booking.aggregate({
    where: { customerId: id, status: 'COMPLETED' },
    _sum: { totalAmount: true },
    _count: true,
  });

  return { ...customer, lifetimeValue: Number(stats._sum.totalAmount ?? 0), completedBookings: stats._count };
}

export async function findOrCreateCustomer(data: {
  firstName: string; lastName: string; email: string; phone: string; marketingConsent?: boolean;
}) {
  const existing = await prisma.customer.findUnique({ where: { email: data.email } });
  if (existing) return existing;
  return prisma.customer.create({ data });
}
