import z from 'zod';
import { registerschema } from './register.schema';

export const changepasswordschema = registerschema
  .pick({ password: true, rePassword: true })
  .extend({
    oldPassword: z
      .string()
      .nonempty(' your  Password is required')
      .superRefine((value, ctx) => {
        if (value.length < 8) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must be at least 8 characters',
          });
        }
        if (!/[A-Z]/.test(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must contain at least one uppercase letter',
          });
        }
        if (!/[a-z]/.test(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must contain one lowercase letter',
          });
        }
        if (!/[0-9]/.test(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must contain one number',
          });
        }
        if (!/[@$!%*?&]/.test(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password must contain one special character',
          });
        }
      }),
  })

  .refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  });

export type ChangePasswordFormFields = z.infer<typeof changepasswordschema>;
