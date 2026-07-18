'use client';
import { useState, useEffect } from 'react';
import { ProgressSteps } from './progress-steps';
import { StepCustomer, type CustomerFormValues } from './steps/step-customer';
import { StepVehicle, type VehicleFormValues } from './steps/step-vehicle';
import { StepService, type ServiceOption, type ServiceSelection } from './steps/step-service';
import { StepDateTime, type DateTimeSelection } from './steps/step-datetime';
import { StepPhotos, type PhotosData } from './steps/step-photos';
import { StepNotes, type NotesFormValues } from './steps/step-notes';
import { StepPayment } from './steps/step-payment';
import { useRouter } from 'next/navigation';

const STORAGE_KEY = 'wcd_booking_wizard';

interface WizardState {
  step: number;
  customer?: CustomerFormValues;
  vehicle?: VehicleFormValues;
  serviceSelection?: ServiceSelection;
  dateTime?: DateTimeSelection;
  photos?: PhotosData;
  notes?: NotesFormValues;
}

interface BookingWizardProps {
  services: ServiceOption[];
  defaultServiceId?: string;
}

export function BookingWizard({ services, defaultServiceId }: BookingWizardProps) {
  const router = useRouter();
  const [state, setState] = useState<WizardState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return {
      step: 1,
      serviceSelection: defaultServiceId ? { serviceId: defaultServiceId, addonIds: [] } : undefined,
    };
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const go = (step: number, data?: Partial<WizardState>) => {
    setState((prev) => ({ ...prev, ...data, step }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedService = services.find((s) => s.id === state.serviceSelection?.serviceId);

  return (
    <div className="space-y-8">
      <ProgressSteps currentStep={state.step} />

      <div className="bg-brand-darkgray border border-brand-gray/50 rounded-2xl p-6 sm:p-8">
        {state.step === 1 && (
          <StepCustomer
            defaultValues={state.customer}
            onNext={(customer) => go(2, { customer })}
          />
        )}
        {state.step === 2 && (
          <StepVehicle
            defaultValues={state.vehicle}
            onNext={(vehicle) => go(3, { vehicle })}
            onBack={() => go(1)}
          />
        )}
        {state.step === 3 && (
          <StepService
            services={services}
            defaultValue={state.serviceSelection}
            onNext={(serviceSelection) => go(4, { serviceSelection })}
            onBack={() => go(2)}
          />
        )}
        {state.step === 4 && (
          <StepDateTime
            durationMinutes={selectedService?.durationMinutes ?? 60}
            defaultValue={state.dateTime}
            onNext={(dateTime) => go(5, { dateTime })}
            onBack={() => go(3)}
          />
        )}
        {state.step === 5 && (
          <StepPhotos
            defaultValue={state.photos}
            onNext={(photos) => go(6, { photos })}
            onBack={() => go(4)}
          />
        )}
        {state.step === 6 && (
          <StepNotes
            defaultValue={state.notes}
            onNext={(notes) => go(7, { notes })}
            onBack={() => go(5)}
          />
        )}
        {state.step === 7 && state.customer && state.vehicle && state.serviceSelection && state.dateTime && (
          <StepPayment
            customer={state.customer}
            vehicle={state.vehicle}
            serviceSelection={state.serviceSelection}
            services={services}
            dateTime={state.dateTime}
            notes={state.notes?.notes ?? ''}
            onBack={() => go(6)}
            onSuccess={(bookingRef) => {
              sessionStorage.removeItem(STORAGE_KEY);
              router.push(`/book/confirmation?ref=${bookingRef}`);
            }}
          />
        )}
      </div>
    </div>
  );
}
