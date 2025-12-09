
import Image from 'next/image';
import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function QuestionHeader({examTitle}:{examTitle:string}) {
  return (
    <section className="flex items-stretch justify-center gap-2 pt-5 ">
      <div className="flex items-center justify-center border-[.0625rem] border-blue-600 bg-white px-3">
        <ChevronLeft    className="text-blue-600 w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"  />
      </div>
      <div className="flex w-full items-center gap-2 sm:gap-4 bg-blue-600 py-3 pl-2 sm:pl-4">
        <Image
          src="/assets/icons/circle-question-mark.svg"
          width={45}
          height={45}
          alt="folder"
          className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[45px] md:w-[45px]"
        />
        <h1 className="font-inter text-[0.9rem] font-semibold text-white sm:text-[2rem]">
       [{examTitle}] Questions
        </h1>
      </div>
    </section>
  );
}
