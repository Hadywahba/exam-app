'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { EllipsisVertical } from 'lucide-react';

export function DashboardSidebarDropdown() {
  // Hook
  const router = useRouter();
  return (
    <>
      {/* DropdownMenu */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          {/* Button */}
          <Button variant="dot" aria-label="Open menu" size={'sm'}>
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuGroup>
            {/* Account part */}
            <DropdownMenuItem onClick={() => router.push('/accout')}>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/assets/icons/user-round.svg"
                  width={18}
                  height={18}
                  alt="Account"
                />
                <h4 className="text-sm font-normal text-gray-500">Account</h4>
              </div>
            </DropdownMenuItem>

            {/* SignOut part */}
            <DropdownMenuItem onClick={() => signOut()}>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/log-out.svg"
                  width={18}
                  height={18}
                  alt="Logout"
                />
                <span className="text-sm font-normal text-gray-500">
                  Logout
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
