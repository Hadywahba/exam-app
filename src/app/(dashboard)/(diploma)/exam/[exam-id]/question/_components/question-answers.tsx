'use client';
import { useAnswers } from '@/components/providers/app/components/answer.provider';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function QuestionAnswers({
  questionId,
  answer,
  anserKey,
}: {
  questionId: string;
  answer: string;
  anserKey: string;
}) {
  // hook
  const { selectedAnswers, handleAnswer } = useAnswers();

  // Variable it used to show your current select answer
  const currentAnswer = selectedAnswers.find(
    (a) => a.questionId === questionId,
  )?.correct;

  return (
    <Button
      onClick={() => handleAnswer(questionId, anserKey)}
      variant={'answer'}
      className={`flex items-center justify-start text-sm font-normal hover:bg-gray-100`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${currentAnswer === anserKey ? 'border-[.0625rem] border-blue-600 bg-white' : 'border-gray-400'}`}
      >
        {currentAnswer === anserKey && (
          <span className="h-3 w-3 rounded-full bg-blue-600" />
        )}
      </span>
      {answer}
    </Button>
  );
}
