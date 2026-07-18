'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { encode } = require('@auth/core/jwt') as typeof import('@auth/core/jwt');

export async function loginAction(
  email: string,
  password: string,
  redirectTo: string,
): Promise<{ error: string } | void> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true, passwordHash: true, role: true, image: true, isActive: true },
    });

    if (!user || !user.isActive || !user.passwordHash) {
      return { error: 'Invalid email or password. Please try again.' };
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return { error: 'Invalid email or password. Please try again.' };
    }

    // Use Auth.js v5's own JWE encoder so the middleware can verify the cookie.
    const isProd = process.env.NODE_ENV === 'production';
    const cookieName = isProd ? '__Secure-authjs.session-token' : 'authjs.session-token';

    const jweToken = await encode({
      token: {
        sub: user.id,
        id: user.id,
        name: user.name,
        email: user.email,
        picture: user.image ?? null,
        role: user.role,
      },
      secret: process.env.AUTH_SECRET!,
      salt: cookieName,
      maxAge: 60 * 60 * 24 * 30,
    });

    const cookieStore = await cookies();
    cookieStore.set(cookieName, jweToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
  } catch (err) {
    console.error('[loginAction]', err);
    return { error: 'An unexpected error occurred. Please try again.' };
  }

  redirect(redirectTo || '/admin');
}
