import { getExams } from '@/lib/services/allexam.service';
import { ExamContentResponse } from '@/lib/types/exam-content';

export const GetAllExams = async (): Promise<{
  data?: ExamContentResponse;
  error?: string;
}> => {
  try {
    const payload = await getExams();
    return { data: payload };
  } catch (error) {
    return { error: 'Failed to fetch exams' };
  }
};
