//declare for Error verifyPassword
declare type ErrorDeleteResponss = {
  message: string;
  code: number;
};

//declare for Success verifyPassword
declare type SuccessDeleteResponse = {
  status: string;
};

declare type ApiDeleteResponse = ErrorDeleteResponss | SuccessDeleteResponse;
