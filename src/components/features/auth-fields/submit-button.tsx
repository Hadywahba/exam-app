import SubmitError from '@/components/error/submit-error';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
interface SubmitButtonProps<T extends FieldValues> {
  label: string;
  errors: FieldErrors<T>;
  isError: boolean;
  isregister?:boolean;
}

export default function SubmitButton<T extends FieldValues>({
  label,
  errors,
  isError,
  isregister,
}: SubmitButtonProps<T>) {
  return (
    <div>
      <div className="mt-2">
        <SubmitError error={errors} isError={isError} />
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-9 pt-6'>
        <Button variant="default" className="w-full">
          {label}
        </Button>
        {isregister && <p className="text-sm font-medium text-gray-500">
          Already have an account?
          <Link
            href={'/login'}
            className="pl-2 text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
        </p>}
        
      </div>
    
    </div>
  );
}
