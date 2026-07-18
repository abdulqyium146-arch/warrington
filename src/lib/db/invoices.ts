import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/db';

export async function generateInvoiceNumber(): Promise<string> {
  const year = new Date().getFullYear();
  const count = await prisma.invoice.count({
    where: { createdAt: { gte: new Date(`${year}-01-01`) } },
  });
  return `INV-${year}-${String(count + 1).padStart(4, '0')}`;
}

export async function getInvoices({
  customerId,
  status,
  page = 1,
  limit = 20,
}: {
  customerId?: string;
  status?: string;
  page?: number;
  limit?: number;
}) {
  const where: Prisma.InvoiceWhereInput = {
    ...(customerId && { customerId }),
    ...(status && { status }),
  };

  const [invoices, total] = await Promise.all([
    prisma.invoice.findMany({
      where,
      include: {
        customer: { select: { id: true, firstName: true, lastName: true, email: true } },
        booking: { select: { bookingRef: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.invoice.count({ where }),
  ]);

  return { invoices, total, pages: Math.ceil(total / limit) };
}

export async function getInvoiceById(id: string) {
  return prisma.invoice.findUnique({
    where: { id },
    include: {
      customer: true,
      booking: {
        include: {
          vehicle: true,
          services: { include: { service: true } },
          addons: { include: { addon: true } },
          payments: true,
        },
      },
    },
  });
}

export async function createInvoiceFromBooking(bookingId: string) {
  const booking = await prisma.booking.findUniqueOrThrow({
    where: { id: bookingId },
    include: {
      services: { include: { service: true } },
      addons: { include: { addon: true } },
    },
  });

  const invoiceNumber = await generateInvoiceNumber();
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);

  const vatAmount = Math.round(Number(booking.subtotal) * 0.2 * 100) / 100;
  const totalAmount = Number(booking.subtotal) + vatAmount;

  return prisma.invoice.create({
    data: {
      invoiceNumber,
      bookingId,
      customerId: booking.customerId,
      status: 'UNPAID',
      subtotal: booking.subtotal,
      vatAmount,
      totalAmount,
      dueDate,
    },
    include: { customer: true, booking: true },
  });
}

export async function markInvoicePaid(id: string) {
  return prisma.invoice.update({
    where: { id },
    data: { status: 'PAID', paidAt: new Date() },
  });
}
