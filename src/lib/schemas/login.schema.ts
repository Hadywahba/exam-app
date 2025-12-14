import z from 'zod';

export const loginschema = z.object({
  email: z.string().nonempty(' your email is required').email('Invalid email'),

  password: z.string().nonempty(' your password is required'),
});

export type LoginFormFields = z.infer<typeof loginschema>;
