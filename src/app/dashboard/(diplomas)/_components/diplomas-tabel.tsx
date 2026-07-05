import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowDownWideNarrow } from 'lucide-react';

export default function DiplomasTabel() {
  return (
    <div className="bg-white">
      <Table className=''>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className='bg-blue-600 text-white'>
          <TableRow className='text-white'>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="flex  items-center">
              Sort <ArrowDownWideNarrow />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
