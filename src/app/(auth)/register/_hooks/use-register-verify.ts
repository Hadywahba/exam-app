import { useToast } from '@/hooks/use-toast';
import { RegisterVerifyFormFields } from '@/lib/schemas/register.schema';
import { useMutation } from '@tanstack/react-query';
import { registerVerifiyCode } from '../_actions/register-verify.action';

export const UseRegisterVeifiy = () => {
  // Toast
  const { toast } = useToast();

  //   Mutation
  const {
    mutate: verifiy,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: RegisterVerifyFormFields) => {
      const payload = await registerVerifiyCode(data);
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
