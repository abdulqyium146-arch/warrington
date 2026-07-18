import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = { title: 'Staff' };
export const dynamic = 'force-dynamic';

const ROLE_LABELS: Record<string, string> = {
  SUPER_ADMIN: 'Super Admin',
  ADMIN: 'Admin',
  MANAGER: 'Manager',
  RECEPTIONIST: 'Receptionist',
  DETAILER: 'Detailer',
};

const ROLE_VARIANTS: Record<string, 'default' | 'info' | 'success' | 'secondary' | 'purple'> = {
  SUPER_ADMIN: 'default',
  ADMIN: 'info',
  MANAGER: 'success',
  RECEPTIONIST: 'secondary',
  DETAILER: 'purple',
};

export default async function StaffPage() {
  const staff = await prisma.user.findMany({
    orderBy: [{ role: 'asc' }, { name: 'asc' }],
    include: {
      _count: { select: { assignedBookings: true } },
    },
  });

  return (
    <>
      <Topbar title="Staff" />
      <div className="p-6 space-y-5">
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Staff Members</h2>
          <p className="text-gray-400 text-sm">{staff.length} team member{staff.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {staff.map((member) => {
            const initials = (member.name ?? member.email ?? '?').split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
            return (
              <div key={member.id} className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5 flex items-start gap-4">
                <Avatar className="h-12 w-12 shrink-0">
                  {member.image && <AvatarImage src={member.image} alt={member.name ?? ''} />}
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-heading font-semibold text-brand-white truncate">{member.name ?? 'Unknown'}</p>
                    <Badge variant={ROLE_VARIANTS[member.role] ?? 'secondary'}>{ROLE_LABELS[member.role] ?? member.role}</Badge>
                  </div>
                  <p className="text-sm text-gray-400 truncate mt-0.5">{member.email}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span>{member._count.assignedBookings} assigned booking{member._count.assignedBookings !== 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>Joined {formatDate(member.createdAt)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
