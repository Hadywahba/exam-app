import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GetSubjects } from '../_hooks/get-subjects';
import ListError from '@/components/error/list-error';

export default async function DiplomaCard() {
   const { data, error } = await GetSubjects();

  return (
    <>
    <ListError isError={!!error} message={error} >
    {data?.subjects.map((item)=>(
        <Link href={'/exam'} key={item._id}>
    
    <section className="flex justify-center items-center relative group" title={item.name}>
      <Image 
        src={item.icon} 
        width={334} 
        height={448} 
        alt={item.name} 
        className="w-full h-[20.9375rem]  md:h-[28rem] object-cover" 
      />
      <div className=' opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bg-[#155DFC80] bottom-3 left-3 right-3 h-[4.1875rem] flex justify-start items-center'>
        <h1 className='text-xl text-white font-semibold pl-4 w-[14.25rem]'>{item.name}</h1>

      </div>
    </section>
    </Link>
    ))}
    </ListError>
    </>
  
  );
}
