import z from 'zod';
import { loginschema } from './login.schema';

// Forget Password schema
export const forgotschema = loginschema.pick({ email: true });

// Forgot Password Form Fields
export type ForgotPasswordFormFields = z.infer<typeof forgotschema>;

// Verifiy Password schema
export const otpschema = z.object({
  resetCode: z.string(),
});

// Verify Password Form Fields
export type VerifyFormFields = z.infer<typeof otpschema>;

// Reset Password schema
export const resetschema = z
  .object({
    newPassword: z
      .string()
      .nonempty(' your Password is required')
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

    rePassword: z.string().nonempty(' your Confirm Password is required'),
  })

  .refine((data) => data.newPassword === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  });

// Reset Password Form Fields
export type ResetPasswordFormFields = z.infer<typeof resetschema>;
