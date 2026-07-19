'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

// Read at module scope so Next.js/Turbopack captures it at bundle time, not request time.
// NODE_ENV is always available; WCD_JWT_SECRET and AUTH_SECRET must be set in Vercel env.
const _jwtSecret =
  process.env.WCD_JWT_SECRET ??
  process.env.AUTH_SECRET ??
  process.env.NEXTAUTH_SECRET ??
  '';

function secretKey() {
  return new TextEncoder().encode(_jwtSecret);
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
    if (!_jwtSecret) {
      return { error: 'Server config error: JWT secret is missing (len=0). Contact support.' };
    }

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
    return { error: `Error at ${stage} (secret len:${_jwtSecret.length}): ${msg}` };
  }

  redirect(redirectTo || '/admin');
}
