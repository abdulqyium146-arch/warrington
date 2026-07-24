'use client';

import { useState, useTransition, useCallback, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
  Plus, Search, Trash2, Pencil, ChevronLeft, ChevronRight,
  RefreshCw, ArrowUpDown, X,
} from 'lucide-react';
import { createBookingAction, updateBookingAction, deleteBookingAction } from '@/app/actions/bookings';
import type { Booking, BookingStatus, BookingFormData } from '@/types/bookings';

const STATUSES: Array<BookingStatus | 'all'> = ['all', 'Pending', 'Confirmed', 'Completed', 'Cancelled'];

const STATUS_COLORS: Record<BookingStatus, string> = {
  Pending: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Confirmed: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Completed: 'bg-green-500/15 text-green-400 border-green-500/30',
  Cancelled: 'bg-red-500/15 text-red-400 border-red-500/30',
};

function StatusBadge({ status }: { status: BookingStatus }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[status]}`}>
      {status}
    </span>
  );
}

const EMPTY_FORM: BookingFormData = {
  full_name: '',
  email: '',
  phone: '',
  address: '',
  preferred_date: '',
  preferred_time: '',
  notes: '',
  status: 'Pending',
};

function BookingModal({
  booking,
  onClose,
  onSaved,
}: {
  booking?: Booking;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isEdit = !!booking;
  const [form, setForm] = useState<BookingFormData>(
    booking
      ? {
          full_name: booking.full_name,
          email: booking.email,
          phone: booking.phone,
          address: booking.address,
          preferred_date: booking.preferred_date,
          preferred_time: booking.preferred_time,
          notes: booking.notes ?? '',
          status: booking.status,
        }
      : EMPTY_FORM
  );
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  function setField(key: keyof BookingFormData, value: string) {
    setForm((f) => ({ ...f, [key]: value } as BookingFormData));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const result = isEdit
      ? await updateBookingAction(booking!.id, form)
      : await createBookingAction(form);

    setSaving(false);
    if (result.success) {
      onSaved();
    } else {
      setError(result.error ?? 'Something went wrong');
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-brand-darkgray border border-brand-gray/50 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-gray/50">
          <h2 className="font-heading font-bold text-brand-white">{isEdit ? 'Edit Booking' : 'New Booking'}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-gray-400 hover:text-brand-white hover:bg-brand-gray/50 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                value={form.full_name}
                onChange={(e) => setField('full_name', e.target.value)}
                required
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white placeholder:text-gray-600 focus:border-brand-gold focus:outline-none"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                value={form.phone}
                onChange={(e) => setField('phone', e.target.value)}
                required
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white placeholder:text-gray-600 focus:border-brand-gold focus:outline-none"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white placeholder:text-gray-600 focus:border-brand-gold focus:outline-none"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Date <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                value={form.preferred_date}
                onChange={(e) => setField('preferred_date', e.target.value)}
                required
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white focus:border-brand-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Time <span className="text-red-400">*</span>
              </label>
              <input
                type="time"
                value={form.preferred_time}
                onChange={(e) => setField('preferred_time', e.target.value)}
                required
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white focus:border-brand-gold focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Location <span className="text-red-400">*</span>
              </label>
              <input
                value={form.address}
                onChange={(e) => setField('address', e.target.value)}
                required
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white placeholder:text-gray-600 focus:border-brand-gold focus:outline-none"
                placeholder="Address or location"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-400 mb-1">Notes</label>
              <textarea
                value={form.notes}
                onChange={(e) => setField('notes', e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white placeholder:text-gray-600 focus:border-brand-gold focus:outline-none resize-none"
                placeholder="Additional notes"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => setField('status', e.target.value)}
                className="w-full rounded-lg border border-brand-gray bg-brand-black px-3 py-2 text-sm text-brand-white focus:border-brand-gold focus:outline-none"
              >
                {(['Pending', 'Confirmed', 'Completed', 'Cancelled'] as BookingStatus[]).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-brand-gray text-sm text-gray-400 hover:text-brand-white hover:border-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 rounded-lg bg-brand-gold text-brand-black text-sm font-semibold hover:bg-brand-gold-light transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const LIMIT = 20;

interface Props {
  initialBookings: Booking[];
  total: number;
  page: number;
  search: string;
  status: string;
  sortDir: 'asc' | 'desc';
}

export function BookingsClient({ initialBookings, total, page, search: initSearch, status: initStatus, sortDir }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [rows, setRows] = useState<Booking[]>(initialBookings);
  const [searchInput, setSearchInput] = useState(initSearch);
  const [actionError, setActionError] = useState('');
  const [modal, setModal] = useState<{ open: boolean; booking?: Booking }>({ open: false });

  useEffect(() => {
    setRows(initialBookings);
  }, [initialBookings]);

  const totalPages = Math.max(1, Math.ceil(total / LIMIT));

  const pushParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([k, v]) => {
        if (v) params.set(k, v);
        else params.delete(k);
      });
      startTransition(() => router.push(`${pathname}?${params.toString()}`));
    },
    [pathname, router, searchParams]
  );

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    pushParams({ search: searchInput, page: '1' });
  }

  function handleStatusFilter(s: string) {
    pushParams({ status: s === 'all' ? '' : s, page: '1' });
  }

  function handlePage(n: number) {
    pushParams({ page: String(n) });
  }

  function toggleSort() {
    pushParams({ sort: sortDir === 'desc' ? 'asc' : 'desc', page: '1' });
  }

  function handleModalSaved() {
    setModal({ open: false });
    startTransition(() => router.refresh());
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this booking? This cannot be undone.')) return;
    setActionError('');
    const result = await deleteBookingAction(id);
    if (result.success) {
      setRows((prev) => prev.filter((b) => b.id !== id));
    } else {
      setActionError(result.error ?? 'Failed to delete booking');
    }
  }

  return (
    <div className="p-6 space-y-5">
      {modal.open && (
        <BookingModal
          booking={modal.booking}
          onClose={() => setModal({ open: false })}
          onSaved={handleModalSaved}
        />
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Bookings</h2>
          <p className="text-sm text-gray-400">{total} total</p>
        </div>
        <button
          onClick={() => setModal({ open: true, booking: undefined })}
          className="flex items-center gap-2 rounded-lg bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-black hover:bg-brand-gold-light transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Booking
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by name or phone…"
              className="w-64 rounded-lg border border-brand-gray bg-brand-darkgray pl-9 pr-4 py-2 text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-black hover:bg-brand-gold-light transition-colors"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap gap-1.5">
          {STATUSES.map((s) => {
            const active = (initStatus || 'all') === s;
            return (
              <button
                key={s}
                onClick={() => handleStatusFilter(s)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors capitalize ${
                  active
                    ? 'bg-brand-gold text-brand-black'
                    : 'bg-brand-gray/50 text-gray-400 hover:text-brand-white'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {actionError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
          {actionError}
        </div>
      )}

      {isPending && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <RefreshCw className="h-3 w-3 animate-spin" /> Loading…
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-brand-gray/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-gray/50 bg-brand-darkgray text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">
                <button
                  onClick={toggleSort}
                  className="flex items-center gap-1 hover:text-brand-white transition-colors"
                >
                  Date
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray/30">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-16 text-center text-sm text-gray-500">
                  No bookings found.
                </td>
              </tr>
            ) : (
              rows.map((b) => (
                <tr key={b.id} className="bg-brand-black hover:bg-brand-darkgray/60 transition-colors">
                  <td className="px-4 py-3 font-medium text-brand-white whitespace-nowrap">{b.full_name}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{b.phone}</td>
                  <td className="px-4 py-3 text-gray-300 max-w-[160px] truncate">{b.email || '—'}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{b.preferred_date}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{b.preferred_time}</td>
                  <td className="px-4 py-3 text-gray-300 max-w-[160px] truncate">{b.address}</td>
                  <td className="px-4 py-3 text-gray-400 max-w-[140px] truncate">{b.notes || '—'}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={b.status} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => setModal({ open: true, booking: b })}
                        className="rounded-md p-1.5 text-gray-500 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                        title="Edit booking"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="rounded-md p-1.5 text-gray-500 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                        title="Delete booking"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-gray-500">
          {total} booking{total !== 1 ? 's' : ''} total
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page <= 1}
            className="rounded-md p-1.5 text-gray-400 hover:bg-brand-gray/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="px-2 text-xs text-gray-400">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => handlePage(page + 1)}
            disabled={page >= totalPages}
            className="rounded-md p-1.5 text-gray-400 hover:bg-brand-gray/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
