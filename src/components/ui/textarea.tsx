import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      'flex min-h-[100px] w-full rounded-lg border border-brand-gray bg-brand-gray px-3 py-2 text-sm text-brand-white placeholder:text-gray-500',
      'focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20',
      'disabled:cursor-not-allowed disabled:opacity-50 resize-y',
      'transition-all duration-200',
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };
