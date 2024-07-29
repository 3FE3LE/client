import { createHttpClient } from 'edgedb';
import NextAuth, { DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

import { EdgeDBAdapter } from '@auth/edgedb-adapter';
import { loginUser } from '@sss/app/features/auth/repository';

import type { Adapter } from 'next-auth/adapters';

const client = createHttpClient({
  secretKey: process.env.EDGEDB_SECRET_KEY,
  instanceName: process.env.EDGEDB_INSTANCE,
  tlsSecurity: process.env.NODE_ENV !== 'production' ? 'insecure' : 'strict',
});

const adapter: Adapter = EdgeDBAdapter(client);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: adapter,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await loginUser(
          credentials.email as string,
          credentials.password as string,
        );
        if (user) {
          return { ...user };
        } else {
          return null;
        }
      },
    }),
    Google({
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/error',
    verifyRequest: '/verify',
    newUser: '/register',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Añada aquí cualquier información adicional que quiera en el token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        // Añada aquí cualquier información adicional que quiera en la sesión
      }
      return session;
    },
  },
});