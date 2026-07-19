import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required.' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true, passwordHash: true, role: true, image: true, isActive: true },
    });

    if (!user || !user.isActive || !user.passwordHash) {
      return NextResponse.json({ error: 'Invalid email or password. Please try again.' }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid email or password. Please try again.' }, { status: 401 });
    }

    const secret = process.env.WCD_JWT_SECRET ?? process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET ?? '';
    if (!secret) {
      console.error('[/api/login] JWT secret missing — check WCD_JWT_SECRET env var');
      return NextResponse.json({ error: `Server config error: JWT secret missing (check Vercel env vars)` }, { status: 500 });
    }

    const secretKey = new TextEncoder().encode(secret);
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
      .sign(secretKey);

    const isProd = process.env.NODE_ENV === 'production';
    const cookieName = isProd ? '__Secure-authjs.session-token' : 'authjs.session-token';

    const res = NextResponse.json({ ok: true });
    res.cookies.set(cookieName, token, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  } catch (err) {
    console.error('[/api/login]', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
