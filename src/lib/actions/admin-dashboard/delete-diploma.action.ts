'use server';

import { getToken } from '@/lib/utility/manage-token';
import { revalidatePath } from 'next/cache';
export const DeleteDiploma = async (id: string) => {
  const tokenObj = await getToken();

  const token = tokenObj?.accesstoken;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/diplomas/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result: ApiDeleteResponse = await response.json();
  revalidatePath(`/dashboard`);
  return result;
};
