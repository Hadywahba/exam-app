'use client';
import React from 'react';
import { UseDeleteAccount } from '../_hooks/use-delete-account';
import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';
import SubmitError from '@/components/error/submit-error';
import { X } from 'lucide-react';
import Modal from '@/components/ui/modal';
import { signOut } from 'next-auth/react';
export default function DeleteModal({
  setopenModal,
  openModal,
}: {
  setopenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}) {
  // Mutation
  const { deleteMe, deleteIsPending, deleteError } = UseDeleteAccount();
  return (
    <Modal
      isOpen={openModal}
      onClose={() => setopenModal(false)}
      className="relative mx-4 flex w-full max-w-[34.875rem] flex-col gap-4 bg-white md:gap-6"
    >
      {/* Close button */}
      <div className="absolute right-[.875rem] top-[.875rem] cursor-pointer">
        <X size={18} onClick={() => setopenModal(false)} />
      </div>

      {/* Image section */}
      <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 md:mt-12 md:h-28 md:w-28">
        <div className="flex h-[4.375rem] w-[4.375rem] items-center justify-center rounded-full bg-red-100 md:h-20 md:w-20">
          <TriangleAlert size={50} className="text-red-600" />
        </div>
      </div>

      {/* Text section */}
      <div className="space-y-3 px-4 md:px-[2.25rem]">
        <p className="mx-auto text-center font-medium text-red-600 md:text-[1.125rem]">
          Are you sure you want to delete your account?
        </p>
        <p className="text-center text-sm font-normal text-gray-500">
          This action is permanent and cannot be undone.
        </p>
      </div>

      {/* Error section */}
      <div>
        <SubmitError errors={deleteError} />
      </div>

      {/* buttons section  */}
      <div className="flex w-full items-center justify-center gap-6 border-t-[.0625rem] border-gray-200 bg-gray-50 p-6">
        <Button
          onClick={() => setopenModal(false)}
          variant="secondary"
          className="w-[13.5625rem]"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            (deleteMe(), signOut());
          }}
          variant="destructive"
          className="w-[13.5625rem]"
          disabled={deleteIsPending}
        >
          {deleteIsPending ? 'Loading...' : 'Yes, delete'}
        </Button>
      </div>
    </Modal>
  );
}
