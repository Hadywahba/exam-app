import { SubjectResponse } from '../types/subject-response';
import { getToken } from '../utility/manage-token';

export const GetAllAubjects = async () => {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  console.log(token);
  const response = await fetch(`${process.env.API}/subjects`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
      token: token!,
    },
  });
  const result: ApiResponse<SubjectResponse> = await response.json();

  return result;
};
