import { Progress } from '@/components/ui/progress';
import React from 'react';
import QuestionAnswers from './question-answers';

export default function QuestionContent() {
  return (
    <main className="flex flex-col gap-4">
      {/* header */}
      <section>
        <div className="mb-4 flex w-full flex-col gap-2 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <p className="text-xs font-normal text-gray-500 sm:text-sm">
            Frontend Development - CSS Quiz
          </p>
          <p className="text-xs font-normal text-gray-500 sm:text-sm">
            Question 1 of 25
          </p>
        </div>
        <Progress />
      </section>
      {/* question */}
      <section className="pt-6 bg-red-300">
        <h1 className="text-lg font-semibold text-blue-600 sm:text-xl md:text-2xl bg-white w-[21.625rem]">
          What does CSS stand for?
        </h1>
      </section>
      {/* answers */}
      <section className='bg-orange-400 flex flex-col gap-3'>
        <QuestionAnswers/>
      </section>
      {/* button */}
      <section></section>
    </main>
  );
}
