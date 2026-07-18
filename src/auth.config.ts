import type { NextAuthConfig } from 'next-auth';

// Edge-safe auth config — no database or Node.js-only imports.
// Used by middleware; src/auth.ts extends this with the full provider + adapter.
export const authConfig = {
  session: { strategy: 'jwt' as const },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
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
