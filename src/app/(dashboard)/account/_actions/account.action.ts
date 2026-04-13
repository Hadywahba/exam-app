'use server';
import { EditProfile, EditProfileResponse } from '../_types/account';
import { getToken } from '@/lib/utility/manage-token';

// EditAccount is a service function that calls the backend
export async function EditAccount(data: EditProfile) {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  const response = await fetch(`${process.env.API}/users/profile`, {
    method: 'PATCH',
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      profilePhoto: data.profilePhoto,
    }),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result: ApiResponse<EditProfileResponse> = await response.json();

  return result;
}
