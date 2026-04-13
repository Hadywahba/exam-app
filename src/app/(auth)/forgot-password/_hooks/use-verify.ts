import { useToast } from '@/hooks/use-toast';
import { ResetPasswordFormFields } from '@/lib/schemas/forgot-password';
import { verifiyPassword } from '@/lib/services/verifiy-password.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const UseVeifiy = () => {
  // Navigation
  const router = useRouter();

  // Toast
  const { toast } = useToast();

  //   Mutation
  const {
    mutate: verifiy,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: ResetPasswordFormFields) => {
      const payload = await verifiyPassword(data);
      if (payload.status === false) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast({
        title: '✅ Success! You can now reset your password.',
        variant: 'success',
      });
      router.push(`/login`);
    },
  });

  return {
    verifiy,
    isPending,
    error,
  };
};
