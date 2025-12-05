import {
  ResetPasswordPayload,
  ResetResponse,
} from '@/app/(auth)/forgot-password/_types/reset';

export const resetPassword = async (data: ResetPasswordPayload) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/auth/resetPassword`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    },
  );
  const payload: ApiResponse<ResetResponse> = await response.json();

  return payload;
};
