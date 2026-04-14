import { cookies } from 'next/headers';
import { ExamContentResponse } from '../types/exam-content';

export const getExams = async (): Promise<ExamContentResponse> => {
  const cookieStore = cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ');

  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/exam`, {
    cache: 'no-store',
    headers: {
      Cookie: cookieHeader,
    },
  });

  const result = await response.json();
  return result?.payload ?? result;
};
