'use server';
import { getToken } from '@/lib/utility/manage-token';

// DeleteAccount is a service function that calls the backend
export async function DeleteAccount() {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  const response = await fetch(`${process.env.API}/users/account`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result: ApiDeleteResponse = await response.json();

  return result;
}
