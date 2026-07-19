import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import type { Role } from '@prisma/client';

function secretKey() {
  const s =
    process.env.WCD_JWT_SECRET ??
    process.env.AUTH_SECRET ??
    process.env.NEXTAUTH_SECRET ??
    '';
  return new TextEncoder().encode(s);
}

export interface AdminSession {
  user: {
    id: string;
    name: string | null;
    email: string;
    role: Role;
    image: string | null;
  };
}

export async function getAdminSession(): Promise<AdminSession | null> {
  try {
    const jar = await cookies();
    const isProd = process.env.NODE_ENV === 'production';
    const cookieName = isProd ? '__Secure-authjs.session-token' : 'authjs.session-token';
    const token = jar.get(cookieName)?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, secretKey());
    if (!payload.sub && !payload.id) return null;

    return {
      user: {
        id: String(payload.id ?? payload.sub),
        name: payload.name ? String(payload.name) : null,
        email: String(payload.email ?? ''),
        role: (payload.role as Role) ?? 'RECEPTIONIST',
        image: payload.picture ? String(payload.picture) : null,
      },
    };
  } catch {
    return null;
  }
}
