import z from 'zod';
import { registerschema } from './register.schema';

export const changepasswordschema = registerschema
  .pick({ password: true, rePassword: true })
  .extend({
    oldPassword: z
      .string()
      .nonempty(' your  Password is required')
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .refine((password) => /[A-Z]/.test(password), {
        message: 'Password must contain at least one uppercase letter.',
      })
      .refine((password) => /[a-z]/.test(password), {
        message: 'Password must contain at least one lowercase letter.',
      })
      .refine((password) => /[0-9]/.test(password), {
        message: 'Password must contain at least one number.',
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: 'Password must contain at least one special character.',
      }),
  })

  .refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  });

export type ChangePasswordFormFields = z.infer<typeof changepasswordschema>;
