import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
    </Field>
  );
}
