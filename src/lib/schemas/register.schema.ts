import z from 'zod';

export const registerschema = z
  .object({
    firstName: z
      .string()
      .nonempty(' your firstName is required')
      .regex(/^[a-zA-Z]+$/, 'Only letters allowed'),
    lastName: z
      .string()
      .nonempty(' your lastName is required')
      .regex(/^[a-zA-Z]+$/, 'Only letters allowed'),
    username: z
      .string()
      .min(3, 'length must be at least 3 characters')
      .nonempty(' your name is required')
      .regex(/^[a-zA-Z]+$/, 'Only letters allowed'),
    email: z.string().nonempty(' your email is required'),
    phone: z.string().nonempty(' your phone is required'),
    password: z.string().nonempty(' your password is required'),
    rePassword: z.string().nonempty(' your Confirm Password is required'),
  })
  .refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  });

export type RegisterFormFields = z.infer<typeof registerschema>;
