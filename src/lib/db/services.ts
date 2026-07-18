import { prisma } from '@/lib/db';

export async function getActiveServices() {
  return prisma.service.findMany({
    where: { isActive: true },
    include: { addons: { where: { isActive: true }, orderBy: { sortOrder: 'asc' } } },
    orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
  });
}

export async function getAllServices() {
  return prisma.service.findMany({
    include: { addons: { orderBy: { sortOrder: 'asc' } }, _count: { select: { bookingServices: true } } },
    orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
  });
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({
    where: { slug },
    include: { addons: { where: { isActive: true }, orderBy: { sortOrder: 'asc' } } },
  });
}
