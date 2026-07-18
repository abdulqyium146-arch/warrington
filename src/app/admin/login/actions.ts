'use server';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';

export async function loginAction(
  email: string,
  password: string,
  redirectTo: string,
): Promise<{ error: string } | void> {
  try {
    await signIn('credentials', { email, password, redirectTo });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: 'Invalid email or password. Please try again.' };
    }
    // Re-throw NEXT_REDIRECT so Next.js can navigate the browser
    throw error;
  }
}
