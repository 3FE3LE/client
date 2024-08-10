import axios from 'axios';

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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data);
  }
};
