import { useEffect, useState } from 'react';

export const UseNavigation = (totalQuestion: number, title: string) => {
  // to store current question and read it from localstorage
  const [current, setCurrent] = useState<number>(() => {
    const savedQuestion = localStorage.getItem(`currentQuestion_${title}`);
    return savedQuestion ? Number(savedQuestion) : 0;
  });
  // Save current in localstorage

  useEffect(() => {
    localStorage.setItem(`currentQuestion_${title}`, String(current));
  }, [current, title]);

  // Next question index
  const goToNext = () => {
    setCurrent((prev) => {
      const nextIndex = prev < totalQuestion - 1 ? prev + 1 : prev;
      return nextIndex;
    });
  };

  // Previous question index
  const goToPrevious = () => {
    setCurrent((prev) => {
      const lastIndex = prev > 0 ? prev - 1 : prev;
      return lastIndex;
    });
  };

  // Prevent current from going out of range
  useEffect(() => {
    if (totalQuestion > 0) {
      setCurrent((prev) => Math.min(prev, totalQuestion - 1));
    } else {
      setCurrent(0);
    }
  }, [totalQuestion]);

  // Start exam (reset to first question)
  const goToExam = () => {
    setCurrent(0);
  };

  // Calculate progress
  const progress =
    totalQuestion > 0 ? ((current + 1) / totalQuestion) * 100 : 0;

  return {
    goToNext,
    goToPrevious,
    current,
    progress,
    goToExam,
    setCurrent,
  };
};
