'use client';

import ValidationError from '@/components/error/validation-error';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useRef } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

interface NameFieldProps<T extends FieldValues>
  extends React.HTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<T>;
  name?: Path<T>;
  errors?: FieldErrors<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
}

export default function SearchField<T extends FieldValues>({
  name,
  register,
  errors,
  placeholder,
  disabled,
  value,
  ...rest
}: NameFieldProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const registerProps =
    register && name ? register(name as Path<T>) : undefined;

  return (
    <div className="flex w-full flex-col">
      <div className="relative grid w-full items-center gap-3">
        <Input
          {...rest}
          type="search"
          placeholder={placeholder}
          disabled={disabled}
          value={registerProps ? undefined : value}
          {...registerProps}
         
        />

        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          className="absolute right-8 cursor-pointer"
        >
          <Search size={16} className="text-gray-200" />
        </button>
      </div>

      {errors && name && <ValidationError errors={errors} name={name} />}
    </div>
  );
}
