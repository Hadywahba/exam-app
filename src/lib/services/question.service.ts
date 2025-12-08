import { ExamQuestionsResponse } from '../types/question.response';
import { getToken } from '../utility/manage-token';

export const GetAllQuestions = async (id: string) => {
//   console.log('Fetching questions for exam ID:', id);
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  const response = await fetch(`${process.env.API}/questions?exam=${id}`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      token: token!,
    },
  });
  const result: ApiResponse<ExamQuestionsResponse> = await response.json();

  return result;
};
