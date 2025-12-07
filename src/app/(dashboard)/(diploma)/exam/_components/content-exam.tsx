import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ContentExam({
  title,
  duration,
  numberOfQuestions,
}: {
  title: string;
  duration: string;
  numberOfQuestions: number;
}) {
  return (
    <Link href={'/'}>
    <section className=" flex flex-col md:flex md:flex-row  h-[5rem] md:items-center md:justify-between bg-blue-50 px-4 hover:bg-blue-100" title={title}>
      {/* Left Part */}
      <div className="flex flex-col gap-1">
        <h1 className=" text-base sm:text-lg md:text-xl font-semibold text-blue-600">{title}</h1>

        <p className="text-xs sm:text-sm font-normal text-gray-500">
          {numberOfQuestions} Questions{' '}
        </p>
      </div>
      {/* Right Part */}
      <div className="flex gap-1 items-center">
        <Image
          src={'/assets/icons/timer.svg'}
          width={24}
          height={24}
          alt="timer"
        />
        <p className='text-gray-800 font-normal text-xs sm:text-sm' >Duration: {duration} minutes </p>
      </div>

    </section>
    </Link>
  );
}
