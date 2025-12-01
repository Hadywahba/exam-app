import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SubmitError from '@/components/error/submit-error';

interface SubmitButtonProps {
  label: string;
  message: Error | null;
  loading: boolean;
  disbale: boolean;
  isPending:boolean;
}
export default function SubmitButton({
  label,
  message,
  loading,
  disbale,
  isPending,
}: SubmitButtonProps) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <SubmitError errors={message} />
      <div className="flex w-full flex-col items-center justify-center gap-9">
        <Button
          variant="default"
          className="w-full"
          disabled={ isPending || (!disbale && loading)}
        >
          {isPending ? 'Loading...' : label}
        </Button>
        <p className="text-sm font-medium text-gray-500">
          Already have an account?
          <Link
            href={'/login'}
            className="pl-2 text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
