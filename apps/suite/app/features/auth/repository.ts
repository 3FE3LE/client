// suite/features/auth/repository.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/server/auth';

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
    console.log(name, email, password);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const loginUser = async (name: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      name,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};
