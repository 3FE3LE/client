import axios from 'axios';
import { cookies } from 'next/headers';

const API_URL = process.env.API_URL;

export const registerUser = async (
  name: string | undefined,
  email: string | undefined,
  password: string | undefined,
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    if (!error.response?.data) {
      throw new Error('Registration failed');
    }
    return error.response?.data;
  }
};

export const loginUser = async (
  email: string | undefined,
  password: string | undefined,
) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    const { token } = response.data;
    cookies().set('auth_token', token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production', // Solo en https
      maxAge: 3600 * 1000 * 24 * 30, // Expiración de 1 mes
      domain:
        process.env.NODE_ENV === 'production' ? '.17suit.com' : 'localhost',
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data);
  }
};
