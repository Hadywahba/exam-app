import { LoginFormFields } from '@/lib/schemas/login.schema';
import { useMutation } from '@tanstack/react-query';
import { getSession, signIn } from 'next-auth/react';
export const UseLogin = () => {
  // Mutation
  const {
    mutate: loginForm,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: LoginFormFields) => {
      const payload = await signIn('credentials', {
        username: data.username,
        password: data.password,
        redirect: false,
      });
      const session = await getSession();
      if (payload?.ok) {
        if (session?.user.role === 'ADMIN' || 'SUPER_ADMIN') {
          return (location.href = '/dashboard');
        }
        if (session?.user.role === 'USER') {
          const callbackUrl =
            new URLSearchParams(location.search).get('callbackUrl') || '/';

          return (location.href = callbackUrl);
        }
      }
      if (payload?.error) {
        throw new Error('Invalid username or password');
      }

      return payload;
    },
  });
  return {
    loginForm,
    error,
    isPending,
  };
};
