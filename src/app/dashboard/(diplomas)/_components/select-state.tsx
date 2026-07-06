'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { statesTypes } from '@/lib/constants/state-types';
import { Controller, Control } from 'react-hook-form';

type SearchFormFields = {
  search: string;
  immutable: boolean | null;
};

type SelectStateProps = {
  control: Control<SearchFormFields>;
};

export default function SelectState({ control }: SelectStateProps) {
  return (
    <Controller
      name="immutable"
      control={control}
      render={({ field }) => (
        <Select
          value={
            field.value === null
              ? 'null'
              : field.value === true
                ? 'true'
                : field.value === false
                  ? 'false'
                  : 'null'
          }
          onValueChange={(value) => {
            if (value === 'true') {
              field.onChange(true);
            } else if (value === 'false') {
              field.onChange(false);
            } else {
              field.onChange(null);
            }
          }}
        >
          <SelectTrigger className="w-full max-w-80">
            <SelectValue placeholder="Immutability" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {statesTypes.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
