'use server';
import { getToken } from '@/lib/utility/manage-token';

// DeleteAccount is a service function that calls the backend
export async function DeleteAccount() {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  const response = await fetch(`${process.env.API}/auth/deleteMe`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      token: token!,
    },
  });

  const result: ApiDeleteResponse = await response.json();

  return result;
}
