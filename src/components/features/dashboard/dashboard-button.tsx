import React from 'react';
import { Button } from '@/components/ui/button';
import SubmitError from '@/components/error/submit-error';

interface SubmitButtonProps {
  label1: React.ReactNode;
  label2: React.ReactNode;
  message: Error | null;
  loading?: boolean;
  disbale?: boolean;
  isPending?: boolean;
  onClear?: () => void;
}
export default function DashboardSubmitButton({
  label1,
  label2,
  message,
  loading,
  disbale,
  isPending,
  onClear,
}: SubmitButtonProps) {
  return (
    <div className="flex flex-col gap-6 pb-2 pt-3">
      {/* Error */}
      <SubmitError errors={message} />

      {/* Button */}
      <div className="flex w-full items-center justify-end gap-2">
        {/* Clear */}
        <Button
          variant="destructive"
          className="h-[2.25rem] w-[6.25rem]"
          disabled={isPending || (!disbale && loading)}
          onClick={onClear}
        >
          {isPending ? 'Loading...' : label1}
        </Button>
        <Button
          variant="secondary"
          className="h-[2.25rem] w-[6.25rem]"
          disabled={isPending || (!disbale && loading)}
        >
          {label2}
        </Button>
      </div>
    </div>
  );
}
