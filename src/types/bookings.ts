export type BookingStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Booking {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  preferred_date: string;
  preferred_time: string;
  notes: string | null;
  status: BookingStatus;
}

export interface BookingFormData {
  full_name: string;
  phone: string;
  email?: string;
  address?: string;
  preferred_date?: string;
  preferred_time?: string;
  notes?: string;
  status?: BookingStatus;
}

export interface GetBookingsOptions {
  search?: string;
  status?: BookingStatus | 'all';
  page?: number;
  limit?: number;
  sortDir?: 'asc' | 'desc';
}

export interface GetBookingsResult {
  bookings: Booking[];
  total: number;
}
