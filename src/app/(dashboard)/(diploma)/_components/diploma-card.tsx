import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GetSubjects } from '../_hooks/get-subjects';
import ListError from '@/components/error/list-error';

export default async function DiplomaCard() {
  // it used to get data from server
  const { data, error } = await GetSubjects();

  
  const fixImageUrl = (url: string) => {
  if (!url) return "";

  return url
    .replace("https://elevate-bootcamp.cloud", "https://exam-app.elevate-bootcamp.cloud")
    .replace("https://www.elevate-bootcamp.cloud", "https://exam-app.elevate-bootcamp.cloud");
};
  return (
    <>
      <ListError isError={!!error} message={error}>
        {data?.data.map((item) => (
          <Link
            href={{
              pathname: `/exam/${item.id}`,
              query: { title: item.title },
            }}
            key={item.id}
          >
            <section
              className="relative flex items-center justify-center"
              title={item.title}
            >
              <Image
                src={fixImageUrl(item.image)}
                width={334}
                height={448}
                alt={item.title}
                className="h-[20.9375rem] w-full object-center md:h-[28rem]"
              />
              <div className="absolute bottom-3 left-3 right-3 flex h-[4.1875rem] items-center justify-start bg-[#155DFC80]">
                <h1 className="w-[14.25rem] pl-4 text-xl font-semibold text-white">
                  {item.title}
                </h1>
              </div>
            </section>
          </Link>
        ))}
      </ListError>
    </>
  );
}
