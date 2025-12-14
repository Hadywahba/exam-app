import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GetSubjects } from '../_hooks/get-subjects';
import ListError from '@/components/error/list-error';

export default async function DiplomaCard() {
  // it used to get data from server
  const { data, error } = await GetSubjects();

  return (
    <>
      <ListError isError={!!error} message={error}>
        {data?.subjects.map((item) => (
          <Link href={'/exam'} key={item._id}>
            <section
              className="relative flex items-center justify-center"
              title={item.name}
            >
              <Image
                src={item.icon}
                width={334}
                height={448}
                alt={item.name}
                className="h-[20.9375rem] w-full object-cover md:h-[28rem]"
              />
              <div className="absolute bottom-3 left-3 right-3 flex h-[4.1875rem] items-center justify-start bg-[#155DFC80] ">
                <h1 className="w-[14.25rem] pl-4 text-xl font-semibold text-white">
                  {item.name}
                </h1>
              </div>
            </section>
          </Link>
        ))}
      </ListError>
    </>
  );
}
