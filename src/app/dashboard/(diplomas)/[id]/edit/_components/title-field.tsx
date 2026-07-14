import ValidationError from '@/components/error/validation-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

interface TitleFieldProps<T extends FieldValues>
  extends React.HTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<T>;
  name?: Path<T>;
  errors?: FieldErrors<T>;
  label: string;
  disabled: boolean;
  value?: string;
  placeholder?: string;
}

export default function TitleField<T extends FieldValues>({
  name,
  register,
  errors,
  label,
  disabled,
  value,
  placeholder,
  ...rest
}: TitleFieldProps<T>) {
  const isRHF = register && name;

  return (
    <div className="flex w-full flex-col">
      <div className="grid w-full items-center gap-3">
        {/* Label */}
        <Label className="font-medium text-gray-800">{label}</Label>

        {/* Input */}
        <Input
          {...rest}
          type="text"
          disabled={disabled}
          value={isRHF ? undefined : value}
          {...(isRHF ? register(name as Path<T>) : {})}
          placeholder={placeholder}
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
