'use Client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

import SubmitError from '@/components/error/submit-error';

import DeleteModal from './delete-modal';

interface SubmitButtonProps {
  label: React.ReactNode;
  message: Error | null;
  loading?: boolean;
  disbale?: boolean;
  isPending?: boolean;
  isprofile: boolean;
  label2?: string;
   setopenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AccountButton({
  label,
  message,
  loading,
  disbale,
  isPending,
  isprofile,
  label2,
  setopenModal,
}: SubmitButtonProps) {

 
  return (
    <>
      {/* Buttons */}
      <div className="flex flex-col gap-6 pt-4">
        <SubmitError errors={message} />
        <div className="flex w-full flex-col items-center justify-center gap-9">
          {isprofile ? (
            <div className="flex w-full flex-col gap-4 sm:flex sm:flex-row sm:items-center sm:justify-center">
              <Button
              type='button'
                onClick={() => {
                  setopenModal(true);
                }}
                variant="rose"
                className="w-full"
              >
                {label2}
              </Button>
              <Button
                variant="default"
                className="w-full"
                disabled={isPending || (!disbale && loading)}
              >
                {isPending ? 'Loading...' : label}
              </Button>
            </div>
          ) : (
            <Button
              variant="default"
              className="w-full"
              disabled={isPending || (!disbale && loading)}
            >
              {isPending ? 'Loading...' : label}
            </Button>
          )}
        </div>
      </div>
     
    </>
  );
}
