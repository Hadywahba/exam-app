import z from 'zod';

// Validation Schema
export const loginschema = z.object({
  username: z
    .string()
    .min(3, 'length must be at least 3 characters')
    .nonempty(' your name is required')
    .regex(
      /^[A-Za-z]+(?:\s[A-Za-z]+){0,2}$/,
      'Only letters and single spaces allowed',
    ),
  password: z.string().nonempty(' your password is required'),
});

export type LoginFormFields = z.infer<typeof loginschema>;
