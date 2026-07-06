import { getToken } from '@/lib/utility/manage-token';

export const GetAllDiplomas = async ({
  limit,
  page,
  search,
  immutable,
  sortBy,
  sortOrder,
}: GetAllDiplomasParams) => {
  const tokenObj = await getToken();
  const token = tokenObj?.accesstoken;

  const params = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
    ...(search && { search }),
    ...(immutable !== null &&
      immutable !== undefined && {
        immutable: immutable.toString(),
      }),
    ...(sortBy && { sortBy }),
    ...(sortOrder && { sortOrder }),
  });

  const response = await fetch(
    `${process.env.API}/diplomas?${params.toString()}`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result: ApiResponse<DiplomasResponse> = await response.json();
  return result;
};
