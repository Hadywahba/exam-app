'use server';

import { getToken } from '@/lib/utility/manage-token';
import { QuestionsAnswerResponse, SendAnswer } from '../_types/answer';

// Register is a service function that calls the backend
export async function QuestionsAnswers(data: SendAnswer) {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/submissions`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result:ApiResponse<QuestionsAnswerResponse> = await response.json();
  console.log('Full API Response:', JSON.stringify(result, null, 2));
  return result;
}
