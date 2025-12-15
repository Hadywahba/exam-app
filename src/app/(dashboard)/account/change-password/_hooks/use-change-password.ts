import { ChangePasswordFormFields } from '@/lib/schemas/change-password.schema';
import { useMutation } from '@tanstack/react-query';
import { ChangePassword } from '../_actions/change-password.action';
import { useToast } from '@/hooks/use-toast';

export const UseChange = () => {
  // Toast
  const { toast } = useToast();

  // Mutation
  const {
    mutate:changePassword,
    error,
    isPending,
    
  } = useMutation({
    mutationFn: async (data: ChangePasswordFormFields) => {
      const payload = await ChangePassword(data);

      if ('code' in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast({
        title: '✅Your password has been successfully updated',
        variant: 'success',
      });
    },
  });
  return {
    changePassword,
    error,
    isPending,
  };
};
