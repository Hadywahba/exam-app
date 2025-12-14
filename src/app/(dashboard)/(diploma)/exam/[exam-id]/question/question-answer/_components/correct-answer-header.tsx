import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function CorrectAnswerHeader({
  examTitle,
}: {
  examTitle: string;
}) {
  return (
    <section className="flex items-stretch justify-center gap-2 pt-5">
      {/* Icon */}
      <div className="flex items-center justify-center border-[.0625rem] border-blue-600 bg-white px-3">
        <ChevronLeft className="h-4 w-4 text-blue-600 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
      </div>
      {/* Content */}
      <div className="flex w-full items-center gap-2 bg-blue-600 py-3 pl-2 sm:gap-4 sm:pl-4">
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
