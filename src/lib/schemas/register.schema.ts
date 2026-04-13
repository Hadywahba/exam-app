import z from 'zod';
import { passwordSchema } from './password.schema';

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
      .regex(
        /^[A-Za-z]+(?:\s[A-Za-z]+){0,2}$/,
        'Only letters and single spaces allowed',
      ),
    email: z.string().nonempty(' your email is required'),
    phone: z
      .string()
      .nonempty(' your phone is required')
      .regex(
        /^(\+2010|\+0|\+2011|\+2012|\+2015|010|011|012|015)\d{8}$/,
        'Invalid Egyptian phone number',
      ),

    password: passwordSchema,

    confirmPassword: z.string().nonempty(' your Confirm Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormFields = z.infer<typeof registerschema>;

export const registerverifyschema = z.object({
  code: z.string(),
});

// Verify Password Form Fields
export type RegisterVerifyFormFields = z.infer<typeof registerverifyschema>;

export const registeremailschema = z.object({
  email: z.string(),
});

// Verify Password Form Fields
export type RegisterEmailFormFields = z.infer<typeof registeremailschema>;
