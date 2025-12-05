"use server"
import { RegisterFormFields } from '@/lib/schemas/register.schema';
import { RegisterResponse } from '../_types/register';

// Register is a service function that calls the backend
export async function Register(data: RegisterFormFields) {
  const response = await fetch(`${process.env.API}/auth/signup`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        password: data.password,
        rePassword: data.rePassword,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  
  const result:ApiResponse<RegisterResponse> = await response.json();

  return result;
}
