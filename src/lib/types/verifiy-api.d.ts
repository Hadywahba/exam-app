//declare for Error verifyPassword  
declare type ErrorVerifiyResponss = {
  message: string;
  code: number;
};



//declare for Success verifyPassword  
declare type SuccessVerifiyResponse={
    status: string; 
}


declare type ApiVerifiyResponse=ErrorVerifiyResponss|SuccessVerifiyResponse

