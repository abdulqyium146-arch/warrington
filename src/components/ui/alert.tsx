import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      variant: {
        default: 'border-brand-gold/30 bg-brand-gold/10 text-brand-gold [&>svg]:text-brand-gold',
        destructive: 'border-red-500/30 bg-red-500/10 text-red-400 [&>svg]:text-red-400',
        warning: 'border-amber-500/30 bg-amber-500/10 text-amber-400 [&>svg]:text-amber-400',
        success: 'border-green-500/30 bg-green-500/10 text-green-400 [&>svg]:text-green-400',
        info: 'border-blue-500/30 bg-blue-500/10 text-blue-400 [&>svg]:text-blue-400',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(
  ({ className, variant, ...props }, ref) => <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h5 ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
);
const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('text-sm opacity-90 [&_p]:leading-relaxed', className)} {...props} />
);

export { Alert, AlertTitle, AlertDescription };
