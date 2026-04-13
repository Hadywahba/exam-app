import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { RegisterEmailFormFields } from '@/lib/schemas/register.schema';
import { registerVerifiyEmail } from '../_actions/register-verify-email.action';

export const UseRegisterVeifiyEmail = () => {
  // Toast
  const { toast } = useToast();

  //   Mutation
  const {
    mutate: verifiy,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: RegisterEmailFormFields) => {
      const payload = await registerVerifiyEmail(data);
      if (payload.status === false) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: 'success',
      });
    },
  });

  return {
    verifiy,
    isPending,
    error,
  };
};
