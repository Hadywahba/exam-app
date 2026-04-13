import z from 'zod';

import { passwordSchema } from './password.schema';

export const changepasswordschema = z
  .object({
    currentPassword: passwordSchema,
    newPassword: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type ChangePasswordFormFields = z.infer<typeof changepasswordschema>;
