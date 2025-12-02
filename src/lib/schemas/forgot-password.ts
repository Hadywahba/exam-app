import z from 'zod';
import { loginschema } from './login.schema';

export const forgotschema = loginschema.pick({ email: true });

export type ForgotPasswordFormFields = z.infer<typeof forgotschema>;

export const otpschema = z.object({
  resetCode: z
    .string()
    .nonempty(' your OTP is required')
    // .regex(/^\d{6}$/, 'OTP must be exactly 6 digits'),
});

export type VerifyFormFields = z.infer<typeof otpschema>;
