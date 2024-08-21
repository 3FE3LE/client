import { apiRequest } from '@sss/infrastructure/api';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await apiRequest(`${apiUrl}/login`, 'POST', data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

// Función para registrar un nuevo usuario
export const registerUser = async (data: {
  email: string;
  password: string;
  name: string;
}) => {
  try {
    const response = await apiRequest(`${apiUrl}/register`, 'POST', data);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error: ' + error.message);
    }
  }
};
