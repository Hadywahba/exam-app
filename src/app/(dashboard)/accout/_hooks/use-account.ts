import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { AccountFormFields } from '@/lib/schemas/account.shcema';
import { EditAccount } from '../_actions/account.action';

export const UseAccount = () => {
  const queryClient = useQueryClient();
  // Toast
  const { toast } = useToast();

  // Mutation
  const {
    mutate: account,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: AccountFormFields) => {
      const payload = await EditAccount(data);

      if ('code' in payload) {
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
