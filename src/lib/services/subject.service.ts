import { DiplomaResponse } from '../types/subject-response';
import { getToken } from '../utility/manage-token';

export const GetAllAubjects = async (limit:number) => {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  console.log(token);
  const response = await fetch(`${process.env.API}/diplomas?limit=${limit}`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
      token: token!,
    },
  });
  const result: ApiResponse<DiplomaResponse> = await response.json();

  return result;
};
