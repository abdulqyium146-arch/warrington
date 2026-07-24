'use server';

import { revalidatePath } from 'next/cache';
import { createAdminClient } from '@/lib/supabase/server';
import type { Booking, BookingFormData, BookingStatus, GetBookingsOptions, GetBookingsResult } from '@/types/bookings';

export async function createBookingAction(
  data: BookingFormData
): Promise<{ success: boolean; error?: string }> {
  if (!data.full_name?.trim() || !data.phone?.trim() || !data.preferred_date || !data.preferred_time || !data.address?.trim()) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from('bookings').insert([{
      full_name: data.full_name.trim(),
      email: data.email?.trim() || '',
      phone: data.phone.trim(),
      address: data.address.trim(),
      preferred_date: data.preferred_date ?? '',
      preferred_time: data.preferred_time ?? '',
      notes: data.notes?.trim() || null,
      status: data.status || 'Pending',
      vehicle_make: '',
      vehicle_model: '',
      service: '',
    }]);

    if (error) {
      console.error('[createBookingAction]', error.message);
      return { success: false, error: 'Failed to create booking. Please try again.' };
    }
  } catch (err) {
    console.error('[createBookingAction]', err);
    return { success: false, error: 'Booking service is temporarily unavailable.' };
  }

  revalidatePath('/admin/bookings');
  return { success: true };
}

export async function updateBookingAction(
  id: string,
  data: Partial<BookingFormData>
): Promise<{ success: boolean; error?: string }> {
  const supabase = createAdminClient();

  const updates: Record<string, unknown> = {};
  if (data.full_name !== undefined) updates.full_name = data.full_name.trim();
  if (data.email !== undefined) updates.email = data.email.trim();
  if (data.phone !== undefined) updates.phone = data.phone.trim();
  if (data.address !== undefined) updates.address = data.address.trim();
  if (data.preferred_date !== undefined) updates.preferred_date = data.preferred_date;
  if (data.preferred_time !== undefined) updates.preferred_time = data.preferred_time;
  if (data.notes !== undefined) updates.notes = data.notes?.trim() || null;
  if (data.status !== undefined) updates.status = data.status;

  const { error } = await supabase.from('bookings').update(updates).eq('id', id);

  if (error) {
    console.error('[updateBookingAction]', error.message);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/bookings');
  return { success: true };
}

export async function getBookingsAction(
  options: GetBookingsOptions = {}
): Promise<GetBookingsResult> {
  const { search = '', status = 'all', page = 1, limit = 20, sortDir = 'desc' } = options;

  let supabase: ReturnType<typeof createAdminClient>;
  try {
    supabase = createAdminClient();
  } catch {
    return { bookings: [], total: 0 };
  }

  let query = supabase
    .from('bookings')
    .select('id, created_at, full_name, email, phone, address, preferred_date, preferred_time, notes, status', { count: 'exact' })
    .order('preferred_date', { ascending: sortDir === 'asc' });

  if (search.trim()) {
    const term = search.trim();
    query = query.or(`full_name.ilike.%${term}%,phone.ilike.%${term}%`);
  }

  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  const from = (page - 1) * limit;
  query = query.range(from, from + limit - 1);

  const { data, error, count } = await query;

  if (error) {
    console.error('[getBookingsAction]', error.message);
    return { bookings: [], total: 0 };
  }

  return { bookings: (data ?? []) as unknown as Booking[], total: count ?? 0 };
}

export async function deleteBookingAction(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = createAdminClient();
  const { error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error('[deleteBookingAction]', error.message);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/bookings');
  return { success: true };
}
