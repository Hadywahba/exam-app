'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowDownWideNarrow, CalendarArrowUp } from 'lucide-react';
import { CalendarArrowDown } from 'lucide-react';
import { ArrowUpAZ } from 'lucide-react';
import { ArrowDownAZ } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
export function SortDropdown() {
  // Hook
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Function
  function changeSort(
    sortBy: 'title' | 'createdAt',
    sortOrder: 'asc' | 'desc',
  ) {
    const params = new URLSearchParams(searchParams);

    params.set('sortBy', sortBy);
    params.set('sortOrder', sortOrder);
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  }
  return (
    <>
      {/* DropdownMenu */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          {/* Button */}
          <Button variant="dot" aria-label="Open menu" className="p-0">
            <ArrowDownWideNarrow size={16} className="text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full" align="end">
          <DropdownMenuGroup>
            {/* Account part */}
            <DropdownMenuItem
              onClick={() => changeSort('title', 'desc')}
              className="p-4"
            >
              <div className="flex items-center justify-center gap-2">
                <ArrowDownAZ size={18} className="text-gray-500" />
                <span className="text-sm font-normal text-black">
                  Title{' '}
                  <span className="text-xs text-gray-500">(descending)</span>
                </span>
              </div>
            </DropdownMenuItem>

            {/*  part */}
            <DropdownMenuItem
              onClick={() => changeSort('title', 'asc')}
              className="p-4"
            >
              <div className="flex items-center gap-2">
                <ArrowUpAZ size={18} className="text-gray-500" />
                <span className="flex gap-1 text-sm font-normal text-black">
                  Title{' '}
                  <span className="text-xs text-gray-500"> (ascending)</span>
                </span>
              </div>
            </DropdownMenuItem>

            {/*  part */}
            <DropdownMenuItem
              onClick={() => changeSort('createdAt', 'desc')}
              className="p-4"
            >
              <div className="flex items-center gap-2">
                <CalendarArrowDown size={18} className="text-gray-500" />
                <span className="text-sm font-normal text-black">
                  Newest{' '}
                  <span className="text-xs text-gray-500">(descending)</span>
                </span>
              </div>
            </DropdownMenuItem>

            {/*  part */}
            <DropdownMenuItem
              onClick={() => changeSort('createdAt', 'asc')}
              className="p-4"
            >
              <div className="flex items-center gap-2">
                <CalendarArrowUp size={18} className="text-gray-500" />
                <span className="text-sm font-normal text-black">
                  Newest{' '}
                  <span className="text-xs text-gray-500">(ascending)</span>
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
