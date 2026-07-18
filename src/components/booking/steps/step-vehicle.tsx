'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Car, ArrowLeft, ArrowRight } from 'lucide-react';

const currentYear = new Date().getFullYear();

const schema = z.object({
  make: z.string().min(1, 'Make is required').max(50),
  model: z.string().min(1, 'Model is required').max(50),
  year: z.number().int().min(1950, 'Invalid year').max(currentYear + 1, 'Invalid year'),
  color: z.string().max(30).optional(),
  registration: z.string().max(10).optional(),
  condition: z.string().optional(),
});

export type VehicleFormValues = z.infer<typeof schema>;

interface StepVehicleProps {
  defaultValues?: Partial<VehicleFormValues>;
  onNext: (data: VehicleFormValues) => void;
  onBack: () => void;
}

const CONDITIONS = ['Excellent', 'Good', 'Fair', 'Poor', 'Very dirty'];

export function StepVehicle({ defaultValues, onNext, onBack }: StepVehicleProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<VehicleFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { year: currentYear, ...defaultValues },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-brand-gold/10 rounded-xl text-brand-gold">
          <Car className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Your Vehicle</h2>
          <p className="text-gray-400 text-sm">Tell us about the vehicle we&rsquo;ll be detailing</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="make">Make</Label>
          <Input id="make" placeholder="BMW" {...register('make')} />
          {errors.make && <p className="text-red-400 text-xs">{errors.make.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="model">Model</Label>
          <Input id="model" placeholder="3 Series" {...register('model')} />
          {errors.model && <p className="text-red-400 text-xs">{errors.model.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input id="year" type="number" min={1950} max={currentYear + 1} {...register('year', { valueAsNumber: true })} />
          {errors.year && <p className="text-red-400 text-xs">{errors.year.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="color">Colour <span className="text-gray-500 font-normal">(optional)</span></Label>
          <Input id="color" placeholder="Metallic Silver" {...register('color')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="registration">Registration <span className="text-gray-500 font-normal">(optional)</span></Label>
          <Input id="registration" placeholder="WA71 ABC" className="uppercase" {...register('registration')} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="condition">Current condition <span className="text-gray-500 font-normal">(optional)</span></Label>
        <select
          id="condition"
          {...register('condition')}
          className="w-full px-3 py-2 bg-brand-darkgray border border-brand-gray rounded-lg text-brand-white focus:outline-none focus:border-brand-gold text-sm"
        >
          <option value="">Select condition...</option>
          {CONDITIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button type="submit">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
