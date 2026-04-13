declare type ErrorResponss = {
  message: string;
  code: number;
  status: false;
  errors: {
    path: string;
    messages?: string[];
    message?: string;
  }[];
};

declare type SuccessResponse<T> = {
  code: number;
  status: true;
  payload: T;
};

declare type MetaData = {
  page: number;
  totalPages: number;
  limit: number;
  total: number;
};

declare type ApiResponse<T> = ErrorResponss | SuccessResponse<T>;
