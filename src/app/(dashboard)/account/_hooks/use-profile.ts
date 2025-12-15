import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/lib/services/profile.service';
import { ProfileResponse } from '@/app/(dashboard)/account/_types/profile';

export const UseProfile = () => {
  // Query
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<ProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const payload = await getProfile();
      if ('code' in payload) {
        throw new Error(payload.message); 
      }
      return payload;
    },
  });

  return {
    profile,
    isLoading,
    error,
  };
};
