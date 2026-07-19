import type { NextAuthConfig } from 'next-auth';
import { SignJWT, jwtVerify } from 'jose';

function secretKey() {
  return new TextEncoder().encode(process.env.WCD_JWT_SECRET ?? process.env.AUTH_SECRET ?? '');
}

// Edge-safe auth config — no database or Node.js-only imports.
export const authConfig = {
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  session: { strategy: 'jwt' as const },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  jwt: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async encode({ token }: { token?: any }) {
      return new SignJWT(token ?? {})
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(secretKey());
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async decode({ token }: { token?: string }): Promise<any> {
      if (!token) return null;
      try {
        const { payload } = await jwtVerify(token, secretKey());
        return payload;
      } catch {
        return null;
      }
    },
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session({ session, token }: { session: any; token: any }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
