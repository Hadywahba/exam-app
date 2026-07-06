import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import ListError from '@/components/error/list-error';
import Image from 'next/image';
import { Ellipsis } from 'lucide-react';
import { SidebarDropdown } from './dashboard-dropdown';
import { SortDropdown } from './sort-dropdown';

type Diploma = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type DiplomasTableProps = {
  data: Diploma[];
  error?: string | null;
};
export default async function DiplomasTabel({
  data,
  error,
}: DiplomasTableProps) {
  // Hook

  return (
    <ListError isError={!!error} message={error ?? undefined}>
      {/* Desktop / Tablet: Table view */}
      <div className="mb-4 overflow-x-auto rounded-md bg-white">
        <Table>
          <TableHeader className="bg-blue-600 text-white">
            <TableRow className="text-white">
              <TableHead className="text-center text-white">Image</TableHead>
              <TableHead className="text-white">Title</TableHead>
              <TableHead className="hidden text-white md:table-cell">
                Description
              </TableHead>
              <TableHead className="text-white">
                <span className="flex items-center gap-1">
                  Sort <SortDropdown />
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.id}>
                {/* Image */}
                <TableCell>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={80}
                    className="mx-auto rounded-md object-cover"
                  />
                </TableCell>

                {/* Title */}
                <TableCell className="max-h-20 max-w-40 font-medium">
                  {item.title}
                </TableCell>

                {/* Description — hidden on sm, visible from md */}
                <TableCell className="hidden max-w-xs break-words px-4 py-3 text-sm font-normal text-gray-500 md:table-cell">
                  {item.description}
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="mx-auto flex size-8 items-center justify-center rounded bg-gray-200">
                    <SidebarDropdown />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile: Card view */}
      <div className="flex flex-col gap-3 sm:hidden">
        {data?.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 rounded-md bg-white p-3 shadow-sm"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={60}
              className="shrink-0 rounded-md object-cover"
            />

            {/* Info */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                {item.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex size-8 shrink-0 items-center justify-center rounded bg-gray-200">
              <Ellipsis size={16} className="text-black" />
            </div>
          </div>
        ))}
      </div>
    </ListError>
  );
}
