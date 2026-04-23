import { ExamsResponse } from '../types/exam-content';
import { getToken } from '../utility/manage-token';

export const getExams = async () => {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;

  const response = await fetch(`${process.env.API}/exams?page=1&limit=60`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result: ApiResponse<ExamsResponse> = await response.json();
  return result;
};
