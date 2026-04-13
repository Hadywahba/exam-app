import z from 'zod';
import { passwordSchema } from './password.schema';
import { registerschema } from './register.schema';

// Forget Password schema
export const forgotschema = registerschema.pick({ email: true });

// Forgot Password Form Fields
export type ForgotPasswordFormFields = z.infer<typeof forgotschema>;



// Reset Password schema
export const resetschema = z
   .object({
    token: z.string(),
    newPassword: passwordSchema,
    confirmPassword: z.string().nonempty(' your Confirm Password is required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// Reset Password Form Fields
export type ResetPasswordFormFields = z.infer<typeof resetschema>;
