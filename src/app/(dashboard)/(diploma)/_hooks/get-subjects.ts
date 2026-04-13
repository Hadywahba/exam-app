import { GetAllAubjects } from '@/lib/services/subject.service';
import { DiplomaResponse } from '@/lib/types/subject-response';

const LIMT = 20;
// Controller
export const GetSubjects = async (): Promise<{
  data?: DiplomaResponse;
  error?: string;
}> => {
  const payload = await GetAllAubjects(LIMT);

  if (payload.status === false) {
    return { error: payload.message };
  }

  return { data: payload.payload };
};
