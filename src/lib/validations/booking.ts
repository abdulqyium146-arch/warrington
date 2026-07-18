import { z } from 'zod';

export const customerDetailsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid UK phone number').max(20),
  marketing: z.boolean().optional().default(false),
});

export const vehicleSchema = z.object({
  make: z.string().min(1, 'Make is required').max(50),
  model: z.string().min(1, 'Model is required').max(50),
  year: z.number().int().min(1990).max(new Date().getFullYear() + 1),
  registration: z.string().min(2, 'Registration is required').max(10).transform((v) => v.toUpperCase().trim()),
  colour: z.string().min(2, 'Colour is required').max(30),
  vin: z.string().max(17).optional(),
  mileage: z.number().int().min(0).optional(),
  vehicleId: z.string().optional(), // if returning customer selecting existing vehicle
});

export const serviceSelectionSchema = z.object({
  services: z.array(z.object({
    serviceId: z.string().cuid(),
    addonIds: z.array(z.string().cuid()).optional().default([]),
  })).min(1, 'Please select at least one service'),
});

export const dateTimeSchema = z.object({
  scheduledDate: z.string().datetime({ message: 'Please select a valid date and time' }),
});

export const notesSchema = z.object({
  notes: z.string().max(1000).optional(),
  isMobile: z.boolean().default(false),
  mobileAddress: z.string().max(200).optional(),
  pickupRequired: z.boolean().default(false),
});

export const paymentSchema = z.object({
  paymentOption: z.enum(['deposit', 'pay_later']),
});

// Full booking creation schema (server-side validation)
export const createBookingSchema = z.object({
  customer: customerDetailsSchema,
  vehicle: vehicleSchema,
  services: serviceSelectionSchema,
  dateTime: dateTimeSchema,
  photos: z.array(z.object({ url: z.string().url(), key: z.string(), type: z.string() })).optional().default([]),
  notes: notesSchema,
  payment: paymentSchema,
  source: z.string().default('website'),
});

export type CustomerDetailsInput = z.infer<typeof customerDetailsSchema>;
export type VehicleInput = z.infer<typeof vehicleSchema>;
export type ServiceSelectionInput = z.infer<typeof serviceSelectionSchema>;
export type DateTimeInput = z.infer<typeof dateTimeSchema>;
export type NotesInput = z.infer<typeof notesSchema>;
export type PaymentInput = z.infer<typeof paymentSchema>;
export type CreateBookingInput = z.infer<typeof createBookingSchema>;
