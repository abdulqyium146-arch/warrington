import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';
import type { Role } from '@prisma/client';
import { authConfig } from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
          select: { id: true, name: true, email: true, passwordHash: true, role: true, image: true, isActive: true },
        });

        if (!user || !user.isActive || !user.passwordHash) return null;

        const valid = await bcrypt.compare(credentials.password as string, user.passwordHash);
        if (!valid) return null;

        return { id: user.id, name: user.name, email: user.email, image: user.image, role: user.role };
      },
    }),
  ],

  events: {
    async signIn({ user }) {
      await prisma.activityLog.create({
        data: { userId: user.id, action: 'auth.signIn', entity: 'user', entityId: user.id },
      }).catch(() => {});
    },
  },
});

// ── Server-side auth helpers ──────────────────────────────────────────────────

export async function requireAuth() {
  const session = await auth();
  if (!session?.user) throw new Error('UNAUTHORIZED');
  return session;
}

export async function requireRole(...roles: Role[]) {
  const session = await requireAuth();
  if (!roles.includes(session.user.role)) throw new Error('FORBIDDEN');
  return session;
}

export function isAdmin(role: Role) {
  return role === 'SUPER_ADMIN' || role === 'ADMIN';
}

export function isManagerOrAbove(role: Role) {
  return ['SUPER_ADMIN', 'ADMIN', 'MANAGER'].includes(role);
}
