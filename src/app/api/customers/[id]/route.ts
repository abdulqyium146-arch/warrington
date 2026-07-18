import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;

  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      vehicles: { orderBy: { createdAt: 'desc' } },
      bookings: {
        orderBy: { scheduledDate: 'desc' },
        take: 20,
        include: {
          services: { include: { service: { select: { name: true } } } },
          vehicle: { select: { make: true, model: true, registration: true } },
        },
      },
      _count: { select: { bookings: true, vehicles: true } },
    },
  });

  if (!customer) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const stats = await prisma.booking.aggregate({
    where: { customerId: id, status: 'COMPLETED' },
    _sum: { totalAmount: true },
    _count: true,
  });

  return NextResponse.json({ customer, lifetimeValue: Number(stats._sum.totalAmount ?? 0), completedBookings: stats._count });
}

const updateCustomerSchema = z.object({
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
  phone: z.string().min(7).max(20).optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  postcode: z.string().optional(),
  notes: z.string().optional(),
  marketingConsent: z.boolean().optional(),
});

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;

  const customer = await prisma.customer.findUnique({ where: { id } });
  if (!customer) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const body = await req.json();
  const parsed = updateCustomerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 });
  }

  const updated = await prisma.customer.update({ where: { id }, data: parsed.data });
  return NextResponse.json({ customer: updated });
}
