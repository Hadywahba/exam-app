
import { GetAllExamContent } from '@/lib/services/exam-content.service';
import { ExamContentResponse } from '@/lib/types/exam-content';

// Controller
export const GetExamContent = async (): Promise<{
  data?: ExamContentResponse;
  error?: string;
}> => {
  const payload = await GetAllExamContent();

  if ('code' in payload) {
     return { error: payload.message };
  }

  return { data: payload }
};
