'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import { encode } from '@auth/core/jwt';

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

    // Build a JWE session token using the same encoder Auth.js v5 middleware uses
    // so that auth() in proxy.ts can verify it without any extra config.
    const isProd = process.env.NODE_ENV === 'production';
    const cookieName = isProd
      ? '__Secure-authjs.session-token'
      : 'authjs.session-token';

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

    const jar = await cookies();
    jar.set(cookieName, jweToken, {
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
