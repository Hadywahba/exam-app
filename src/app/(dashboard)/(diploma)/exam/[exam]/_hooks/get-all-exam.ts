import { getExams } from '@/lib/services/allexam.service';

export const GetAllExams = async () => {
  try {
    const data = await getExams();

    if (data.status === false) {
      return {
        error: data?.message || 'Something went wrong',
        data: [],
      };
    }

    return {
      error: null,
      data: data.payload?.data ?? [],
    };
  } catch {
    return {
      error: 'Failed to fetch Exam',
      data: [],
    };
  }
};