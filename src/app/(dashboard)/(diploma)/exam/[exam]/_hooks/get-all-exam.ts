import { getExams } from '@/lib/services/allexam.service';
import { ExamsResponse } from '@/lib/types/exam-content';

export const GetAllExams = async (): Promise<{
  data?: ExamsResponse;
  error?: string;
}> => {
  try {
    const data = await getExams();

    return {
      data,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Failed to fetch exams',
    };
  }
};
