import { resetPassword } from '@/lib/services/reset-password.service';
import { useMutation } from '@tanstack/react-query';
import { ResetPasswordPayload } from '../_types/reset';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export const UseResetPassword = () => {
  // Navigation
  const router = useRouter();

  // Toast
  const { toast } = useToast();
  
  // Mutation
  const {
    mutate: reset,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: ResetPasswordPayload) => {
      const payload = await resetPassword(data);
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
      router.push(`/login`);
    },
  });
  return {
    reset,
    error,
    isPending,
  };
};
