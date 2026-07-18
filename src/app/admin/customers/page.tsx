import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatDate } from '@/lib/utils';
import { Search, Users, Car } from 'lucide-react';

export const metadata: Metadata = { title: 'Customers' };
export const dynamic = 'force-dynamic';

interface PageProps { searchParams: Promise<{ search?: string; page?: string }> }

export default async function CustomersPage({ searchParams }: PageProps) {
  const { search = '', page: pageStr = '1' } = await searchParams;
  const page = Math.max(1, parseInt(pageStr));
  const limit = 20;

  const where = search
    ? {
        OR: [
          { firstName: { contains: search, mode: 'insensitive' as const } },
          { lastName: { contains: search, mode: 'insensitive' as const } },
          { email: { contains: search, mode: 'insensitive' as const } },
          { phone: { contains: search } },
          { vehicles: { some: { registration: { contains: search, mode: 'insensitive' as const } } } },
        ],
      }
    : {};

  const [customers, total] = await Promise.all([
    prisma.customer.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: { select: { bookings: true, vehicles: true } },
        vehicles: { take: 1, orderBy: { createdAt: 'desc' } },
      },
    }),
    prisma.customer.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Topbar title="Customers" />
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-heading font-bold text-brand-white">Customers</h2>
            <p className="text-gray-400 text-sm">{total} registered customer{total !== 1 ? 's' : ''}</p>
          </div>
        </div>

        <form className="flex gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input name="search" defaultValue={search} placeholder="Search name, email, reg..." className="pl-9" />
          </div>
          <Button type="submit" variant="outline" size="sm">Search</Button>
        </form>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-gray/50">
                  {['Customer', 'Contact', 'Vehicles', 'Bookings', 'Joined', ''].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-gray-400 px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customers.length === 0 && (
                  <tr><td colSpan={6} className="text-center text-gray-500 py-10">No customers found</td></tr>
                )}
                {customers.map((c) => (
                  <tr key={c.id} className="border-b border-brand-gray/30 hover:bg-brand-gray/10 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-brand-white">{c.firstName} {c.lastName}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-gray-300 text-sm">{c.email}</p>
                      <p className="text-gray-400 text-xs">{c.phone}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-gray-300">
                        <Car className="h-3.5 w-3.5 text-gray-500" />
                        <span>{c._count.vehicles}</span>
                        {c.vehicles[0] && <span className="text-gray-500 text-xs">({c.vehicles[0].make} {c.vehicles[0].model})</span>}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-gray-300">
                        <Users className="h-3.5 w-3.5 text-gray-500" />
                        <span>{c._count.bookings}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{formatDate(c.createdAt)}</td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/customers/${c.id}`}>
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
              {page > 1 && <Link href={`?search=${search}&page=${page - 1}`}><Button size="sm" variant="outline">Previous</Button></Link>}
              {page < totalPages && <Link href={`?search=${search}&page=${page + 1}`}><Button size="sm" variant="outline">Next</Button></Link>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
