'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Play, XCircle, AlertCircle, Loader2 } from 'lucide-react';

type BookingStatus = 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';

interface Action {
  label: string;
  status: BookingStatus;
  icon: React.ElementType;
  variant: 'default' | 'outline' | 'destructive';
}

const TRANSITIONS: Record<string, Action[]> = {
  PENDING: [
    { label: 'Confirm Booking', status: 'CONFIRMED', icon: CheckCircle2, variant: 'default' },
    { label: 'Cancel', status: 'CANCELLED', icon: XCircle, variant: 'destructive' },
  ],
  CONFIRMED: [
    { label: 'Start Job', status: 'IN_PROGRESS', icon: Play, variant: 'default' },
    { label: 'No Show', status: 'NO_SHOW', icon: AlertCircle, variant: 'outline' },
    { label: 'Cancel', status: 'CANCELLED', icon: XCircle, variant: 'destructive' },
  ],
  IN_PROGRESS: [
    { label: 'Mark Complete', status: 'COMPLETED', icon: CheckCircle2, variant: 'default' },
    { label: 'Cancel', status: 'CANCELLED', icon: XCircle, variant: 'destructive' },
  ],
};

interface BookingActionsProps {
  bookingId: string;
  currentStatus: BookingStatus;
}

export function BookingActions({ bookingId, currentStatus }: BookingActionsProps) {
  const router = useRouter();
  const [pending, setPending] = useState<BookingStatus | null>(null);
  const actions = TRANSITIONS[currentStatus] ?? [];

  if (actions.length === 0) return null;

  const handleAction = async (action: Action) => {
    setPending(action.status);
    try {
      const res = await fetch(`/api/bookings/${bookingId}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: action.status }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({}));
        throw new Error(error ?? 'Request failed');
      }
      toast.success(`Booking ${action.status.toLowerCase().replace('_', ' ')}`);
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to update booking');
    } finally {
      setPending(null);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {actions.map((action) => {
        const Icon = action.icon;
        const isLoading = pending === action.status;
        return (
          <Button
            key={action.status}
            variant={action.variant}
            size="sm"
            disabled={pending !== null}
            onClick={() => handleAction(action)}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
            ) : (
              <Icon className="h-4 w-4 mr-1.5" />
            )}
            {action.label}
          </Button>
        );
      })}
    </div>
  );
}
