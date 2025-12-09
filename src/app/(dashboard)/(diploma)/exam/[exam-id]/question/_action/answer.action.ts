'use server';

import { getToken } from '@/lib/utility/manage-token';
import { QuestionsAnswerResponse, SendAnsewer } from '../_types/answer';

// Register is a service function that calls the backend
export async function QuestionsAnswers(data: SendAnsewer) {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  console.log(token);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/questions/check`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        token: token!,
      },
    },
  );

  const result: ApiResponse<QuestionsAnswerResponse> = await response.json();

  return result;
}
