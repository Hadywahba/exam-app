import ValidationError from '@/components/error/validation-error';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

interface DescriptionFieldProps<T extends FieldValues>
  extends React.ComponentProps<typeof Textarea> {
  register?: UseFormRegister<T>;
  name?: Path<T>;
  errors?: FieldErrors<T>;
  label: string;
  disabled: boolean;
  value?: string;
}

export default function DescriptionField<T extends FieldValues>({
  name,
  register,
  errors,
  label,
  disabled,
  value,
  ...rest
}: DescriptionFieldProps<T>) {
  const isRHF = register && name;

  return (
    <div className="flex w-full flex-col">
      <div className="grid w-full items-center gap-3">
        {/* Label */}
        <Label className="font-medium text-gray-800">{label}</Label>

        {/* Input */}
        <Textarea
          {...rest}
          disabled={disabled}
          value={isRHF ? undefined : value}
          rows={6}
          {...(isRHF ? register(name as Path<T>) : {})}
        />
      </div>

      {/* Error */}
      {errors && name && (
        <div>
          <ValidationError errors={errors} name={name} />
        </div>
      )}
    </div>
  );
}
