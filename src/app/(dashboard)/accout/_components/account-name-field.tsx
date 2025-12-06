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
interface AccountNameFieldPrpos<T extends FieldValues>
  extends React.HTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder: string;
}

export default function AccountNameField<T extends FieldValues>({
  name,
  register,
  errors,
  label,
  placeholder,
}: AccountNameFieldPrpos<T>) {
  return (
    <div className="flex w-full flex-col">
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="picture" className="font-medium text-gray-800">
          {label}
        </Label>
        <Input {...register(name)} type="text" placeholder={placeholder} />
      </div>
      <div className="">
        <ValidationError errors={errors} name={name} />
      </div>
    </div>
  );
}
