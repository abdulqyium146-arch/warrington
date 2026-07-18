'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';

const schema = z.object({
  notes: z.string().max(1000).optional(),
});

export type NotesFormValues = z.infer<typeof schema>;

interface StepNotesProps {
  defaultValue?: NotesFormValues;
  onNext: (data: NotesFormValues) => void;
  onBack: () => void;
}

const SUGGESTIONS = [
  'Interior is heavily soiled with pet hair',
  'Paint has light swirl marks from previous washes',
  'Please pay attention to the door jambs',
  'Engine bay also needs attention',
  'Recently waxed, just needs a polish',
];

export function StepNotes({ defaultValue, onNext, onBack }: StepNotesProps) {
  const { register, handleSubmit, setValue, watch } = useForm<NotesFormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValue,
  });

  const notes = watch('notes') ?? '';

  const appendSuggestion = (s: string) => {
    setValue('notes', notes ? `${notes}\n${s}` : s);
  };

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-brand-gold/10 rounded-xl text-brand-gold">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Additional Notes</h2>
          <p className="text-gray-400 text-sm">Tell us anything specific about your vehicle or requirements</p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes <span className="text-gray-500 font-normal">(optional)</span></Label>
        <Textarea
          id="notes"
          placeholder="e.g. interior has pet hair, paint has light scratches, please focus on the rear bumper..."
          className="min-h-[120px]"
          {...register('notes')}
        />
        <p className="text-xs text-gray-500 text-right">{notes.length}/1000 characters</p>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Quick suggestions</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => appendSuggestion(s)}
              className="text-xs px-3 py-1.5 bg-brand-gray/30 border border-brand-gray/50 rounded-full text-gray-300 hover:text-brand-white hover:border-brand-gray transition-colors"
            >
              + {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button type="submit">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" onClick={() => onNext({ notes: '' })} className="text-gray-400">
          Skip
        </Button>
      </div>
    </form>
  );
}
