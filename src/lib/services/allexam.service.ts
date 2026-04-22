import { ExamsResponse } from '../types/exam-content';

export const getExams = async (): Promise<ExamsResponse> => {
  const response = await fetch(`http://localhost:3000/api/exam`, {
    cache: 'no-store',
  });

  const result = await response.json();

  if (!response.ok || !result.status) {
    throw new Error(result.message || 'Failed to fetch exams');
  }
  console.log(result);
  return result;
};
