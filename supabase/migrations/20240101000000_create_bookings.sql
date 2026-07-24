-- WCD Detailing — Supabase bookings table
-- Run this in: Supabase Dashboard → SQL Editor → New Query

CREATE TABLE IF NOT EXISTS bookings (
  id             uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at     timestamptz DEFAULT now() NOT NULL,
  full_name      text        NOT NULL,
  email          text        NOT NULL,
  phone          text        NOT NULL,
  address        text        NOT NULL,
  vehicle_make   text        NOT NULL,
  vehicle_model  text        NOT NULL,
  service        text        NOT NULL,
  preferred_date text        NOT NULL,
  preferred_time text        NOT NULL,
  notes          text,
  status         text        NOT NULL DEFAULT 'Pending'
);

-- Indexes for admin listing performance
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_status_idx     ON bookings (status);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to INSERT a booking (public booking form)
CREATE POLICY "Anyone can submit a booking"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only service role can SELECT / UPDATE / DELETE (admin panel uses service role key)
-- No explicit policy needed — service role bypasses RLS automatically
