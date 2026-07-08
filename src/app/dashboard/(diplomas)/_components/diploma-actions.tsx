'use client';

import { Ban, PenLine, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DeleteAdminModal from './delete-modal-Admin';

const BUTTONS = [
  {
    title: 'Immutable',
    icon: Ban,
    color: 'bg-gray-200 hover:bg-gray-300 text-black gap-2',
    action: 'immutable',
  },
  {
    title: 'Edit',
    icon: PenLine,
    color: 'bg-blue-600 text-white',
    action: 'edit',
  },
  {
    title: 'Delete',
    icon: Trash2,
    color: 'bg-red-600 hover:bg-red-700 text-white',
    action: 'delete',
  },
] as const;

type Props = {
  diplomaId: string;
};

export default function DiplomaActions({ diplomaId }: Props) {
  // State
  const [openDeleteModal, setopenDeleteModal] = useState<boolean>(false);

  // Hook
  const router = useRouter();

  const handleClick = async (action: (typeof BUTTONS)[number]['action']) => {
    switch (action) {
      case 'immutable':
        // TODO
        break;

      case 'edit':
        router.push(`/dashboard/${diplomaId}/edit`);
        break;

      case 'delete':
        setopenDeleteModal(true);
        break;
    }
  };

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-4 lg:flex-row lg:justify-end">
        {BUTTONS.map((button) => {
          const Icon = button.icon;

          return (
            <Button
              key={button.title}
              className={`${button.color} w-full hover:opacity-90 lg:w-40`}
              onClick={() => handleClick(button.action)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {button.title}
            </Button>
          );
        })}
      </div>

      <DeleteAdminModal
        diplomaId={diplomaId}
        openModal={openDeleteModal}
        setopenModal={setopenDeleteModal}
      />
    </>
  );
}
