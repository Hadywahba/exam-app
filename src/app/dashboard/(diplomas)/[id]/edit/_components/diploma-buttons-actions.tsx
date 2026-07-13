'use client';

import { Button } from '@/components/ui/button';
import { Save, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BUTTONS = [
  {
    title: 'Cancel',
    icon: X,
    color: 'bg-gray-200 hover:bg-red-700 text-black',
    action: 'Cancel',
  },
  {
    title: 'Save',
    icon: Save,
    color: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    action: 'Save',
  },
] as const;

export default function DiplomaButtonsActions() {
  // State

  // Hook
  const router = useRouter();

  const handleClick = async (action: (typeof BUTTONS)[number]['action']) => {
    switch (action) {
      case 'Cancel':
        break;

      case 'Save':
        break;
    }
  };

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-4 border-t py-3 lg:flex-row lg:justify-end">
        {BUTTONS.map((button) => {
          const Icon = button.icon;

          return (
            <Button
              key={button.title}
              className={`${button.color} w-full hover:opacity-90 lg:w-fit`}
              onClick={() => handleClick(button.action)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {button.title}
            </Button>
          );
        })}
      </div>
    </>
  );
}
