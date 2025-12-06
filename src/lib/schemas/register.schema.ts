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

    password: z
      .string()
      .nonempty(' your password is required')
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

    rePassword: z.string().nonempty(' your Confirm Password is required'),
  })
  .refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  });

export type RegisterFormFields = z.infer<typeof registerschema>;
