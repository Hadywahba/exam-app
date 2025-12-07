import { ExamContentResponse } from '../types/exam-content';
import { getToken } from '../utility/manage-token';

export const GetAllExamContent = async () => {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  console.log(token);
  const response = await fetch(`${process.env.API}/exams`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
      token: token!,
    },
  });
  const result: ApiResponse<ExamContentResponse> = await response.json();
  console.log(result);
  return result;
};
