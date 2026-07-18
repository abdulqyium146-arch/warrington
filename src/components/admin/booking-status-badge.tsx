import { Badge } from '@/components/ui/badge';
import { BookingStatus } from '@prisma/client';

const config: Record<BookingStatus, { label: string; variant: 'default' | 'success' | 'warning' | 'destructive' | 'info' | 'purple' | 'secondary' | 'outline' }> = {
  PENDING: { label: 'Pending', variant: 'warning' },
  CONFIRMED: { label: 'Confirmed', variant: 'info' },
  IN_PROGRESS: { label: 'In Progress', variant: 'purple' },
  COMPLETED: { label: 'Completed', variant: 'success' },
  CANCELLED: { label: 'Cancelled', variant: 'destructive' },
  NO_SHOW: { label: 'No Show', variant: 'secondary' },
};

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  const { label, variant } = config[status] ?? { label: status, variant: 'secondary' };
  return <Badge variant={variant}>{label}</Badge>;
}
