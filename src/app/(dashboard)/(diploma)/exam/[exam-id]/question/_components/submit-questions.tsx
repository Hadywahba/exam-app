import React from 'react';
import { Button } from '@/components/ui/button';
import SubmitError from '@/components/error/submit-error';

interface SubmitAnswersButtonProps {
  label: React.ReactNode;
  message: Error | null;
  isPending?: boolean;
  sendAnswers: () => void;
}
export default function SubmitAnswersButton({
  label,
  message,
  isPending,
  sendAnswers,
}: SubmitAnswersButtonProps) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      {/* Button */}
      <div className="flex w-full flex-col items-center justify-center gap-9">
        <Button
          disabled={isPending}
          onClick={sendAnswers}
          variant="default"
          className="w-full"
        >
          {isPending ? 'Loading...' : label}
        </Button>
      </div>

      {/* Error */}
      <SubmitError errors={message} />
    </div>
  );
}
