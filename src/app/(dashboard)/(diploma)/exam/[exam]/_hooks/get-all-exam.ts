import { getExams } from '@/lib/services/allexam.service';
import { ExamContentResponse } from '@/lib/types/exam-content';

// Controller
export const GetAllExams = async (): Promise<{
  data?: ExamContentResponse;
  error?: string;
}> => {
  const payload = await getExams();

  return { data: payload };
};
