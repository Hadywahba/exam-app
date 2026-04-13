'use client';

import { Answers } from '@/app/(dashboard)/(diploma)/exam/[exam]/[exam-id]/question/_types/answer';
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

type AnswersContextType = {
  selectedAnswers: Answers[];
  handleAnswer: (questionId: string, answerId: string) => void;
  resetAnswers: () => void;
};

export const AnswersContext = createContext<AnswersContextType | undefined>(
  undefined,
);

export const AnswersProvider = ({
  children,
  examId,
}: {
  children: ReactNode;
  examId: string;
  questions: { id: string }[];
}) => {
  const AnswerKey = `questionAnswers-${examId}`;

  // ✅ init state safely
  const [selectedAnswers, setSelectedAnswers] = useState<Answers[]>([]);

  // ✅ load from localStorage once
  useEffect(() => {
    try {
      const saved = localStorage.getItem(AnswerKey);
      if (saved) {
        setSelectedAnswers(JSON.parse(saved));
      }
    } catch {
      setSelectedAnswers([]);
    }
  }, [AnswerKey]);

  // ✅ handle selecting answer
  const handleAnswer = (questionId: string, answerId: string) => {
    setSelectedAnswers((prev) => {
      const updated = [
        ...(prev || []).filter((a) => a.questionId !== questionId),
        { questionId, answerId },
      ];

      localStorage.setItem(AnswerKey, JSON.stringify(updated));
      return updated;
    });
  };

  // ✅ reset after submit
  const resetAnswers = () => {
    setSelectedAnswers([]);
    localStorage.removeItem(AnswerKey);
  };

  return (
    <AnswersContext.Provider
      value={{ selectedAnswers, handleAnswer, resetAnswers }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

// ✅ custom hook
export const useAnswers = () => {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error('useAnswers must be used within AnswersProvider');
  }
  return context;
};
