import z from 'zod';
import { registerschema } from './register.schema';
// accountschema schema
export const accountschema = registerschema.pick({
  email: true,
  firstName: true,
  lastName: true,
  phone: true,
  username: true,
});

// accountschema Form Fields
export type AccountFormFields = z.infer<typeof accountschema>;
