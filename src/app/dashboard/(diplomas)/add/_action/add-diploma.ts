'use server';

import { EditFormFields } from '@/lib/schemas/admin-dashboard/edit-diploma.schema';
import { getToken } from '@/lib/utility/manage-token';

export const AddDiploma = async (data: EditFormFields) => {
  // Constant
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/diplomas`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result: ApiResponse<EditDiplomaResponse> = await response.json();

  return result;
};
