import { GetAllQuestions } from '@/lib/services/question.service';
import { ExamQuestionsResponse } from '@/lib/types/question.response';


// Controller
export const GetQuestions = async (
  id: string,
): Promise<{
  data?: ExamQuestionsResponse;
  error?: string;
}> => {
  const payload = await GetAllQuestions(id);

  if ('code' in payload) {
    return { error: payload.message };
  }

  return { data: payload };
};
