'use client';
import { Progress } from '@/components/ui/progress';
import React, { useCallback, useEffect, useState } from 'react';
import QuestionAnswers from './question-answers';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuestionTimer from './question-timer';
import {
  Answer,
  ExamQuestionsApiResponse,
} from '@/lib/types/question.response';
import { UseNavigation } from '../_hooks/use-question-navigation';
import { UseQuestionAnswers } from '../_hooks/use-question-answer';
import SubmitAnswersButton from './submit-questions';
import { useAnswers } from '@/components/providers/app/components/answer.provider';
import { UseExamTimer } from '../_hooks/use-exam-timer';
import { useParams, useRouter } from 'next/navigation';

export default function QuestionContent({
  title,
  duration,
  question,
  examId,
  examTitle,
}: {
  title: string;
  duration: number;
  question: ExamQuestionsApiResponse;
  examId: string;
  examTitle: string;
}) {
  //React Hooks
  const router = useRouter();
  const params = useParams();

  // Get params
  const Id = params['exam-id'];
  const ExamContentId = params['exam'];

  const [submitted, setSubmitted] = useState(false);

  // Context
  const { selectedAnswers, resetAnswers } = useAnswers();

  // Constant
  const totalTime = duration * 60;

  // Mutation
  const { Ans, error, isPending } = UseQuestionAnswers();

  //  Custom Hook
  /** Time Hook for exam */
  const { usedTime, stop, start, reset } = UseExamTimer(
    examId,
    totalTime,
  );
  /** Navigation Hook for exam */
  const { current, goToNext, goToPrevious, progress } = UseNavigation(
    question?.questions?.length,
    title,
  );

  // Function
  /** it used to send questions answer to api */
  const onsubmit = useCallback(() => {
    const payload = {
      examId: examId,
      answers: selectedAnswers,
      startedAt: new Date().toISOString(),
    };
    console.log(payload);
    console.log(selectedAnswers);
    Ans(payload, {
      onSuccess: () => {
        reset();
        stop();
        resetAnswers();
        // Small delay to ensure localStorage is written before navigation
        setTimeout(() => {
          router.push(
            `/exam/${ExamContentId}/${Id}/question/question-answer?title=${title}`,
          );
        }, 100);
      },
    });
  }, [
    selectedAnswers,
    Ans,
    reset,
    stop,
    resetAnswers,
    router,
    Id,
    title,
    ExamContentId,
    examId,
  ]);

  // Effect
  /** it used to start exam time */
  useEffect(() => {
    stop();
    start();
  }, [start, stop]);

  /** it used to submit exam after the time has ended */
  useEffect(() => {
    if (usedTime <= 0 && !submitted) {
      setSubmitted(true);
      onsubmit();
    }
  }, [usedTime, submitted, onsubmit]);

  return (
    <main className="flex flex-col gap-4">
      {/* header */}
      <section>
        <div className="mb-4 flex w-full flex-col gap-2 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <p className="text-xs font-normal text-gray-500 sm:text-sm">
            {examTitle} - {question?.questions[current]?.text}
          </p>
          <p className={`text-xs font-normal text-gray-500 sm:text-sm`}>
            Question{' '}
            <span className="font-semibold text-blue-600">{current + 1}</span>{' '}
            of {question?.questions?.length}
          </p>
        </div>
        <Progress value={progress} />
      </section>

      {/* question */}
      <section className="pt-6">
        <h1 className="bg-white text-base font-semibold text-blue-600 sm:text-xl md:text-2xl">
          {question?.questions[current]?.text}
        </h1>
      </section>

      {/* answers */}
      <section className="flex flex-col gap-3">
        {question.questions[current].answers.map(
          (item: Answer, index: number) => {
            return (
              <QuestionAnswers
                key={index}
                questionId={question.questions[current].id}
                answer={item.text}
                anserKey={item.id}
              />
            );
          },
        )}
      </section>

      {/* Navigation button */}
      <section className="bg- flex w-full flex-col gap-4 pt-6 sm:flex sm:flex-row sm:items-center md:justify-center">
        {/* right part */}
        <Button
          className="order-2 w-full sm:order-1"
          disabled={current == 0}
          onClick={goToPrevious}
        >
          <ChevronLeft size={18} /> Previous
        </Button>
        {/* center part */}
        <div className="order-1 mx-auto sm:order-2">
          <QuestionTimer usedTime={usedTime} totalTime={totalTime} />
        </div>
        {/* left part */}
        <Button
          className="order-3 w-full sm:order-3"
          disabled={current >= question?.questions?.length - 1}
          onClick={goToNext}
        >
          Next <ChevronRight size={18} />
        </Button>
      </section>

      {/* Submit button */}
      <section>
        {current >= question?.questions?.length - 1 && (
          <SubmitAnswersButton
            label={
              <span className="flex items-center gap-2">
                Submit <SendHorizontal size={18} />
              </span>
            }
            message={error}
            isPending={isPending}
            sendAnswers={onsubmit}
          />
        )}
      </section>
    </main>
  );
}
