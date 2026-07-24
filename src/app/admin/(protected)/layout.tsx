import { getAdminSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { Sidebar } from '@/components/admin/sidebar';

export const metadata = {
  title: { template: '%s | WCD Admin', default: 'Bookings | WCD Admin' },
  robots: 'noindex, nofollow',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login/');

  return (
    <div className="flex h-screen bg-brand-black overflow-hidden">
      <Sidebar userName={session.user.name ?? undefined} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
