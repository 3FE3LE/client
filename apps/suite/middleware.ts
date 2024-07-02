import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      console.log(token);
      return token !== null;
    },
  },
});

export const config = { matcher: ['/dashboard', '/profile'] };
