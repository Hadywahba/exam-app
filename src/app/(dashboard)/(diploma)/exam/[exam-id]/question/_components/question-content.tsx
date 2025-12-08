"use client"
import { Progress } from '@/components/ui/progress';
import React, { useEffect, useState } from 'react';
import QuestionAnswers from './question-answers';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuestionTimer from './question-timer';
import { ExamQuestionsResponse } from '@/lib/types/question.response';


export default function QuestionContent({
  title,
  duration,
  question
}: {
  title: string;
  duration: number;
  question:ExamQuestionsResponse;
}) {
  
  const [current, setCurrent] = useState<number>(() => {
    const saved = localStorage.getItem('currentQuestion');
    return saved ? Number(saved) : 0;
  });

  
  useEffect(() => {
    localStorage.setItem('currentQuestion', String(current));
  }, [current]);
    const questionsCount=8
  const progress = questionsCount > 0 ? ((current + 1) / questionsCount) * 100 : 0;
  return (
    <main className="flex flex-col gap-4">
      {/* header */}
      <section>
        <div className="mb-4 flex w-full flex-col gap-2 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <p className="text-xs font-normal text-gray-500 sm:text-sm">
            Frontend Development - {title}
          </p>
          <p className="text-xs font-normal text-gray-500 sm:text-sm">
            Question {current+1} of {questionsCount}
          </p>
        </div>
        <Progress value={progress} />
      </section>
      {/* question */}
      <section className="pt-6">
        <h1 className="bg-white text-base font-semibold text-blue-600  sm:text-xl md:text-2xl">
        {question?.questions[current]?.question}
        </h1>
      </section>
      {/* answers */}
      <section className="flex flex-col gap-3">
        <QuestionAnswers />
      </section>
      {/* button */}
      <section className="bg- flex w-full flex-col gap-4 pb-20 pt-6 sm:flex sm:flex-row sm:items-center md:justify-center">
        {/* right part */}
        <Button className="order-2 w-full sm:order-1" disabled={current==0} onClick={()=>setCurrent(current-1)}>
          <ChevronLeft size={18} /> Previous
        </Button>
        {/* center part */}
        <div className="order-1 mx-auto sm:order-2"><QuestionTimer duration={duration}/></div>
        {/* left part */}
        <Button className="order-3 w-full sm:order-3" disabled={current >= questionsCount - 1}  onClick={()=>setCurrent(current+1)}>
          Next <ChevronRight size={18} />
        </Button>
      </section>
    </main>
  );
}
