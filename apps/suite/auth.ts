import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { isProduction } from '@repo/ui/constants';

import { loginUser } from './core/auth/repository';
import { createAuthCookie, signToken } from './utils';

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const user = await loginUser({
            email: credentials.email as string,
            password: credentials.password as string,
          });
          if (user) {
            const { token } = user;
            createAuthCookie(token);
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log({ error });
          if (error instanceof Error) {
            const { type, cause } = error as AuthError;
            switch (type) {
              case 'CredentialsSignin':
                return 'Invalid credentials.';
              case 'CallbackRouteError':
                return cause?.err?.toString();
              default:
                return 'Something went wrong.';
            }
          }
          throw error;
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
    newUser: '/register',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const token = await signToken(user);
        createAuthCookie(token);
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `${isProduction ? '__Secure-' : ''}authjs.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: isProduction,
        domain: isProduction ? '.17suit.com' : 'localhost',
      },
    },
  },
});
