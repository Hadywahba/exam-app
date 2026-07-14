import React from 'react';
import DiplomasTabel from './(diplomas)/_components/diplomas-tabel';
import Search from './(diplomas)/_components/search';
import DiplomasPagination from './(diplomas)/_components/diplomas-pagination';
import { GetDiplomas } from './(diplomas)/_hooks/get-diploms';
import AddNewDiploma from './(diplomas)/_components/add-new-diploma';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    immutable?: string;
    page?: string;
    sortBy?: 'title' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
  }>;
}) {
  const params = await searchParams;

  const { data, error } = await GetDiplomas({
    page: Number(params.page) || 1,
    search: params.search,
    immutable:
      params.immutable === 'true'
        ? true
        : params.immutable === 'false'
          ? false
          : null,
    sortBy: params.sortBy,
    sortOrder: params.sortOrder,
  });

  return (
    <div className="space-y-6 border-t-2 border-gray-200">
      {/* Header */}
      <header className="flex w-full flex-col items-center justify-center gap-4 bg-white py-4 md:flex md:flex-row md:items-center md:justify-between">
        <DiplomasPagination
          currentPage={data?.metadata.page ?? 1}
          totalPages={data?.metadata.totalPages ?? 1}
          limit={data?.metadata.limit ?? 10}
           totalDiploma={data?.metadata.total ?? 1}
        />

        <AddNewDiploma />
      </header>

      {/* Search */}
      <Search />

      <DiplomasTabel data={data?.data ?? []} error={error} />
    </div>
  );
}
