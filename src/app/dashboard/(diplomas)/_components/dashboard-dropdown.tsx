'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { PenLine } from 'lucide-react';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import DeleteAdminModal from './delete-modal-Admin';

type SidebarDropdownProps = {
  diplom: string;
  diplomid: string;
};
export function SidebarDropdown({ diplom, diplomid }: SidebarDropdownProps) {
  // State
  const [openDeleteModal, setopenDeleteModal] = useState<boolean>(false);

  return (
    <>
      {/* DropdownMenu */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          {/* Button */}
          <Button variant="dot" aria-label="Open menu" size={'sm'}>
            <Ellipsis size={16} className="text-black" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuGroup>
            {/* Account part */}
            <DropdownMenuItem>
              <Link
                href={{
                  pathname: `/dashboard/${diplomid}`,
                  query: { title: `${diplom}` },
                }}
                className="flex items-center justify-start gap-2 cursor-pointer  w-full text-start"
              >
                <Eye size={16} className="text-green-500" />
                <h4 className="text-sm font-normal text-gray-500">View</h4>
              </Link>
            </DropdownMenuItem>

            {/* SignOut part */}
            <DropdownMenuItem>
              <Link
                href={{
                  pathname: `/dashboard/${diplomid}/edit`,
                  query: { title: `${diplom}` },
                }}
                className="flex items-center justify-start gap-2 cursor-pointer  w-full text-start"
              >
                <PenLine size={16} className="text-blue-600" />
                <span className="text-sm font-normal text-gray-500">Edit</span>
              </Link>
            </DropdownMenuItem>

            {/* SignOut part */}
            <DropdownMenuItem>
              <div
                className="flex items-center justify-start gap-2 cursor-pointer  w-full text-start"
                onClick={() => {
                  setopenDeleteModal(true);
                }}
              >
                <Trash2 size={16} className="text-red-600" />
                <span className="text-sm font-normal text-gray-500">
                  Delete
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {openDeleteModal && (
        <DeleteAdminModal
          diplomaId={diplomid}
          setopenModal={setopenDeleteModal}
          openModal={openDeleteModal}
        />
      )}
    </>
  );
}
