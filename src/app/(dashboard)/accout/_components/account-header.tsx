import Image from 'next/image';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
export default function AccountHeader() {
  return (
    <section className="flex items-stretch justify-center gap-2 py-5 ">
      <div className="flex items-center justify-center border-[.0625rem] border-blue-600 bg-white px-3">
        <ChevronLeft size={24} className="text-blue-600" />
      </div>
      <div className="flex w-full items-center gap-4 bg-blue-600 py-3 pl-4">
        <Image
          src="/assets/icons/user-round-white.svg"
          width={45}
          height={45}
          alt="folder"
          className="h-[30px] w-[30px] md:h-[45px] md:w-[45px]"
        />
        <h1 className="font-inter text-[1rem] font-semibold text-white sm:text-[2rem]">
          Account Settings
        </h1>
      </div>
    </section>
  );
}
