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
export function SidebarDropdown() {
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
              <div className="flex items-center justify-center gap-2">
                <Eye size={16} className="text-green-500" />
                <h4 className="text-sm font-normal text-gray-500">View</h4>
              </div>
            </DropdownMenuItem>

            {/* SignOut part */}
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <PenLine size={16} className="text-blue-600" />
                <span className="text-sm font-normal text-gray-500">Edit</span>
              </div>
            </DropdownMenuItem>

            {/* SignOut part */}
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <Trash2 size={16} className="text-red-600" />
                <span className="text-sm font-normal text-gray-500">
                  Delete
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
