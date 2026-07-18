'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn, formatCurrency } from '@/lib/utils';
import { Check, ArrowLeft, ArrowRight, Clock } from 'lucide-react';

export interface ServiceOption {
  id: string;
  name: string;
  description?: string | null;
  basePrice: number | string;
  durationMinutes: number;
  category: string;
  addons: { id: string; name: string; description?: string | null; price: number | string }[];
}

export interface ServiceSelection {
  serviceId: string;
  addonIds: string[];
}

interface StepServiceProps {
  services: ServiceOption[];
  defaultValue?: ServiceSelection;
  onNext: (data: ServiceSelection) => void;
  onBack: () => void;
}

export function StepService({ services, defaultValue, onNext, onBack }: StepServiceProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(defaultValue?.serviceId ?? '');
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set(defaultValue?.addonIds ?? []));
  const [error, setError] = useState('');

  const selectedService = services.find((s) => s.id === selectedServiceId);
  const categories = [...new Set(services.map((s) => s.category))];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleNext = () => {
    if (!selectedServiceId) {
      setError('Please select a service to continue');
      return;
    }
    setError('');
    onNext({ serviceId: selectedServiceId, addonIds: Array.from(selectedAddons) });
  };

  const selectedAddonsForService = selectedService?.addons.filter((a) => selectedAddons.has(a.id)) ?? [];
  const total = selectedService
    ? Number(selectedService.basePrice) + selectedAddonsForService.reduce((sum, a) => sum + Number(a.price), 0)
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-brand-white">Choose Your Service</h2>
        <p className="text-gray-400 text-sm mt-1">Select the detailing package that suits your vehicle&rsquo;s needs</p>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="space-y-3">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">{cat}</h3>
          <div className="grid grid-cols-1 gap-3">
            {services.filter((s) => s.category === cat).map((service) => {
              const active = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => { setSelectedServiceId(service.id); setSelectedAddons(new Set()); setError(''); }}
                  className={cn(
                    'w-full text-left p-4 rounded-xl border-2 transition-all',
                    active ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-gray/50 hover:border-brand-gray hover:bg-brand-gray/10'
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-heading font-semibold text-brand-white">{service.name}</p>
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />{service.durationMinutes} min
                        </Badge>
                      </div>
                      {service.description && <p className="text-gray-400 text-sm mt-1">{service.description}</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <p className="font-bold text-brand-gold text-lg">{formatCurrency(service.basePrice)}</p>
                      {active && <Check className="h-5 w-5 text-brand-gold" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {selectedService && selectedService.addons.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Optional Add-ons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedService.addons.map((addon) => {
              const checked = selectedAddons.has(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={cn(
                    'w-full text-left p-3 rounded-xl border transition-all',
                    checked ? 'border-brand-gold/50 bg-brand-gold/5' : 'border-brand-gray/50 hover:border-brand-gray'
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-brand-white">{addon.name}</p>
                      {addon.description && <p className="text-xs text-gray-400 mt-0.5">{addon.description}</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-semibold text-brand-gold">+{formatCurrency(addon.price)}</span>
                      <div className={cn('w-5 h-5 rounded flex items-center justify-center border', checked ? 'bg-brand-gold border-brand-gold' : 'border-brand-gray')}>
                        {checked && <Check className="h-3 w-3 text-brand-black" />}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedService && (
        <div className="bg-brand-gray/20 rounded-xl p-4 border border-brand-gray/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Estimated total</p>
              <p className="text-2xl font-heading font-bold text-brand-gold">{formatCurrency(total)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">25% deposit</p>
              <p className="text-lg font-semibold text-brand-white">{formatCurrency(total * 0.25)}</p>
            </div>
          </div>
        </div>
      )}

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex items-center gap-3">
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={handleNext}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
