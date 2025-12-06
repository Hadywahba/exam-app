'use server';
import { getToken } from '@/lib/utility/manage-token';
import { ChangePasswordFormFields } from '@/lib/schemas/change-password.schema';
import { ChangePasswordResponse } from '../_types/change-password';

// ChangePassword is a service function that calls the backend
export async function ChangePassword(data: ChangePasswordFormFields) {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  const response = await fetch(`${process.env.API}/auth/changePassword`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    //   Authorization: `Bearer ${token}`,
      token: token!,
    },
  });

  const result: ApiResponse<ChangePasswordResponse> = await response.json();

  return result;
}
