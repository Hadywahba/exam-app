'use client';
import { QuestionsAnswerResponse } from '@/app/(dashboard)/(diploma)/exam/[exam-id]/question/_types/answer';
import { createContext, ReactNode, useEffect, useState } from 'react';

type CorrectAnswersContextType = {
  answers: QuestionsAnswerResponse | null;
  answersState: (value: QuestionsAnswerResponse | null) => void;
};
export const CorrectAnswers = createContext<CorrectAnswersContextType | null>(
  null,
);

export default function CorrectAnsweProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [answers, setAnswers] = useState<QuestionsAnswerResponse | null>(null);
  const answersState = (value: QuestionsAnswerResponse | null) => {
    setAnswers(value);
    if (value) {
      localStorage.setItem('exam-answers', JSON.stringify(value));
    } else {
      localStorage.removeItem('exam-answers');
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('exam-answers');
    if (stored) {
      setAnswers(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <CorrectAnswers.Provider value={{ answers, answersState }}>
        {children}
      </CorrectAnswers.Provider>
    </>
  );
}
