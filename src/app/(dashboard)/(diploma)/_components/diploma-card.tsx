import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function DiplomaCard({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <Link href={'/exam'}>
    
    <div className="flex justify-center items-center relative rounded-none">
      <Image 
        src={icon} 
        width={334} 
        height={448} 
        alt={name} 
        className="w-full h-[20.9375rem]  md:h-[28rem] object-cover rounded-none" 
      />
      <div className='absolute bg-[#155DFC80] bottom-4 left-4 right-4 h-[4.1875rem] flex justify-start items-center'>
        <h1 className='text-xl text-white font-semibold pl-4 w-[14.25rem]'>{name}</h1>

      </div>
    </div>
    </Link>
  );
}
