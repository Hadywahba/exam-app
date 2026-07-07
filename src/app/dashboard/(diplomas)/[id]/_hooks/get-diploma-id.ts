import { GetDiplomaId } from '@/lib/services/admin-dashboard/single-diploma.service';

export const GetDiploma = async (
  id: string,
): Promise<{
  DiplomaData?: DiplomaResponse;
  error?: string;
}> => {
  const payload = await GetDiplomaId(id);

  if (payload.status === false) {
    return { error: payload.message };
  }

  return { DiplomaData: payload.payload };
};
