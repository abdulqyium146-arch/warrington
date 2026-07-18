import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'flex h-10 w-full rounded-lg border border-brand-gray bg-brand-gray px-3 py-2 text-sm text-brand-white placeholder:text-gray-500',
      'focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-all duration-200',
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = 'Input';

export { Input };
