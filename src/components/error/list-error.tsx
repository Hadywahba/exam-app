import React, { ReactNode } from 'react';

interface Props {
  isError: boolean;
  message?: string;
  children: ReactNode;
}

const ListError = ({
  isError,
  message = 'An unknown error occurred',
  children,
}: Props) => {
  if (isError) {
    return (
      <div className="dark:text-black-500 col-span-full flex h-auto w-full items-center justify-center bg-gray-50 p-8">
        <p>
          <strong className="mx-1 font-bold">Error!</strong>
          <span>{message}</span>
        </p>
      </div>
    );
  }

  return children;
};

export default ListError;
