import { useToast } from '@/hooks/use-toast';
import { ForgotPasswordFormFields } from '@/lib/schemas/forgot-password';
import { forgotPassword } from '@/lib/services/forgot-password.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const UseForgot = ({ redirect = true }) => {
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

      if (payload.status === false) {
        throw new Error(payload.errors[0].message);
      }

      return payload;
    },

    onSuccess: (_payload, variables) => {
      toast({
        title: '✅  token to your email in URL',
        variant: 'success',
      });

      // only redirect when allowed
      if (redirect) {
        router.push(`/forgot-password?step=2&email=${variables?.email}`);
      }
    },
  });
  return {
    forgot,
    error,
    isPending,
  };
};
