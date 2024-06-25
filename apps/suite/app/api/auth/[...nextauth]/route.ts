import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { useLogin } from '../../../features/auth/useCases';
import { withAuth } from 'next-auth/middleware';

const { login } = useLogin();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await login({
          email: credentials?.email,
          password: credentials?.password,
        });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login', // Personaliza tu página de inicio de sesión
    error: '/login', // Personaliza tu página de error
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.token;
        token.name = user.email;
      }
      return token;
    },
    authorized({ req, token }: any) {
      if (token) return true; // If there is a token, the user is authenticated
    },
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true,
        domain:
          process.env.NODE_ENV === 'production' ? '.17suit.com' : 'localhost', // Configurar el dominio compartido
      },
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
