import { useEffect, useState } from 'react';

export const UseNavigation = (totalQuestion: number, title: string) => {
  // State it used to store current question and read it from localstorage
  const [current, setCurrent] = useState<number>(() => {
    const savedQuestion = localStorage.getItem(`currentQuestion_${title}`);
    return savedQuestion ? Number(savedQuestion) : 0;
  });

  // Function Next question index
  const goToNext = () => {
    setCurrent((prev) => {
      const nextIndex = prev < totalQuestion - 1 ? prev + 1 : prev;
      return nextIndex;
    });
  };

  // Function Previous question index
  const goToPrevious = () => {
    setCurrent((prev) => {
      const lastIndex = prev > 0 ? prev - 1 : prev;
      return lastIndex;
    });
  };

  // Function Start exam (reset to first question)
  const goToExam = () => {
    setCurrent(0);
  };

  // Variable Calculate progress
  const progress =
    totalQuestion > 0 ? ((current + 1) / totalQuestion) * 100 : 0;

  // Effect
  /** Save current in localstorage */
  useEffect(() => {
    localStorage.setItem(`currentQuestion_${title}`, String(current));
  }, [current, title]);

  /** Prevent current from going out of range*/
  useEffect(() => {
    if (totalQuestion > 0) {
      setCurrent((prev) => Math.min(prev, totalQuestion - 1));
    } else {
      setCurrent(0);
    }
  }, [totalQuestion]);

  return {
    goToNext,
    goToPrevious,
    current,
    progress,
    goToExam,
    setCurrent,
  };
};
