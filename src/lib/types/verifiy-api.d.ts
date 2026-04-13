//declare for Error verifyPassword
declare type ErrorVerifiyResponss = {
  message: string;
  code: number;
  status: false;
  errors: {
    path: string;
    message: string;
  }[];
};

//declare for Success verifyPassword
declare type SuccessVerifiyResponse = {
  status: true;
  message: string;
  code: number;
};

declare type ApiVerifiyResponse = ErrorVerifiyResponss | SuccessVerifiyResponse;
