import React from 'react';
import { Button } from '@/components/ui/button';


interface SubmitButtonProps {
  label1: React.ReactNode;
  label2: React.ReactNode;
  loading?: boolean;
  disbale?: boolean;
  onClear?: () => void;
}
export default function DashboardSubmitButton({
  label1,
  label2,
  onClear,
}: SubmitButtonProps) {
  return (
    <div className="flex flex-col gap-6 pb-2 pt-3">
      {/* Error */}

      {/* Button */}
      <div className="flex w-full items-center justify-end gap-2">
        {/* Clear */}
        <Button
          variant="destructive"
          className="h-[2.25rem] w-[6.25rem]"
          onClick={onClear}
        >
          {label1}
        </Button>
        <Button variant="secondary" className="h-[2.25rem] w-[6.25rem]">
          {label2}
        </Button>
      </div>
    </div>
  );
}
