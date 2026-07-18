import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { format } from 'date-fns';

export const metadata: Metadata = { title: 'Settings' };
export const dynamic = 'force-dynamic';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default async function SettingsPage() {
  const [workingHours, holidays] = await Promise.all([
    prisma.workingHours.findMany({ orderBy: { dayOfWeek: 'asc' } }),
    prisma.holiday.findMany({ orderBy: { date: 'asc' } }),
  ]);

  return (
    <>
      <Topbar title="Settings" />
      <div className="p-6 space-y-6 max-w-3xl">
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Business Settings</h2>
          <p className="text-gray-400 text-sm">Configure your working hours and availability</p>
        </div>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
          <h3 className="font-heading font-semibold text-brand-white mb-4">Working Hours</h3>
          <div className="space-y-2">
            {DAYS.map((day, i) => {
              const wh = workingHours.find((w) => w.dayOfWeek === i);
              return (
                <div key={day} className="flex items-center justify-between py-2 border-b border-brand-gray/30 last:border-b-0">
                  <span className="text-sm font-medium text-brand-white w-28">{day}</span>
                  {wh?.isOpen ? (
                    <span className="text-sm text-gray-300">{wh.openTime} – {wh.closeTime}</span>
                  ) : (
                    <span className="text-sm text-gray-500">Closed</span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 mt-4">Working hours can be updated via database seed or future admin UI.</p>
        </div>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
          <h3 className="font-heading font-semibold text-brand-white mb-4">Holidays & Closures</h3>
          {holidays.length === 0 && <p className="text-gray-500 text-sm">No holidays configured</p>}
          <div className="space-y-2">
            {holidays.map((h) => (
              <div key={h.id} className="flex items-center justify-between py-2 border-b border-brand-gray/30 last:border-b-0">
                <span className="text-sm font-medium text-brand-white">{h.name}</span>
                <span className="text-sm text-gray-400">{format(new Date(h.date), 'd MMM yyyy')}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
          <h3 className="font-heading font-semibold text-brand-white mb-4">Business Information</h3>
          <div className="space-y-3 text-sm">
            {[
              { label: 'Business Name', value: 'WCD Detailing' },
              { label: 'Email', value: 'info@warringtoncardetailing.co.uk' },
              { label: 'Phone', value: '07XXX XXXXXX' },
              { label: 'Address', value: 'Warrington, WA1' },
              { label: 'VAT Rate', value: '20%' },
              { label: 'Deposit Rate', value: '25%' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-brand-gray/30 last:border-b-0">
                <span className="text-gray-400">{item.label}</span>
                <span className="text-brand-white">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">Update business details in <code className="text-brand-gold">.env.local</code> and <code className="text-brand-gold">src/lib/constants.ts</code>.</p>
        </div>
      </div>
    </>
  );
}
