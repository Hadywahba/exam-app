'use client';

import SubmitError from '@/components/error/submit-error';
import { Button } from '@/components/ui/button';
import { Save, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BUTTONS = [
  {
    title: 'Cancel',
    icon: X,
    color: 'bg-gray-200 hover:bg-gray-400 text-black',
    action: 'Cancel',
  },
  {
    title: 'Save',
    icon: Save,
    color: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    action: 'Save',
  },
] as const;

type Props = {
  isPending: boolean;
  error: Error | null;
};
export default function DiplomaButtonsActions({ isPending, error }: Props) {
  //
  const router = useRouter();

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-4 border-t py-3 lg:flex-row lg:justify-end">
        {BUTTONS.map((button) => {
          const Icon = button.icon;

          return (
            <Button
              key={button.title}
              type={button.action === 'Save' ? 'submit' : 'button'}
              className={`${button.color} w-full hover:opacity-90 disabled:opacity-50 lg:w-fit`}
              onClick={
                button.action === 'Cancel'
                  ? () => router.push('/dashboard')
                  : undefined
              }
            >
              <Icon className="mr-2 h-4 w-4" />
              {button.action === 'Save' && isPending
                ? 'Saving...'
                : button.title}
            </Button>
          );
        })}
      </div>
      {/* Error */}
      <SubmitError errors={error} />
    </>
  );
}
