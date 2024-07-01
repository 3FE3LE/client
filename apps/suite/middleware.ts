import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: async ({ req, token }) => {
      const authToken = req.cookies.get('__Secure-next-auth.session-token');
      return authToken !== null;
    },
  },
});

export const config = { matcher: ['/dashboard', '/profile'] };
