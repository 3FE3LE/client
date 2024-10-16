import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET!);

export const createAuthCookie = (token: string) => {
  cookies().set('auth_token', token, {
    httpOnly: false,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    expires: expires,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    domain: process.env.NODE_ENV === 'production' ? '.17suit.com' : 'localhost',
  });
};

export const signToken = (payload: any) => {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' }) // Asegúrate de usar el algoritmo correcto
    .setIssuedAt()
    .setExpirationTime('30d') // Puedes ajustar el tiempo de expiración
    .sign(secretKey);
};
