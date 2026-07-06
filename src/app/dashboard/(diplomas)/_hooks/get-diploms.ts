import { GetAllDiplomas } from '@/lib/services/admin-dashboard/diplomas.service';
import { DiplomaResponse } from '@/lib/types/subject-response';

const LIMIT = 10;

// Controller
export const GetDiplomas = async ({
  search,
  immutable,
  sortBy,
  sortOrder,
  page = 1,
}: GetDiplomasParams = {}): Promise<{
  data?: DiplomaResponse;
  error?: string;
}> => {
  const payload = await GetAllDiplomas({
    limit: LIMIT,
    page,
    search,
    immutable,
    sortBy,
    sortOrder,
  });

  if (!payload.status) {
    return { error: payload.message };
  }

  return { data: payload.payload };
};
