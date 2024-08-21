import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { cookies } from 'next/headers';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import { loginUser } from './core/auth/repository';

const prisma = new PrismaClient();

const production = process.env.NODE_ENV === 'production';

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
            // Configurar la cookie en el lado del servidor
            cookies().set('auth_token', token, {
              httpOnly: false,
              sameSite: 'lax',
              path: '/',
              secure: process.env.NODE_ENV === 'production',
              maxAge: 3600 * 1000 * 24 * 30,
              domain:
                process.env.NODE_ENV === 'production'
                  ? '.17suit.com'
                  : 'localhost',
            });
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
      name: `${production ? '__Secure-' : ''}authjs.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: production,
        domain: production ? '.17suit.com' : 'localhost',
      },
    },
  },
});
