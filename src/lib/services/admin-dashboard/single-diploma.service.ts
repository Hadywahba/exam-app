import { getToken } from '@/lib/utility/manage-token';

export const GetDiplomaId = async (diplomaId: string) => {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;

  const response = await fetch(`${process.env.API}/diplomas/${diplomaId}`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result: ApiResponse<DiplomaResponse> = await response.json();
  return result;
};
