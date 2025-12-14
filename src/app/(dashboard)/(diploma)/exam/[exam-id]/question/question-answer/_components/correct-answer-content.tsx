'use client';

import { Progress } from '@/components/ui/progress';
import { ExamQuestionsResponse } from '@/lib/types/question.response';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FolderSearch, RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AnswerChart } from './answer-chart';
import AnswerChecked from './answer-checked';
import { UseNavigation } from '../../_hooks/use-question-navigation';

export default function CorrectAnswerContent({
  question,
  examId,
}: {
  question: ExamQuestionsResponse;
  examId: string;
}) {
  // router
  const router = useRouter();

  // custom hook
  const { setCurrent } = UseNavigation(
    question?.questions?.length,
    question?.questions[0]?.exam?.title,
  );

  // functions
  const goToExam = () => {
    router.push(`/exam`);
  };

  const resetExam = () => {
    router.push(`/exam/${examId}/question`);
  };

  // Effect
  useEffect(() => {
    localStorage.removeItem(
      `currentQuestion_${question?.questions[0]?.exam?.title}`,
    );
    setCurrent(0);
  }, [setCurrent, question?.questions]);

  return (
    <main className="flex flex-col gap-4">
      {/* header */}
      <section>
        <div className="mb-4 flex w-full flex-col gap-2 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <p className="text-xs font-normal text-gray-500 sm:text-sm">
            Frontend Development - {question?.questions[0]?.exam?.title}
          </p>
          <p className="text-xs font-normal text-gray-500 sm:text-sm">
            Question{' '}
            <span className="text-xs font-bold text-blue-600 sm:text-sm">
              {question?.questions?.length}
            </span>{' '}
            of {question?.questions?.length}
          </p>
        </div>
        <Progress value={100} />
      </section>
      {/* Result */}
      <section className="pt-6">
        <h1 className="text-lg font-semibold text-blue-600 sm:text-xl md:text-2xl">
          Results:
        </h1>
      </section>

      {/* question */}
      <section className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-between md:gap-9">
        {/* left part */}
        <div>
          <AnswerChart />
        </div>

        {/* right part */}
        <div className="flex h-[32.125rem] flex-1 overflow-y-scroll">
          <AnswerChecked question={question} />
        </div>
      </section>

      {/* Buttons */}
      <section className="flex items-center justify-center gap-4 pb-8">
        {/* Restart button */}
        <Button onClick={resetExam} variant={'secondary'} className="w-full">
          <RotateCcw size={18} /> Restart
        </Button>
        
        {/* Explore button */}
        <Button onClick={goToExam} variant={'default'} className="w-full">
          <FolderSearch size={18} /> Explore
        </Button>
      </section>
    </main>
  );
}
