import z from 'zod';
import { loginschema } from './login.schema';

export const forgotschema = loginschema.pick({ email: true });

export type ForgotPasswordFormFields = z.infer<typeof forgotschema>;
