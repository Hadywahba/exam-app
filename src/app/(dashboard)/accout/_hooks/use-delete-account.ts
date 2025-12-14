import { useMutation } from '@tanstack/react-query';
import { DeleteAccount } from '../change-password/_actions/delete-account.action';
import { useToast } from '@/hooks/use-toast';

export const UseDeleteAccount = () => {
  // Toast
  const { toast } = useToast();
  
  // Mutation
  const {
    mutate: deleteMe,
    error: deleteError,
    isPending: deleteIsPending,
  } = useMutation({
    mutationFn: async () => {
      const payload = await DeleteAccount();

      if ('code' in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast({
        title: '✅ Account Deleted Successful',
        variant: 'success',
      });

      
    },
  });
  return {
    deleteMe,
    deleteError,
    deleteIsPending,
  };
};
