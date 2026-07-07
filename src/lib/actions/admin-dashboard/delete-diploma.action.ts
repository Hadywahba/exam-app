'use server';

import { getToken } from '@/lib/utility/manage-token';

export const DeleteDiploma = async () => {
  const tokenObj = await getToken();

  const token = tokenObj?.accessToken;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/account`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result: ApiDeleteResponse = await response.json();

  return result;
};
