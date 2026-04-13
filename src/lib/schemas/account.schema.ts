import z from 'zod';
import { registerschema } from './register.schema';
// accountschema schema
export const accountschema = registerschema.pick({
  firstName: true,
  lastName: true,
  phone: true,
});

// accountschema Form Fields
export type AccountFormFields = z.infer<typeof accountschema>;
