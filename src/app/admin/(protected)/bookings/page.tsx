import type { Metadata } from 'next';
import { getAdminSession } from '@/lib/session';
import { getBookingsAction } from '@/app/actions/bookings';
import { BookingsClient } from '@/components/admin/bookings/BookingsClient';
import type { BookingStatus } from '@/types/bookings';

export const metadata: Metadata = { title: 'Bookings' };
export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ search?: string; status?: string; page?: string; sort?: string }>;
}

export default async function BookingsPage({ searchParams }: PageProps) {
  await getAdminSession();
  const { search = '', status = '', page: pageStr = '1', sort = 'desc' } = await searchParams;
  const page = Math.max(1, parseInt(pageStr) || 1);
  const sortDir = sort === 'asc' ? 'asc' : 'desc';

  const result = await getBookingsAction({
    search,
    status: (status as BookingStatus | 'all') || 'all',
    page,
    limit: 20,
    sortDir,
  });

  return (
    <BookingsClient
      initialBookings={result.bookings}
      total={result.total}
      page={page}
      search={search}
      status={status}
      sortDir={sortDir}
    />
  );
}
