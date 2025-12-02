import { useToast } from '@/hooks/use-toast';
import { ForgotPasswordFormFields } from '@/lib/schemas/forgot-password';
import { forgotPassword } from '@/lib/services/forgot-password.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const UseForgot = () => {
    
  // Navigation
  const router = useRouter();

  // Toast
  const { toast } = useToast();

  // Mutation
  const {
    mutate: forgot,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: ForgotPasswordFormFields) => {
      const payload = await forgotPassword(data);

      if ('code' in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },

    onSuccess: () => {
      toast({
        title: '✅ OTP sent to your email',
        variant: 'success',
      });

      router.push('/forgot-password?step=2');
    },
  });
  return {
    forgot,
    error,
    isPending,
  };
};
