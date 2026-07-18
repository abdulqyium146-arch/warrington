import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { BookingStatusBadge } from '@/components/admin/booking-status-badge';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, formatDateTime, formatDate } from '@/lib/utils';
import { ArrowLeft, Car, User, FileText, Clock, CheckCircle2 } from 'lucide-react';
import { BookingActions } from '@/components/admin/booking-actions';

export const metadata: Metadata = { title: 'Booking Detail' };
export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }> }

export default async function BookingDetailPage({ params }: Props) {
  const { id } = await params;
  const booking = await prisma.booking.findFirst({
    where: { OR: [{ id }, { bookingRef: id }] },
    include: {
      customer: true,
      vehicle: true,
      services: { include: { service: true } },
      addons: { include: { addon: true } },
      photos: true,
      invoice: true,
      payments: { orderBy: { createdAt: 'desc' } },
      statusHistory: { orderBy: { createdAt: 'desc' }, include: { changedBy: { select: { name: true } } } },
      assignedTo: { select: { id: true, name: true } },
    },
  });

  if (!booking) notFound();

  const amountPaid = Number(booking.amountPaid ?? 0);
  const remaining = Number(booking.totalAmount) - amountPaid;

  return (
    <>
      <Topbar title={`Booking ${booking.bookingRef}`} />
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/bookings">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-heading font-bold text-brand-white">{booking.bookingRef}</h2>
              <BookingStatusBadge status={booking.status} />
              {booking.depositPaid && <Badge variant="success">Deposit Paid</Badge>}
            </div>
            <p className="text-gray-400 text-sm mt-0.5">Booked on {formatDate(booking.createdAt)}</p>
          </div>
          <BookingActions bookingId={booking.id} currentStatus={booking.status} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-brand-white mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-gold" /> Appointment
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400">Date & Time</p>
                  <p className="text-brand-white font-medium">{formatDateTime(booking.scheduledDate)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Duration</p>
                  <p className="text-brand-white">{booking.durationMinutes} minutes</p>
                </div>
                {booking.assignedTo && (
                  <div>
                    <p className="text-xs text-gray-400">Assigned To</p>
                    <p className="text-brand-white">{booking.assignedTo.name}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-brand-white mb-4">Services</h3>
              <div className="space-y-3">
                {booking.services.map((s: typeof booking.services[number]) => (
                  <div key={s.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-brand-white text-sm font-medium">{s.name || s.service.name}</p>
                      {s.quantity > 1 && <p className="text-xs text-gray-400">× {s.quantity}</p>}
                    </div>
                    <p className="text-brand-white font-medium">{formatCurrency(Number(s.priceAtBooking) * s.quantity)}</p>
                  </div>
                ))}
                {booking.addons.map((a: typeof booking.addons[number]) => (
                  <div key={a.id} className="flex items-center justify-between">
                    <p className="text-gray-300 text-sm">{a.name || a.addon.name} <span className="text-xs text-gray-500">(add-on)</span></p>
                    <p className="text-gray-300">{formatCurrency(a.priceAtBooking)}</p>
                  </div>
                ))}
                <div className="border-t border-brand-gray/50 pt-3 mt-3 space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Subtotal</span><span>{formatCurrency(booking.subtotal)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-brand-white">
                    <span>Total</span><span>{formatCurrency(booking.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </div>

            {booking.notes && (
              <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-brand-white mb-2">Customer Notes</h3>
                <p className="text-gray-300 text-sm whitespace-pre-wrap">{booking.notes}</p>
              </div>
            )}

            {booking.photos.length > 0 && (
              <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-brand-white mb-3">Photos ({booking.photos.length})</h3>
                <div className="grid grid-cols-3 gap-2">
                  {booking.photos.map((p) => (
                    <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="aspect-square rounded-lg overflow-hidden bg-brand-gray/50 hover:opacity-80 transition-opacity">
                      <img src={p.url} alt={p.caption ?? 'Vehicle photo'} className="w-full h-full object-cover" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-brand-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-gold" /> Status History
              </h3>
              <div className="space-y-3">
                {booking.statusHistory.map((h) => (
                  <div key={h.id} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <BookingStatusBadge status={h.status} />
                        <span className="text-xs text-gray-500">{formatDateTime(h.createdAt)}</span>
                      </div>
                      {h.note && <p className="text-xs text-gray-400 mt-0.5">{h.note}</p>}
                      {h.changedBy && <p className="text-xs text-gray-500">by {h.changedBy.name}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-brand-white mb-4 flex items-center gap-2">
                <User className="h-4 w-4 text-brand-gold" /> Customer
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-brand-white">{booking.customer.firstName} {booking.customer.lastName}</p>
                <p className="text-sm text-gray-400">{booking.customer.email}</p>
                <p className="text-sm text-gray-400">{booking.customer.phone}</p>
                {booking.customer.address && <p className="text-sm text-gray-400">{booking.customer.address}</p>}
              </div>
              <Link href={`/admin/customers/${booking.customerId}`} className="mt-3 block">
                <Button variant="outline" size="sm" className="w-full">View Profile</Button>
              </Link>
            </div>

            {booking.vehicle && (
              <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-brand-white mb-4 flex items-center gap-2">
                  <Car className="h-4 w-4 text-brand-gold" /> Vehicle
                </h3>
                <div className="space-y-2">
                  <p className="font-medium text-brand-white">{booking.vehicle.year} {booking.vehicle.make} {booking.vehicle.model}</p>
                  {booking.vehicle.color && <p className="text-sm text-gray-400">{booking.vehicle.color}</p>}
                  {booking.vehicle.registration && (
                    <p className="font-mono text-sm bg-brand-gray/40 px-2 py-1 rounded inline-block text-brand-white">
                      {booking.vehicle.registration.toUpperCase()}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-brand-white mb-4">Payment</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total</span>
                  <span className="text-brand-white font-medium">{formatCurrency(booking.totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Deposit</span>
                  <span className={booking.depositPaid ? 'text-green-400' : 'text-gray-400'}>
                    {formatCurrency(booking.depositAmount)} {booking.depositPaid ? '✓' : '(unpaid)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Paid</span>
                  <span className="text-green-400">{formatCurrency(amountPaid)}</span>
                </div>
                {remaining > 0 && (
                  <div className="flex justify-between font-semibold border-t border-brand-gray/50 pt-2 mt-2">
                    <span className="text-gray-300">Remaining</span>
                    <span className="text-amber-400">{formatCurrency(remaining)}</span>
                  </div>
                )}
              </div>
              {booking.payments.map((p) => (
                <div key={p.id} className="mt-3 pt-3 border-t border-brand-gray/50">
                  <p className="text-xs text-gray-400">{p.type} payment via {p.method} — {formatCurrency(p.amount)}</p>
                  <p className="text-xs text-gray-500">{formatDate(p.createdAt)}</p>
                </div>
              ))}
            </div>

            {booking.invoice && (
              <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-brand-white mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-brand-gold" /> Invoice
                </h3>
                <p className="text-sm text-gray-300 mb-3">{booking.invoice.invoiceNumber}</p>
                <Link href={`/admin/invoices/${booking.invoice.id}`}>
                  <Button variant="outline" size="sm" className="w-full">View Invoice</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
