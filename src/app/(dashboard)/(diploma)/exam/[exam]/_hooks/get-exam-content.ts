
import { GetAllExamContent } from '@/lib/services/exam-content.service';
import { ExamContentResponse } from '@/lib/types/exam-content';

// Controller
export const GetExamContent = async (id:string): Promise<{
  examContentData?: ExamContentResponse;
  error?: string;
}> => {
  const payload = await GetAllExamContent(id);

  if (payload.status===false) {
     return { error: payload.message };
  }

  return { examContentData: payload.payload }
};
