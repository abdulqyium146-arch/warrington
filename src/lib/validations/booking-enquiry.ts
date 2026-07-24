import { z } from 'zod';

const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export const bookingEnquirySchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name is too long'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[0-9+\s()\-]+$/, 'Phone number contains invalid characters'),

  address: z
    .string()
    .trim()
    .min(5, 'Please enter your full address')
    .max(300, 'Address is too long'),

  vehicle_make: z
    .string()
    .trim()
    .min(1, 'Vehicle make is required')
    .max(60, 'Vehicle make is too long'),

  vehicle_model: z
    .string()
    .trim()
    .min(1, 'Vehicle model is required')
    .max(60, 'Vehicle model is too long'),

  service: z
    .string()
    .min(1, 'Please select a service'),

  preferred_date: z
    .string()
    .min(1, 'Please select a preferred date')
    .refine((d) => new Date(d) >= today(), {
      message: 'Preferred date must be today or in the future',
    }),

  preferred_time: z
    .string()
    .min(1, 'Please select a preferred time'),

  notes: z.string().max(1000, 'Notes must be under 1000 characters').optional(),
});

export type BookingEnquiryInput = z.infer<typeof bookingEnquirySchema>;
