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

      if (payload.status===false) {
        throw new Error(payload.errors[0].message);
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
    onError:(payload)=>{
console.log(payload.stack)
    }
  });
  return {
    registerForm,
    error,
    isPending,
  };
};
