import z from 'zod';

export const loginschema = z.object({
  email: z.string().nonempty(' your email is required'),

  password: z.string().nonempty(' your password is required'),
});

export type LoginFormFields = z.infer<typeof loginschema>;
