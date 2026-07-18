import type { Metadata } from 'next';
import Link from 'next/link';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { BookingStatusBadge } from '@/components/admin/booking-status-badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatCurrency, formatDateTime } from '@/lib/utils';
import { Plus, Search, Filter } from 'lucide-react';
import { BookingStatus } from '@prisma/client';

export const metadata: Metadata = { title: 'Bookings' };
export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ search?: string; status?: string; page?: string }>;
}

const STATUS_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'All Statuses' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'CONFIRMED', label: 'Confirmed' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'CANCELLED', label: 'Cancelled' },
  { value: 'NO_SHOW', label: 'No Show' },
];

export default async function BookingsPage({ searchParams }: PageProps) {
  const session = await auth();
  const { search = '', status = '', page: pageStr = '1' } = await searchParams;
  const page = Math.max(1, parseInt(pageStr));
  const limit = 20;

  const where: Record<string, unknown> = {};
  if (status) where.status = status as BookingStatus;
  if (search) {
    where.OR = [
      { bookingRef: { contains: search, mode: 'insensitive' } },
      { customer: { firstName: { contains: search, mode: 'insensitive' } } },
      { customer: { lastName: { contains: search, mode: 'insensitive' } } },
      { customer: { email: { contains: search, mode: 'insensitive' } } },
    ];
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { scheduledDate: 'desc' },
      include: {
        customer: { select: { firstName: true, lastName: true, email: true, phone: true } },
        vehicle: { select: { make: true, model: true, year: true, registration: true } },
        services: { include: { service: { select: { name: true } } } },
      },
    }),
    prisma.booking.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);
  const pendingCount = await prisma.booking.count({ where: { status: 'PENDING' } });

  return (
    <>
      <Topbar title="Bookings" pendingCount={pendingCount} />
      <div className="p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-brand-white">All Bookings</h2>
            <p className="text-gray-400 text-sm">{total} total booking{total !== 1 ? 's' : ''}</p>
          </div>
          <Link href="/book">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Booking
            </Button>
          </Link>
        </div>

        <form className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input name="search" defaultValue={search} placeholder="Search by name, email, ref..." className="pl-9" />
          </div>
          <select
            name="status"
            defaultValue={status}
            className="px-3 py-2 bg-brand-darkgray border border-brand-gray rounded-lg text-sm text-brand-white focus:outline-none focus:border-brand-gold"
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <Button type="submit" variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </form>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-gray/50">
                  {['Ref', 'Customer', 'Vehicle', 'Service', 'Date & Time', 'Amount', 'Status', ''].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-gray-400 px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center text-gray-500 py-10 text-sm">No bookings found</td>
                  </tr>
                )}
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-brand-gray/30 hover:bg-brand-gray/10 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-brand-gold whitespace-nowrap">{b.bookingRef}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-brand-white">{b.customer.firstName} {b.customer.lastName}</p>
                      <p className="text-gray-400 text-xs">{b.customer.phone}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                      {b.vehicle ? `${b.vehicle.year} ${b.vehicle.make} ${b.vehicle.model}` : '—'}
                      {b.vehicle?.registration && <span className="block text-xs text-gray-500">{b.vehicle.registration}</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-300 max-w-[180px] truncate">
                      {b.services.map((s) => s.name || s.service.name).join(', ')}
                    </td>
                    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{formatDateTime(b.scheduledDate)}</td>
                    <td className="px-4 py-3 font-medium text-brand-white whitespace-nowrap">{formatCurrency(b.totalAmount)}</td>
                    <td className="px-4 py-3"><BookingStatusBadge status={b.status} /></td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/bookings/${b.id}`}>
                        <Button size="sm" variant="ghost">View</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-400">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link href={`?search=${search}&status=${status}&page=${page - 1}`}>
                  <Button size="sm" variant="outline">Previous</Button>
                </Link>
              )}
              {page < totalPages && (
                <Link href={`?search=${search}&status=${status}&page=${page + 1}`}>
                  <Button size="sm" variant="outline">Next</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
