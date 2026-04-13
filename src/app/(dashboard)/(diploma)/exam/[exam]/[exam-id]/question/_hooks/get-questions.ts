import { GetAllQuestions } from '@/lib/services/question.service';
import { ExamQuestionsApiResponse } from '@/lib/types/question.response';

// Controller
export const GetQuestions = async (
  id: string,
): Promise<{
  data?: ExamQuestionsApiResponse;
  error?: string;
}> => {
  const payload = await GetAllQuestions(id);

  if (payload.status === false) {
    return { error: payload.message };
  }

  return { data: payload.payload };
};
