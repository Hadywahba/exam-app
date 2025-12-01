import { RegisterFormFields } from '@/lib/schemas/register.schema';
import { useMutation } from '@tanstack/react-query';
import { Register } from '../_actions/register.action';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export const UseRegister = () => {
  // Navigation
  const router = useRouter();

  // Toast
  const { toast } = useToast();

  // Mutation
  const {
    mutate: registerForm,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: RegisterFormFields) => {
      const payload = await Register(data);

      if ('code' in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },

    onSuccess: () => {
      toast({
        title: '✅ Registration Successful',
        variant: 'success',
      });

      router.push('/login');
    },
  });
  return {
    registerForm,
    error,
    isPending,
  };
};
