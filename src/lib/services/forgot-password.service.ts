import { ForgotResponse } from '@/app/(auth)/forgot-password/_types/forgot';
import { ForgotPasswordFormFields } from '../schemas/forgot-password';

export const forgotPassword = async (data: ForgotPasswordFormFields) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/auth/forgotPassword`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    },
  );
  const payload: ApiResponse<ForgotResponse> = await response.json();

  return payload;
};
