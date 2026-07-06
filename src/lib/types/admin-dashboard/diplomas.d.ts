declare type DiplomasResponse = {
  metadata: MetaData;
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    immutable: boolean;
  }[];
};

declare type GetAllDiplomasParams = {
  limit: number;
  page: number;
  search?: string;
  immutable?: boolean | null;
  sortBy?: 'title' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
};

declare type GetDiplomasParams = {
  page?: number;
  search?: string;
  immutable?: boolean | null;
  sortBy?: 'title' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
};
