import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { BookingWizard } from '@/components/booking/booking-wizard';

export const metadata: Metadata = {
  title: 'Book a Service | WCD Detailing',
  description: 'Book your professional car detailing service in Warrington. Quick, easy online booking with instant confirmation.',
};

export const dynamic = 'force-dynamic';

export default async function BookPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const services = await prisma.service.findMany({
    where: { isActive: true },
    include: { addons: { where: { isActive: true } } },
    orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
  });

  const { service: serviceSlug } = await searchParams;
  const defaultServiceId = serviceSlug
    ? services.find((s) => s.slug === serviceSlug)?.id
    : undefined;

  return (
    <div className="min-h-screen bg-brand-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <BookingWizard
          services={services.map((s) => ({
            id: s.id,
            name: s.name,
            description: s.description,
            basePrice: Number(s.basePrice),
            durationMinutes: s.durationMinutes,
            category: s.category,
            addons: s.addons.map((a) => ({
              id: a.id,
              name: a.name,
              description: a.description,
              price: Number(a.price),
            })),
          }))}
          defaultServiceId={defaultServiceId}
        />
      </div>
    </div>
  );
}
