'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

function secretKey() {
  return new TextEncoder().encode(process.env.AUTH_SECRET ?? '');
}

export async function loginAction(
  email: string,
  password: string,
  redirectTo: string,
): Promise<{ error: string } | void> {
  let stage = 'db';
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true, passwordHash: true, role: true, image: true, isActive: true },
    });

    if (!user || !user.isActive || !user.passwordHash) {
      return { error: 'Invalid email or password. Please try again.' };
    }

    stage = 'bcrypt';
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return { error: 'Invalid email or password. Please try again.' };
    }

    stage = 'jwt';
    const token = await new SignJWT({
      sub: user.id,
      id: user.id,
      name: user.name,
      email: user.email,
      picture: user.image ?? null,
      role: user.role,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(secretKey());

    stage = 'cookie';
    const isProd = process.env.NODE_ENV === 'production';
    const cookieName = isProd ? '__Secure-authjs.session-token' : 'authjs.session-token';

    const jar = await cookies();
    jar.set(cookieName, token, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[loginAction] stage=' + stage, err);
    return { error: `Error at ${stage}: ${msg}` };
  }

  redirect(redirectTo || '/admin');
}
