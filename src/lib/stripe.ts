import Stripe from 'stripe';

let _stripe: Stripe | null = null;
export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set');
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-06-24.dahlia',
      typescript: true,
    });
  }
  return _stripe;
}

export const DEPOSIT_PERCENT = Number(process.env.STRIPE_DEPOSIT_PERCENT ?? 25) / 100;

export function calculateDeposit(total: number): number {
  return Math.round(total * DEPOSIT_PERCENT * 100) / 100;
}

export function toPence(pounds: number): number {
  return Math.round(pounds * 100);
}
