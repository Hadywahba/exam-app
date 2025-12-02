import { VerifyFormFields } from '../schemas/forgot-password';

export const verifiyPassword = async (data: VerifyFormFields) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/auth/verifyResetCode`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    },
  );
  const payload: ApiVerifiyResponse = await response.json();

  return payload;
};
