import { useToast } from '@/hooks/use-toast';
import { VerifyFormFields } from '@/lib/schemas/forgot-password';
import { verifiyPassword } from '@/lib/services/verifiy-password.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

export const UseVeifiy = () => {
  // Navigation
  const router = useRouter();

  // Toast
  const { toast } = useToast();

  // Variable
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  //   Mutation
  const {
    mutate: verifiy,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: VerifyFormFields) => {
      const payload = await verifiyPassword(data);
      if ('code' in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast({
        title: '✅ Success! You can now reset your password.',
        variant: 'success',
      });
      router.push(`/forgot-password?step=3&email=${email!}`);
    },
  });

  return {
    verifiy,
    isPending,
    error,
  };
};
