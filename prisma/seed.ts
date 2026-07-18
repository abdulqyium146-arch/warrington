import { PrismaClient, Role, BookingStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import { addDays, subDays } from 'date-fns';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding WCD database...');

  const passwordHash = await bcrypt.hash('WCDdetailing2025!', 12);

  // Users
  const detailer = await prisma.user.upsert({
    where: { email: 'admin@warringtoncardetailing.co.uk' },
    update: {},
    create: { name: 'WCD Admin', email: 'admin@warringtoncardetailing.co.uk', passwordHash, role: Role.SUPER_ADMIN, phone: '+44 7375 759686' },
  });
  await prisma.user.upsert({
    where: { email: 'manager@warringtoncardetailing.co.uk' },
    update: {},
    create: { name: 'Sarah Thompson', email: 'manager@warringtoncardetailing.co.uk', passwordHash, role: Role.MANAGER },
  });
  await prisma.user.upsert({
    where: { email: 'detailer@warringtoncardetailing.co.uk' },
    update: {},
    create: { name: 'Jake Mitchell', email: 'detailer@warringtoncardetailing.co.uk', passwordHash, role: Role.DETAILER },
  });
  console.log('✅ Users');

  // Services
  const carDetailing = await prisma.service.upsert({
    where: { slug: 'car-detailing' },
    update: {},
    create: {
      name: 'Car Detailing', slug: 'car-detailing', category: 'Detailing',
      description: 'Complete interior & exterior detailing to restore your vehicle to showroom condition.',
      basePrice: 80, durationMinutes: 180, sortOrder: 1,
      addons: { create: [
        { name: 'Engine Bay Clean', description: 'Steam cleaned and degreased', price: 40, sortOrder: 1 },
        { name: 'Odour Elimination', description: 'Professional ozone treatment', price: 30, sortOrder: 2 },
        { name: 'Pet Hair Removal', description: 'Deep extraction of embedded pet hair', price: 25, sortOrder: 3 },
      ]},
    },
  });

  const ceramicCoating = await prisma.service.upsert({
    where: { slug: 'ceramic-coating' },
    update: {},
    create: {
      name: 'Ceramic Coating', slug: 'ceramic-coating', category: 'Paint Protection',
      description: 'Industry-leading ceramic coating for long-lasting paint protection and gloss.',
      basePrice: 250, durationMinutes: 480, sortOrder: 2,
      addons: { create: [
        { name: 'Wheel Ceramic', description: 'Ceramic coating on all 4 wheels', price: 120, sortOrder: 1 },
        { name: 'Glass Coating', description: 'Hydrophobic glass treatment', price: 80, sortOrder: 2 },
      ]},
    },
  });

  const paintCorrection = await prisma.service.upsert({
    where: { slug: 'paint-correction' },
    update: {},
    create: {
      name: 'Machine Polishing', slug: 'paint-correction', category: 'Paint Protection',
      description: 'Professional machine polishing removes swirl marks, scratches and oxidation.',
      basePrice: 150, durationMinutes: 300, sortOrder: 3,
      addons: { create: [
        { name: 'Two Stage Correction', description: '80–90% defect removal', price: 130, sortOrder: 1 },
        { name: 'Full Paint Correction', description: '95%+ defect removal', price: 300, sortOrder: 2 },
      ]},
    },
  });

  const interiorDetailing = await prisma.service.upsert({
    where: { slug: 'interior-detailing' },
    update: {},
    create: {
      name: 'Interior Detailing', slug: 'interior-detailing', category: 'Detailing',
      description: 'Deep clean and restore your vehicle interior including leather conditioning.',
      basePrice: 80, durationMinutes: 180, sortOrder: 4,
      addons: { create: [
        { name: 'Leather Conditioning', description: 'Clean and condition all leather', price: 40, sortOrder: 1 },
        { name: 'Carpet Steam Clean', description: 'Deep steam extraction of all carpets', price: 35, sortOrder: 2 },
      ]},
    },
  });

  const headlightRestoration = await prisma.service.upsert({
    where: { slug: 'headlight-restoration' },
    update: {},
    create: {
      name: 'Headlight Restoration', slug: 'headlight-restoration', category: 'Detailing',
      description: 'Restore clarity to yellowed, foggy headlights.',
      basePrice: 50, durationMinutes: 90, sortOrder: 5,
    },
  });
  console.log('✅ Services');

  // Working Hours
  const hours = [
    { dayOfWeek: 0, isOpen: false, openTime: '09:00', closeTime: '17:00' },
    { dayOfWeek: 1, isOpen: true,  openTime: '09:00', closeTime: '18:00' },
    { dayOfWeek: 2, isOpen: true,  openTime: '09:00', closeTime: '18:00' },
    { dayOfWeek: 3, isOpen: true,  openTime: '09:00', closeTime: '18:00' },
    { dayOfWeek: 4, isOpen: true,  openTime: '09:00', closeTime: '18:00' },
    { dayOfWeek: 5, isOpen: true,  openTime: '09:00', closeTime: '18:00' },
    { dayOfWeek: 6, isOpen: true,  openTime: '09:00', closeTime: '16:00' },
  ];
  for (const wh of hours) {
    await prisma.workingHours.upsert({ where: { dayOfWeek: wh.dayOfWeek }, update: wh, create: wh });
  }
  console.log('✅ Working hours');

  // Bank Holidays
  const bankHolidays = [
    { name: "New Year's Day 2026", date: new Date('2026-01-01') },
    { name: 'Good Friday 2026', date: new Date('2026-04-03') },
    { name: 'Easter Monday 2026', date: new Date('2026-04-06') },
    { name: 'Early May Bank Holiday 2026', date: new Date('2026-05-04') },
    { name: 'Spring Bank Holiday 2026', date: new Date('2026-05-25') },
    { name: 'Summer Bank Holiday 2026', date: new Date('2026-08-31') },
    { name: 'Christmas Day', date: new Date('2026-12-25'), isRecurring: true },
    { name: 'Boxing Day', date: new Date('2026-12-28'), isRecurring: true },
  ];
  for (const h of bankHolidays) {
    const exists = await prisma.holiday.findFirst({ where: { date: h.date } });
    if (!exists) await prisma.holiday.create({ data: h });
  }
  console.log('✅ Bank holidays');

  // Settings
  const settings = [
    { key: 'booking.depositPercent', value: '25', label: 'Deposit %', group: 'booking' },
    { key: 'business.vatRate', value: '20', label: 'VAT rate', group: 'business' },
    { key: 'business.name', value: 'WCD Detailing', label: 'Business name', group: 'business' },
    { key: 'business.email', value: 'info@warringtoncardetailing.co.uk', label: 'Email', group: 'business' },
    { key: 'business.phone', value: '07375 759686', label: 'Phone', group: 'business' },
  ];
  for (const s of settings) {
    await prisma.setting.upsert({ where: { key: s.key }, update: {}, create: s });
  }
  console.log('✅ Settings');

  // Demo data
  const customer1 = await prisma.customer.upsert({
    where: { email: 'james.robertson@example.com' },
    update: {},
    create: { firstName: 'James', lastName: 'Robertson', email: 'james.robertson@example.com', phone: '07700 900001', marketingConsent: true, source: 'google' },
  });

  const vehicle1 = await prisma.vehicle.upsert({
    where: { id: 'demo-vehicle-1' },
    update: {},
    create: { id: 'demo-vehicle-1', customerId: customer1.id, make: 'BMW', model: '3 Series', year: 2021, color: 'Alpine White', registration: 'AB21 XYZ' },
  });

  const b1Date = subDays(new Date(), 14);
  b1Date.setHours(10, 0, 0, 0);
  if (!await prisma.booking.findUnique({ where: { bookingRef: 'WCD-2026-0001' } })) {
    const b1 = await prisma.booking.create({
      data: {
        bookingRef: 'WCD-2026-0001', customerId: customer1.id, vehicleId: vehicle1.id,
        assignedToId: detailer.id, status: BookingStatus.COMPLETED,
        scheduledDate: b1Date, durationMinutes: 300, completedAt: b1Date,
        subtotal: 120, totalAmount: 120, depositAmount: 30, depositPaid: true, amountPaid: 120,
        source: 'website', notes: 'Focus on the rear bumper scuffs.',
        services: { create: [{ serviceId: carDetailing.id, name: 'Car Detailing', priceAtBooking: 80, quantity: 1 }] },
        addons: { create: [{ addonId: (await prisma.serviceAddon.findFirst({ where: { serviceId: carDetailing.id, name: 'Engine Bay Clean' } }))!.id, name: 'Engine Bay Clean', priceAtBooking: 40 }] },
        statusHistory: {
          create: [
            { status: BookingStatus.PENDING, note: 'Booking created', createdAt: subDays(new Date(), 16) },
            { status: BookingStatus.CONFIRMED, note: 'Confirmed by admin', createdAt: subDays(new Date(), 15) },
            { status: BookingStatus.COMPLETED, note: 'Job completed', createdAt: b1Date },
          ],
        },
      },
    });
    await prisma.invoice.create({
      data: {
        invoiceNumber: 'INV-2026-0001', bookingId: b1.id, customerId: customer1.id,
        status: 'PAID', subtotal: 100, vatAmount: 20, totalAmount: 120,
        dueDate: addDays(b1Date, 14), paidAt: addDays(b1Date, 1),
      },
    });
  }

  const customer2 = await prisma.customer.upsert({
    where: { email: 'sarah.mitchell@example.com' },
    update: {},
    create: { firstName: 'Sarah', lastName: 'Mitchell', email: 'sarah.mitchell@example.com', phone: '07700 900002', marketingConsent: true, source: 'instagram' },
  });
  const vehicle2 = await prisma.vehicle.upsert({
    where: { id: 'demo-vehicle-2' },
    update: {},
    create: { id: 'demo-vehicle-2', customerId: customer2.id, make: 'Volkswagen', model: 'Golf GTI', year: 2022, color: 'Tornado Red', registration: 'VW22 GTI' },
  });
  const b2Date = addDays(new Date(), 3);
  b2Date.setHours(9, 0, 0, 0);
  if (!await prisma.booking.findUnique({ where: { bookingRef: 'WCD-2026-0002' } })) {
    await prisma.booking.create({
      data: {
        bookingRef: 'WCD-2026-0002', customerId: customer2.id, vehicleId: vehicle2.id,
        assignedToId: detailer.id, status: BookingStatus.CONFIRMED,
        scheduledDate: b2Date, durationMinutes: 480,
        subtotal: 250, totalAmount: 300, depositAmount: 75, depositPaid: true, amountPaid: 75,
        source: 'website',
        services: { create: [{ serviceId: ceramicCoating.id, name: 'Ceramic Coating', priceAtBooking: 250, quantity: 1 }] },
        addons: { create: [{ addonId: (await prisma.serviceAddon.findFirst({ where: { serviceId: ceramicCoating.id, name: 'Wheel Ceramic' } }))!.id, name: 'Wheel Ceramic', priceAtBooking: 120 }] },
        statusHistory: {
          create: [
            { status: BookingStatus.PENDING, note: 'Booking created online', createdAt: subDays(new Date(), 2) },
            { status: BookingStatus.CONFIRMED, note: 'Deposit received', createdAt: subDays(new Date(), 1) },
          ],
        },
      },
    });
  }

  const customer3 = await prisma.customer.upsert({
    where: { email: 'david.khan@example.com' },
    update: {},
    create: { firstName: 'David', lastName: 'Khan', email: 'david.khan@example.com', phone: '07700 900003', source: 'google' },
  });
  const vehicle3 = await prisma.vehicle.upsert({
    where: { id: 'demo-vehicle-3' },
    update: {},
    create: { id: 'demo-vehicle-3', customerId: customer3.id, make: 'Mercedes-Benz', model: 'C-Class', year: 2020, color: 'Obsidian Black', registration: 'ME20 CLS' },
  });
  const b3Date = addDays(new Date(), 7);
  b3Date.setHours(14, 0, 0, 0);
  if (!await prisma.booking.findUnique({ where: { bookingRef: 'WCD-2026-0003' } })) {
    await prisma.booking.create({
      data: {
        bookingRef: 'WCD-2026-0003', customerId: customer3.id, vehicleId: vehicle3.id,
        status: BookingStatus.PENDING, scheduledDate: b3Date, durationMinutes: 90,
        subtotal: 50, totalAmount: 50, depositAmount: 12.50, depositPaid: false, amountPaid: 0,
        source: 'website', notes: 'Both headlights yellowing for about 2 years.',
        services: { create: [{ serviceId: headlightRestoration.id, name: 'Headlight Restoration', priceAtBooking: 50, quantity: 1 }] },
        statusHistory: { create: [{ status: BookingStatus.PENDING, note: 'Booking submitted online' }] },
      },
    });
  }

  console.log('✅ Demo data');
  console.log('\n🎉 Seed complete!');
  console.log('Admin: admin@warringtoncardetailing.co.uk / WCDdetailing2025!');
}

main()
  .catch((e) => { console.error('❌ Seed failed:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
