import { ProfileResponse } from '@/app/(dashboard)/account/_types/profile';

export const getProfile = async () => {
  const response = await fetch('/api/profile', {
    cache: 'no-store',
  });
  const payload: ApiResponse<ProfileResponse> = await response.json();

  return payload;
};
