import { z } from 'zod';

export const bookingEnquirySchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, 'Please enter your name'),

  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[0-9+\s()\-]+$/, 'Please enter a valid phone number'),

  message: z
    .string()
    .max(1000)
    .optional(),
});

export type BookingEnquiryInput = z.infer<typeof bookingEnquirySchema>;
