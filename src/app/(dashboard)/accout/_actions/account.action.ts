'use server';
import { EditProfileResponse } from '../_types/account';
import { getToken } from '@/lib/utility/manage-token';
import { AccountFormFields } from '@/lib/schemas/account.shcema';

// Register is a service function that calls the backend
export async function EditAccount(data: AccountFormFields) {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  console.log(tokenObj);
  const response = await fetch(`${process.env.API}/auth/editProfile`, {
    method: 'PUT',
    body: JSON.stringify({
      email: data.email,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
    }),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
      token: token!,
    },
  });

  const result: ApiResponse<EditProfileResponse> = await response.json();

  return result;
}
