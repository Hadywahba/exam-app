import z from 'zod';

// Validation Schema
export const addschema = z.object({
  title: z
    .string()
    .min(2, 'length must be at least 2 characters')
    .nonempty(' your title is required'),
  description: z.string().nonempty(' your description is required'),
  image: z.string().nullable().optional(),
});

export type AddFormFields = z.infer<typeof addschema>;
