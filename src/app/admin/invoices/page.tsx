import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Search, FileText } from 'lucide-react';

export const metadata: Metadata = { title: 'Invoices' };
export const dynamic = 'force-dynamic';

interface PageProps { searchParams: Promise<{ search?: string; page?: string }> }

export default async function InvoicesPage({ searchParams }: PageProps) {
  const { search = '', page: pageStr = '1' } = await searchParams;
  const page = Math.max(1, parseInt(pageStr));
  const limit = 20;

  const where = search
    ? {
        OR: [
          { invoiceNumber: { contains: search, mode: 'insensitive' as const } },
          { booking: { customer: { firstName: { contains: search, mode: 'insensitive' as const } } } },
          { booking: { customer: { lastName: { contains: search, mode: 'insensitive' as const } } } },
        ],
      }
    : {};

  const [invoices, total] = await Promise.all([
    prisma.invoice.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        booking: {
          include: {
            customer: { select: { firstName: true, lastName: true, email: true } },
            services: { include: { service: { select: { name: true } } } },
          },
        },
      },
    }),
    prisma.invoice.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);
  const statusVariant = (s: string) => s === 'PAID' ? 'success' : s === 'OVERDUE' ? 'destructive' : 'warning';

  return (
    <>
      <Topbar title="Invoices" />
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-heading font-bold text-brand-white">Invoices</h2>
            <p className="text-gray-400 text-sm">{total} invoice{total !== 1 ? 's' : ''}</p>
          </div>
        </div>

        <form className="flex gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input name="search" defaultValue={search} placeholder="Search invoice number or customer..." className="pl-9" />
          </div>
          <Button type="submit" variant="outline" size="sm">Search</Button>
        </form>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-gray/50">
                  {['Invoice #', 'Customer', 'Booking', 'Amount', 'Issued', 'Due', 'Status', ''].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-gray-400 px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {invoices.length === 0 && (
                  <tr><td colSpan={8} className="text-center text-gray-500 py-10">No invoices found</td></tr>
                )}
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-brand-gray/30 hover:bg-brand-gray/10">
                    <td className="px-4 py-3 font-mono text-xs text-brand-gold">{inv.invoiceNumber}</td>
                    <td className="px-4 py-3">
                      <p className="text-brand-white">{inv.booking.customer.firstName} {inv.booking.customer.lastName}</p>
                      <p className="text-gray-400 text-xs">{inv.booking.customer.email}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{inv.booking.bookingRef}</td>
                    <td className="px-4 py-3 font-medium text-brand-white">{formatCurrency(inv.totalAmount)}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{formatDate(inv.createdAt)}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{inv.dueDate ? formatDate(inv.dueDate) : '—'}</td>
                    <td className="px-4 py-3">
                      <Badge variant={statusVariant(inv.status) as 'success' | 'destructive' | 'warning'}>
                        {inv.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/invoices/${inv.id}`}>
                        <Button size="sm" variant="ghost">
                          <FileText className="h-4 w-4" />
                        </Button>
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
