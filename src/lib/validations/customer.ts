import { z } from 'zod';

export const createCustomerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  marketing: z.boolean().optional().default(false),
  notes: z.string().max(1000).optional(),
  source: z.string().optional(),
});

export const updateCustomerSchema = createCustomerSchema.partial();

export const createVehicleSchema = z.object({
  customerId: z.string().cuid(),
  make: z.string().min(1).max(50),
  model: z.string().min(1).max(50),
  year: z.number().int().min(1990).max(new Date().getFullYear() + 1),
  registration: z.string().min(2).max(10).transform((v) => v.toUpperCase().trim()),
  colour: z.string().min(2).max(30),
  vin: z.string().max(17).optional(),
  mileage: z.number().int().min(0).optional(),
  notes: z.string().max(500).optional(),
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
export type CreateVehicleInput = z.infer<typeof createVehicleSchema>;
