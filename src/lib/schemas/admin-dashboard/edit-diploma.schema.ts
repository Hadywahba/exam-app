import z from 'zod';

// Validation Schema
export const editschema = z.object({
  title: z
    .string()
    .min(2, 'length must be at least 2 characters')
    .nonempty(' your title is required'),
  description: z.string().nonempty(' your description is required'),
});

export type EditFormFields = z.infer<typeof editschema>;
