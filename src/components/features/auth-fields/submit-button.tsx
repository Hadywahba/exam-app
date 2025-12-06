import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SubmitError from '@/components/error/submit-error';

interface SubmitButtonProps {
  label: React.ReactNode;
  message: Error | null;
  loading: boolean;
  disbale: boolean;
  isPending: boolean;
  text?: string;
  textLink?: string;
  link?: string;
  isAuth: boolean;
  isprofile:boolean;
  label2?:string;
}
export default function SubmitButton({
  label,
  message,
  loading,
  disbale,
  isPending,
  text,
  textLink,
  link,
  isAuth,
  isprofile,
  label2,
}: SubmitButtonProps) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <SubmitError errors={message} />
      <div className="flex w-full flex-col items-center justify-center gap-9">
        {isprofile ? (<div className='flex justify-center items-center gap-4 w-full'>
            <Button
          variant="rose"
          className="w-full"
          disabled={isPending || (!disbale && loading)}
        >
          {isPending ? 'Loading...' : label2}
        </Button>
          <Button
          variant="default"
          className="w-full"
          disabled={isPending || (!disbale && loading)}
        >
          {isPending ? 'Loading...' : label}
        </Button>
        </div>):(  <Button
          variant="default"
          className="w-full"
          disabled={isPending || (!disbale && loading)}
        >
          {isPending ? 'Loading...' : label}
        </Button>)}
      
        {isAuth && (
          <p className="text-sm font-medium text-gray-500">
            {text}
            <Link
              href={String(link)}
              className="pl-2 text-blue-600 hover:text-blue-700"
            >
              {textLink}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
