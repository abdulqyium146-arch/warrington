import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatDate } from '@/lib/utils';
import { Search, Car } from 'lucide-react';

export const metadata: Metadata = { title: 'Vehicles' };
export const dynamic = 'force-dynamic';

interface PageProps { searchParams: Promise<{ search?: string; page?: string }> }

export default async function VehiclesPage({ searchParams }: PageProps) {
  const { search = '', page: pageStr = '1' } = await searchParams;
  const page = Math.max(1, parseInt(pageStr));
  const limit = 25;

  const where = search
    ? {
        OR: [
          { make: { contains: search, mode: 'insensitive' as const } },
          { model: { contains: search, mode: 'insensitive' as const } },
          { registration: { contains: search, mode: 'insensitive' as const } },
          { color: { contains: search, mode: 'insensitive' as const } },
          { customer: { firstName: { contains: search, mode: 'insensitive' as const } } },
          { customer: { lastName: { contains: search, mode: 'insensitive' as const } } },
        ],
      }
    : {};

  const [vehicles, total] = await Promise.all([
    prisma.vehicle.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: { select: { id: true, firstName: true, lastName: true } },
        _count: { select: { bookings: true } },
      },
    }),
    prisma.vehicle.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Topbar title="Vehicles" />
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-heading font-bold text-brand-white">Vehicles</h2>
            <p className="text-gray-400 text-sm">{total} vehicle{total !== 1 ? 's' : ''} on file</p>
          </div>
        </div>

        <form className="flex gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input name="search" defaultValue={search} placeholder="Make, model, registration..." className="pl-9" />
          </div>
          <Button type="submit" variant="outline" size="sm">Search</Button>
        </form>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-gray/50">
                  {['Vehicle', 'Registration', 'Color', 'Owner', 'Bookings', 'Added', ''].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-gray-400 px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vehicles.length === 0 && (
                  <tr><td colSpan={7} className="text-center text-gray-500 py-10">No vehicles found</td></tr>
                )}
                {vehicles.map((v) => (
                  <tr key={v.id} className="border-b border-brand-gray/30 hover:bg-brand-gray/10">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-gray-500 shrink-0" />
                        <div>
                          <p className="font-medium text-brand-white">{v.year} {v.make} {v.model}</p>
                          {v.condition && <p className="text-xs text-gray-500">{v.condition}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {v.registration
                        ? <span className="font-mono text-sm bg-brand-gray/40 px-2 py-0.5 rounded text-brand-white">{v.registration.toUpperCase()}</span>
                        : <span className="text-gray-500 text-xs">—</span>
                      }
                    </td>
                    <td className="px-4 py-3 text-gray-300">{v.color ?? '—'}</td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/customers/${v.customer.id}`} className="text-brand-gold hover:underline text-sm">
                        {v.customer.firstName} {v.customer.lastName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{v._count.bookings}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{formatDate(v.createdAt)}</td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/customers/${v.customer.id}`}>
                        <Button size="sm" variant="ghost">Owner</Button>
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
              {page > 1 && <Link href={`?search=${search}&page=${page - 1}`}><Button size="sm" variant="outline">Previous</Button></Link>}
              {page < totalPages && <Link href={`?search=${search}&page=${page + 1}`}><Button size="sm" variant="outline">Next</Button></Link>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
