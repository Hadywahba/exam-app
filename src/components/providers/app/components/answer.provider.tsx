'use client';
import { Answers } from '@/app/(dashboard)/(diploma)/exam/[exam-id]/question/_types/answer';
import { createContext, useState, ReactNode, useContext } from 'react';

type AnswersContextType = {
  selectedAnswers: Answers[];
  handleAnswer: (questionId: string, selected: string) => void;
  resetAnswers: () => void;
};

export const AnswersContext = createContext<AnswersContextType | undefined>(
  undefined,
);

export const AnswersProvider = ({
  children,
  examId,
  questions,
}: {
  children: ReactNode;
  examId: string;
  questions: { _id: string }[];
}) => {
  const AnswerKey = `questionAnswers-${examId}`;
  const [selectedAnswers, setSelectedAnswers] = useState<Answers[]>(() => {
    const savedAnswer = localStorage.getItem(AnswerKey);
    if (savedAnswer) return JSON.parse(savedAnswer);
    const defaultAnswer = questions.map((ques) => ({
      questionId: ques._id,
      correct: 'c',
    }));
    localStorage.setItem(AnswerKey, JSON.stringify(defaultAnswer));
    return defaultAnswer;
  });

  const handleAnswer = (questionId: string, selected: string) => {
    setSelectedAnswers((prev) => {
      const updated = [
        ...prev.filter((a) => a.questionId !== questionId),
        { questionId, correct: selected },
      ];
      // convert from array to string and save it
      localStorage.setItem(AnswerKey, JSON.stringify(updated));
      return updated;
    });
  };
  // reset answers After submiting to start new exam
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
export const useAnswers = () => {
  const context = useContext(AnswersContext);
  if (!context)
    throw new Error('useAnswers must be used within AnswersProvider');
  return context;
};
