-- ============================================================
-- Migration: 001_create_bookings
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. Create the bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     TIMESTAMPTZ NOT NULL    DEFAULT NOW(),
  full_name      TEXT        NOT NULL,
  email          TEXT        NOT NULL,
  phone          TEXT        NOT NULL,
  address        TEXT        NOT NULL,
  vehicle_make   TEXT        NOT NULL,
  vehicle_model  TEXT        NOT NULL,
  service        TEXT        NOT NULL,
  preferred_date DATE        NOT NULL,
  preferred_time TEXT        NOT NULL,
  notes          TEXT,
  status         TEXT        NOT NULL DEFAULT 'Pending'
                 CHECK (status IN ('Pending', 'Confirmed', 'Completed', 'Cancelled'))
);

-- 2. Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- 3. INSERT policy — any visitor can submit a booking enquiry
CREATE POLICY "public_can_insert_bookings"
  ON public.bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 4. SELECT policy — only the service role (server/admin) can read bookings
CREATE POLICY "service_role_can_select_bookings"
  ON public.bookings
  FOR SELECT
  TO service_role
  USING (true);

-- 5. UPDATE policy — only the service role can update bookings
CREATE POLICY "service_role_can_update_bookings"
  ON public.bookings
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 6. DELETE policy — only the service role can delete bookings
CREATE POLICY "service_role_can_delete_bookings"
  ON public.bookings
  FOR DELETE
  TO service_role
  USING (true);

-- 7. Indexes for admin dashboard performance
CREATE INDEX IF NOT EXISTS bookings_created_at_idx  ON public.bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_status_idx      ON public.bookings (status);
CREATE INDEX IF NOT EXISTS bookings_full_name_idx   ON public.bookings (lower(full_name));
CREATE INDEX IF NOT EXISTS bookings_email_idx       ON public.bookings (email);
