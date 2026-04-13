import { ForgotPasswordFormFields } from '../schemas/forgot-password';

export const forgotPassword = async (data: ForgotPasswordFormFields) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/auth/forgot-password`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    },
  );
  const payload: ApiForgotPassResponse = await response.json();

  return payload;
};
