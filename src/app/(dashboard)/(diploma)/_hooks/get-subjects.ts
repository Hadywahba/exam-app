import { GetAllAubjects } from '@/lib/services/subject.service';
import { SubjectResponse } from '@/lib/types/subject-response';

// Controller
export const GetSubjects = async (): Promise<{
  data?: SubjectResponse;
  error?: string;
}> => {
  const payload = await GetAllAubjects();

  if ('code' in payload) {
     return { error: payload.message };
  }

  return { data: payload }
};
