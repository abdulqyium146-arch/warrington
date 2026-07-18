import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, formatDate } from '@/lib/utils';
import { ArrowLeft, Printer } from 'lucide-react';

export const metadata: Metadata = { title: 'Invoice' };
export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }> }

export default async function InvoiceDetailPage({ params }: Props) {
  const { id } = await params;
  const invoice = await prisma.invoice.findFirst({
    where: { OR: [{ id }, { invoiceNumber: id }] },
    include: {
      booking: {
        include: {
          customer: true,
          vehicle: true,
          services: { include: { service: true } },
          addons: { include: { addon: true } },
          payments: true,
        },
      },
    },
  });

  if (!invoice) notFound();
  const { booking } = invoice;
  const vatRate = 20;
  const subtotalExVat = Number(invoice.subtotal);
  const vatAmount = Number(invoice.vatAmount);

  return (
    <>
      <Topbar title={invoice.invoiceNumber} />
      <div className="p-6 space-y-5 max-w-4xl">
        <div className="flex items-center justify-between">
          <Link href="/admin/invoices">
            <Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Back</Button>
          </Link>
          <Button variant="outline" size="sm" onClick={() => {}} className="print:hidden">
            <Printer className="h-4 w-4 mr-2" />
            Print Invoice
          </Button>
        </div>

        <div className="bg-white text-gray-900 rounded-xl p-8 print:p-0 print:shadow-none shadow-xl">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">WCD Detailing</h1>
              <p className="text-gray-600 text-sm mt-1">Warrington Car Detailing</p>
              <p className="text-gray-600 text-sm">Warrington, WA1</p>
              <p className="text-gray-600 text-sm">info@warringtoncardetailing.co.uk</p>
              <p className="text-gray-600 text-sm">07XXX XXXXXX</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">INVOICE</p>
              <p className="font-mono text-lg font-semibold text-gray-700 mt-1">{invoice.invoiceNumber}</p>
              <div className="mt-2">
                {invoice.status === 'PAID'
                  ? <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">PAID</span>
                  : <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">UNPAID</span>
                }
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Bill To</p>
              <p className="font-semibold">{booking.customer.firstName} {booking.customer.lastName}</p>
              <p className="text-gray-600 text-sm">{booking.customer.email}</p>
              <p className="text-gray-600 text-sm">{booking.customer.phone}</p>
            </div>
            <div className="text-right">
              <div className="space-y-1 text-sm">
                <div className="flex justify-end gap-4">
                  <span className="text-gray-500">Invoice Date:</span>
                  <span className="font-medium">{formatDate(invoice.createdAt)}</span>
                </div>
                {invoice.dueDate && (
                  <div className="flex justify-end gap-4">
                    <span className="text-gray-500">Due Date:</span>
                    <span className="font-medium">{formatDate(invoice.dueDate)}</span>
                  </div>
                )}
                <div className="flex justify-end gap-4">
                  <span className="text-gray-500">Booking Ref:</span>
                  <span className="font-mono font-medium">{booking.bookingRef}</span>
                </div>
                <div className="flex justify-end gap-4">
                  <span className="text-gray-500">Service Date:</span>
                  <span className="font-medium">{formatDate(booking.scheduledDate)}</span>
                </div>
              </div>
            </div>
          </div>

          {booking.vehicle && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Vehicle</p>
              <p className="font-medium">{booking.vehicle.year} {booking.vehicle.make} {booking.vehicle.model} {booking.vehicle.color ? `(${booking.vehicle.color})` : ''}</p>
              {booking.vehicle.registration && <p className="font-mono text-sm text-gray-600">{booking.vehicle.registration.toUpperCase()}</p>}
            </div>
          )}

          <table className="w-full mb-8">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 text-xs uppercase tracking-wider text-gray-500">Description</th>
                <th className="text-right py-3 text-xs uppercase tracking-wider text-gray-500 w-20">Qty</th>
                <th className="text-right py-3 text-xs uppercase tracking-wider text-gray-500 w-28">Unit Price</th>
                <th className="text-right py-3 text-xs uppercase tracking-wider text-gray-500 w-28">Amount</th>
              </tr>
            </thead>
            <tbody>
              {booking.services.map((s) => (
                <tr key={s.id} className="border-b border-gray-100">
                  <td className="py-3 font-medium">{s.name || s.service.name}</td>
                  <td className="py-3 text-right text-gray-600">{s.quantity}</td>
                  <td className="py-3 text-right text-gray-600">{formatCurrency(s.priceAtBooking)}</td>
                  <td className="py-3 text-right font-medium">{formatCurrency(Number(s.priceAtBooking) * s.quantity)}</td>
                </tr>
              ))}
              {booking.addons.map((a) => (
                <tr key={a.id} className="border-b border-gray-100">
                  <td className="py-3 text-gray-700">{a.name || a.addon.name} <span className="text-xs text-gray-400">(add-on)</span></td>
                  <td className="py-3 text-right text-gray-600">1</td>
                  <td className="py-3 text-right text-gray-600">{formatCurrency(a.priceAtBooking)}</td>
                  <td className="py-3 text-right">{formatCurrency(a.priceAtBooking)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal (ex. VAT)</span>
                <span>{formatCurrency(subtotalExVat)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">VAT ({vatRate}%)</span>
                <span>{formatCurrency(vatAmount)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t-2 border-gray-200 pt-2 mt-2">
                <span>Total</span>
                <span>{formatCurrency(invoice.totalAmount)}</span>
              </div>
              {Number(booking.amountPaid ?? 0) > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Amount Paid</span>
                  <span>−{formatCurrency(booking.amountPaid ?? 0)}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>Thank you for choosing WCD Detailing. Your vehicle deserves the best.</p>
            <p className="mt-1">Please retain this invoice for your records.</p>
          </div>
        </div>
      </div>
    </>
  );
}
