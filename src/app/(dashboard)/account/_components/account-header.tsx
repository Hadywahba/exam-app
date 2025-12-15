import Image from 'next/image';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
export default function AccountHeader() {
  return (
    <section className="flex items-stretch justify-center gap-2 py-5">
      {/* Icon */}
      <div className="flex items-center justify-center border-[.0625rem] border-blue-600 bg-white px-3">
        <ChevronLeft className="h-4 w-4 text-blue-600 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
      </div>
      
      {/* Image and Title */}
      <div className="flex w-full items-center gap-4 bg-blue-600 py-3 pl-4">
        <Image
          src="/assets/icons/user-round-white.svg"
          width={45}
          height={45}
          alt="folder"
          className="h-[1.875rem] w-[1.875rem] md:h-[2.8125rem] md:w-[2.8125rem]"
        />
        <h1 className="font-inter text-[1rem] font-semibold text-white sm:text-[2rem]">
          Account Settings
        </h1>
      </div>
    </section>
  );
}
