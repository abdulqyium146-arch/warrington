'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Loader2, Clock } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, isToday, isBefore, startOfDay, isSameMonth } from 'date-fns';

export interface DateTimeSelection {
  date: string;
  time: string;
}

interface StepDateTimeProps {
  durationMinutes: number;
  defaultValue?: DateTimeSelection;
  onNext: (data: DateTimeSelection) => void;
  onBack: () => void;
}

export function StepDateTime({ durationMinutes, defaultValue, onNext, onBack }: StepDateTimeProps) {
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultValue?.date ? new Date(defaultValue.date) : null);
  const [selectedTime, setSelectedTime] = useState<string>(defaultValue?.time ?? '');
  const [slots, setSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState<Set<string>>(new Set());
  const [error, setError] = useState('');

  const calStart = startOfWeek(startOfMonth(month), { weekStartsOn: 1 });
  const calEnd = endOfWeek(endOfMonth(month), { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calStart, end: calEnd });
  const today = startOfDay(new Date());

  useEffect(() => {
    const from = format(calStart, 'yyyy-MM-dd');
    const to = format(calEnd, 'yyyy-MM-dd');
    fetch('/api/availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fromDate: from, toDate: to }),
    })
      .then((r) => r.json())
      .then((d) => setUnavailable(new Set(d.unavailable ?? [])));
  }, [month]);

  useEffect(() => {
    if (!selectedDate) return;
    setLoading(true);
    setSlots([]);
    setSelectedTime('');
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    fetch(`/api/availability?date=${dateStr}&duration=${durationMinutes}`)
      .then((r) => r.json())
      .then((d) => { setSlots(d.slots ?? []); setLoading(false); });
  }, [selectedDate, durationMinutes]);

  const handleNext = () => {
    if (!selectedDate || !selectedTime) {
      setError('Please select a date and time slot');
      return;
    }
    setError('');
    onNext({ date: format(selectedDate, 'yyyy-MM-dd'), time: selectedTime });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-brand-white">Choose Date & Time</h2>
        <p className="text-gray-400 text-sm mt-1">Select your preferred appointment slot</p>
      </div>

      <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-gray/50">
          <button onClick={() => setMonth(subMonths(month, 1))} className="p-1.5 rounded-lg hover:bg-brand-gray/50 text-gray-400 hover:text-brand-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h3 className="font-heading font-semibold text-brand-white">{format(month, 'MMMM yyyy')}</h3>
          <button onClick={() => setMonth(addMonths(month, 1))} className="p-1.5 rounded-lg hover:bg-brand-gray/50 text-gray-400 hover:text-brand-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 border-b border-brand-gray/50">
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
            <div key={d} className="py-3 text-center text-xs font-medium text-gray-500">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 p-3 gap-1">
          {days.map((day) => {
            const dateStr = format(day, 'yyyy-MM-dd');
            const past = isBefore(day, today);
            const notThisMonth = !isSameMonth(day, month);
            const isUnavail = unavailable.has(dateStr);
            const disabled = past || isUnavail;
            const selected = selectedDate && isSameDay(day, selectedDate);
            const todayMark = isToday(day);

            return (
              <button
                key={dateStr}
                type="button"
                disabled={disabled}
                onClick={() => { setSelectedDate(day); setError(''); }}
                className={cn(
                  'aspect-square flex items-center justify-center rounded-full text-sm transition-all',
                  disabled ? 'cursor-not-allowed opacity-30' : 'hover:bg-brand-gray/50',
                  notThisMonth && !disabled ? 'opacity-40' : '',
                  selected ? 'bg-brand-gold text-brand-black font-bold' : '',
                  todayMark && !selected ? 'border border-brand-gold text-brand-gold' : '',
                  !selected && !todayMark && !disabled ? 'text-gray-300' : ''
                )}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h3 className="font-medium text-brand-white mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand-gold" />
            Available times for {format(selectedDate, 'd MMMM')}
          </h3>

          {loading && (
            <div className="flex items-center gap-2 text-gray-400 py-4">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Loading available slots...</span>
            </div>
          )}

          {!loading && slots.length === 0 && (
            <div className="p-4 bg-brand-gray/20 rounded-xl border border-brand-gray/50 text-center">
              <p className="text-gray-400 text-sm">No available slots on this day</p>
              <p className="text-gray-500 text-xs mt-1">Please choose another date</p>
            </div>
          )}

          {!loading && slots.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => { setSelectedTime(slot); setError(''); }}
                  className={cn(
                    'py-2.5 rounded-lg text-sm font-medium border transition-all',
                    selectedTime === slot
                      ? 'bg-brand-gold text-brand-black border-brand-gold'
                      : 'border-brand-gray/50 text-gray-300 hover:border-brand-gold/50 hover:text-brand-white'
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex items-center gap-3">
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={handleNext} disabled={!selectedDate || !selectedTime}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
