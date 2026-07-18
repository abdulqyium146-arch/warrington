'use client';
import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      theme="dark"
      richColors
      position="top-right"
      toastOptions={{
        classNames: {
          toast: 'bg-brand-darkgray border border-brand-gray text-brand-white font-sans',
          title: 'text-brand-white font-semibold',
          description: 'text-gray-400',
          success: 'border-green-500/40',
          error: 'border-red-500/40',
          warning: 'border-amber-500/40',
          info: 'border-blue-500/40',
        },
      }}
    />
  );
}

export { toast } from 'sonner';
