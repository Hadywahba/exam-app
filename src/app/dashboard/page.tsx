import React from 'react';
import DiplomasTabel from './(diplomas)/_components/diplomas-tabel';
import Search from './(diplomas)/_components/search';
import DiplomasPagination from './(diplomas)/_components/diplomas-pagination';
import { GetDiplomas } from './(diplomas)/_hooks/get-diploms';

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
    <div className="mt-6 space-y-6">
      <Search />

      <DiplomasTabel
        data={data?.data ?? []}
        error={error}
      />

      <DiplomasPagination
        currentPage={data?.metadata.page ?? 1}
        totalPages={data?.metadata.totalPages ?? 1}
      />
    </div>
  );
}