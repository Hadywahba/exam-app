'use server';
import { getToken } from '@/lib/utility/manage-token';
import { ChangePasswordFormFields } from '@/lib/schemas/change-password.schema';

// ChangePassword is a service function that calls the backend
export async function ChangePassword(data: ChangePasswordFormFields) {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  const response = await fetch(`${process.env.API}/users/change-password`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result: ApiChangePasswordResponse = await response.json();

  return result;
}
