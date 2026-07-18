import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { BookingStatusBadge } from '@/components/admin/booking-status-badge';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatDate, formatDateTime } from '@/lib/utils';
import { ArrowLeft, Mail, Phone, MapPin, Car, BookOpen, PoundSterling } from 'lucide-react';

export const metadata: Metadata = { title: 'Customer Profile' };
export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }> }

export default async function CustomerProfilePage({ params }: Props) {
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

  if (!customer) notFound();

  const stats = await prisma.booking.aggregate({
    where: { customerId: id, status: 'COMPLETED' },
    _sum: { totalAmount: true },
    _count: true,
  });

  const lifetimeValue = Number(stats._sum.totalAmount ?? 0);

  return (
    <>
      <Topbar title="Customer Profile" />
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/customers">
            <Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Back</Button>
          </Link>
          <h2 className="text-xl font-heading font-bold text-brand-white">
            {customer.firstName} {customer.lastName}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Bookings', value: customer._count.bookings, icon: BookOpen },
            { label: 'Completed', value: stats._count, icon: BookOpen },
            { label: 'Lifetime Value', value: formatCurrency(lifetimeValue), icon: PoundSterling },
          ].map((s) => (
            <div key={s.label} className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-4 flex items-center gap-3">
              <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold"><s.icon className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-gray-400">{s.label}</p>
                <p className="font-bold text-brand-white text-lg">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-5">
            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-brand-white mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                  <a href={`mailto:${customer.email}`} className="text-brand-gold hover:underline">{customer.email}</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                  <a href={`tel:${customer.phone}`} className="text-gray-300">{customer.phone}</a>
                </div>
                {customer.address && (
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{customer.address}{customer.city ? `, ${customer.city}` : ''}{customer.postcode ? ` ${customer.postcode}` : ''}</span>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-brand-gray/50">
                <p className="text-xs text-gray-500">Customer since {formatDate(customer.createdAt)}</p>
                {customer.marketingConsent && <p className="text-xs text-green-400 mt-1">Marketing consent given</p>}
              </div>
            </div>

            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-brand-white mb-4 flex items-center gap-2">
                <Car className="h-4 w-4 text-brand-gold" /> Vehicles ({customer._count.vehicles})
              </h3>
              <div className="space-y-3">
                {customer.vehicles.length === 0 && <p className="text-gray-500 text-sm">No vehicles on file</p>}
                {customer.vehicles.map((v) => (
                  <div key={v.id} className="p-3 bg-brand-gray/30 rounded-lg">
                    <p className="font-medium text-brand-white text-sm">{v.year} {v.make} {v.model}</p>
                    {v.color && <p className="text-xs text-gray-400">{v.color}</p>}
                    {v.registration && (
                      <span className="font-mono text-xs bg-brand-gray/60 px-2 py-0.5 rounded mt-1 inline-block text-brand-white">
                        {v.registration.toUpperCase()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {customer.notes && (
              <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-brand-white mb-2">Notes</h3>
                <p className="text-gray-300 text-sm whitespace-pre-wrap">{customer.notes}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
              <div className="p-5 border-b border-brand-gray/50 flex items-center justify-between">
                <h3 className="font-heading font-semibold text-brand-white">Booking History</h3>
                <Link href={`/admin/bookings?search=${customer.email}`} className="text-xs text-brand-gold hover:underline">View all</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-gray/30">
                      {['Ref', 'Service', 'Vehicle', 'Date', 'Amount', 'Status'].map((h) => (
                        <th key={h} className="text-left text-xs font-medium text-gray-400 px-4 py-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {customer.bookings.length === 0 && (
                      <tr><td colSpan={6} className="text-center text-gray-500 py-8">No bookings yet</td></tr>
                    )}
                    {customer.bookings.map((b) => (
                      <tr key={b.id} className="border-b border-brand-gray/20 hover:bg-brand-gray/10">
                        <td className="px-4 py-3">
                          <Link href={`/admin/bookings/${b.id}`} className="font-mono text-xs text-brand-gold hover:underline">{b.bookingRef}</Link>
                        </td>
                        <td className="px-4 py-3 text-gray-300 max-w-[180px] truncate">
                          {b.services.map((s) => s.name || s.service.name).join(', ')}
                        </td>
                        <td className="px-4 py-3 text-gray-400 text-xs">
                          {b.vehicle ? `${b.vehicle.make} ${b.vehicle.model}` : '—'}
                        </td>
                        <td className="px-4 py-3 text-gray-300 whitespace-nowrap text-xs">{formatDate(b.scheduledDate)}</td>
                        <td className="px-4 py-3 text-brand-white font-medium">{formatCurrency(b.totalAmount)}</td>
                        <td className="px-4 py-3"><BookingStatusBadge status={b.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
