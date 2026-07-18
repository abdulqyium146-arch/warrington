import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Topbar } from '@/components/admin/topbar';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { Clock, PoundSterling } from 'lucide-react';

export const metadata: Metadata = { title: 'Services' };
export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    include: { addons: true, _count: { select: { bookingServices: true } } },
    orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
  });

  const categories = [...new Set(services.map((s) => s.category))];

  return (
    <>
      <Topbar title="Services" />
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-heading font-bold text-brand-white">Services & Pricing</h2>
          <p className="text-gray-400 text-sm">{services.length} service{services.length !== 1 ? 's' : ''} configured</p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="space-y-3">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{cat}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {services.filter((s) => s.category === cat).map((service) => (
                <div key={service.id} className="bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-heading font-semibold text-brand-white">{service.name}</h4>
                      {service.description && <p className="text-gray-400 text-xs mt-1 line-clamp-2">{service.description}</p>}
                    </div>
                    <Badge variant={service.isActive ? 'success' : 'secondary'} className="shrink-0 ml-2">
                      {service.isActive ? 'Active' : 'Hidden'}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-brand-gold font-semibold">
                      <PoundSterling className="h-4 w-4" />
                      {formatCurrency(service.basePrice)}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Clock className="h-4 w-4" />
                      {service.durationMinutes} min
                    </div>
                    <div className="text-gray-500 text-xs ml-auto">
                      {service._count.bookingServices} booking{service._count.bookingServices !== 1 ? 's' : ''}
                    </div>
                  </div>

                  {service.addons.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-brand-gray/50">
                      <p className="text-xs text-gray-500 mb-1.5">Add-ons:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.addons.map((a) => (
                          <span key={a.id} className="text-xs px-2 py-0.5 bg-brand-gray/40 text-gray-300 rounded">
                            {a.name} (+{formatCurrency(a.price)})
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
