import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { EditAccount } from '../_actions/account.action';
import { EditProfile } from '../_types/account';

export const UseAccount = () => {
  // Constant related to React-Query
  const queryClient = useQueryClient();

  // Toast
  const { toast } = useToast();

  // Mutation
  const {
    mutate: account,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: EditProfile) => {
      const payload = await EditAccount(data);

      if (payload.status === false) {
        throw new Error(payload.message);
      }

      return payload;
    },

    onSuccess: () => {
      toast({
        title: '✅ Account Edited Successful',
        variant: 'success',
      });
      queryClient.invalidateQueries({
        queryKey: ['userProfile'],
      });
    },
  });
  return {
    account,
    error,
    isPending,
  };
};
