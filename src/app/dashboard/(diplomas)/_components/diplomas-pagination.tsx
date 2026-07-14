'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  currentPage: number;
  totalPages: number;
  totalDiploma: number;
  limit: number;
};

export default function DiplomasPagination({
  currentPage,
  totalPages,
  limit,
  totalDiploma,
}: Props) {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Function
  function goToPage(page: number) {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams);

    params.set('page', page.toString());

    router.push(`${pathname}?${params.toString()}`);
  }

  // Const
  const activePage = Number(currentPage);
  return (
    <div className="flex flex-col justify-center items-center md:flex md:flex-row md:items-center md:justify-center w-fit gap-3">
      <h3 className="flex items-center justify-center gap-2 order-2 md:order-1">
        <span>1</span>- <span>{limit}</span> of <span>{totalDiploma}</span>
      </h3>
      <Pagination className="w-fit justify-start border-2 border-gray-200 text-start order-1 md:order-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => goToPage(currentPage - 1)}
              className={
                currentPage === 1
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={page === activePage}
                  onClick={() => goToPage(page)}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              onClick={() => goToPage(currentPage + 1)}
              className={
                currentPage === totalPages
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
