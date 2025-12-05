declare type ErrorResponss = {
  message: string;
  code: number;
};

declare type SuccessResponse={
    message: string; 
}& T


declare type ApiResponse<T>=ErrorResponss|SuccessResponse<T>