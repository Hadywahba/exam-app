// hooks/useProfile.ts
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/lib/services/profile.service';
import { ProfileResponse } from '@/app/(dashboard)/account/_types/profile';

export const UseProfile = () => {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<ProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const payload = await getProfile();

      if (!payload || payload.error) {
        throw new Error(payload.error);
      }

      return payload.payload;
    },
  });

  return {
    profile,
    isLoading,
    error,
  };
};
