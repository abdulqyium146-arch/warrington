'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { User, ArrowRight } from 'lucide-react';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number').max(20),
  marketingConsent: z.boolean(),
});

export type CustomerFormValues = z.infer<typeof schema>;

interface StepCustomerProps {
  defaultValues?: Partial<CustomerFormValues>;
  onNext: (data: CustomerFormValues) => void;
}

export function StepCustomer({ defaultValues, onNext }: StepCustomerProps) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CustomerFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { marketingConsent: false, ...defaultValues },
  });

  const marketing = watch('marketingConsent');

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-brand-gold/10 rounded-xl text-brand-gold">
          <User className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Your Details</h2>
          <p className="text-gray-400 text-sm">We&rsquo;ll use these to confirm your booking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" placeholder="James" {...register('firstName')} />
          {errors.firstName && <p className="text-red-400 text-xs">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="Smith" {...register('lastName')} />
          {errors.lastName && <p className="text-red-400 text-xs">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="james@example.com" {...register('email')} />
        {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" type="tel" placeholder="07700 900000" {...register('phone')} />
        {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
      </div>

      <div className="flex items-start gap-3 pt-2">
        <Checkbox
          id="marketing"
          checked={marketing}
          onCheckedChange={(v) => setValue('marketingConsent', !!v)}
        />
        <label htmlFor="marketing" className="text-sm text-gray-400 cursor-pointer leading-snug">
          I&rsquo;d like to receive exclusive offers, detailing tips, and seasonal promotions by email.
        </label>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full sm:w-auto">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
