import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-brand-gold/30 bg-brand-gold/20 text-brand-gold',
        secondary: 'border-brand-gray bg-brand-gray text-gray-300',
        destructive: 'border-red-500/30 bg-red-500/20 text-red-400',
        outline: 'border-brand-gold text-brand-gold bg-transparent',
        success: 'border-green-500/30 bg-green-500/20 text-green-400',
        warning: 'border-amber-500/30 bg-amber-500/20 text-amber-400',
        info: 'border-blue-500/30 bg-blue-500/20 text-blue-400',
        purple: 'border-purple-500/30 bg-purple-500/20 text-purple-400',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
