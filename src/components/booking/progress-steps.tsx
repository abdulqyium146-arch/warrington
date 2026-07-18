'use client';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export const STEPS = [
  { id: 1, label: 'Your Details' },
  { id: 2, label: 'Vehicle' },
  { id: 3, label: 'Service' },
  { id: 4, label: 'Date & Time' },
  { id: 5, label: 'Photos' },
  { id: 6, label: 'Notes' },
  { id: 7, label: 'Payment' },
];

interface ProgressStepsProps {
  currentStep: number;
}

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-brand-gray/50 z-0" />
        {STEPS.map((step) => {
          const done = currentStep > step.id;
          const active = currentStep === step.id;
          return (
            <div key={step.id} className="flex flex-col items-center gap-1.5 relative z-10">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all',
                  done ? 'bg-brand-gold text-brand-black' : active ? 'bg-brand-gold/20 border-2 border-brand-gold text-brand-gold' : 'bg-brand-gray/50 border border-brand-gray text-gray-500'
                )}
              >
                {done ? <Check className="h-5 w-5" /> : step.id}
              </div>
              <span className={cn('text-xs font-medium hidden sm:block', active ? 'text-brand-gold' : done ? 'text-gray-400' : 'text-gray-600')}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 sm:hidden">
        <p className="text-center text-sm text-brand-gold font-medium">
          Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1]?.label}
        </p>
      </div>
    </div>
  );
}
