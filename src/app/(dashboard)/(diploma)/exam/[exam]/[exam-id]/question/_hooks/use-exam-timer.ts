'use';
import { useCallback, useEffect, useRef, useState } from 'react';

export const UseExamTimer = (examid: string, initialSecond: number) => {
  // State
  const [usedTime, setusedTime] = useState(() => {
    const savedTime = localStorage.getItem(`exam-time-${examid}`);
    return savedTime ? Number(savedTime) : initialSecond;
  });

  // ref
  const timeInterval = useRef<NodeJS.Timeout | null>(null);
  const time = useRef<number>(initialSecond);

  // Function start time
  const start = useCallback(() => {
    if (timeInterval.current) return;

    timeInterval.current = setInterval(() => {
      time.current -= 1;
      localStorage.setItem(`exam-time-${examid}`, String(time.current));
      setusedTime(time.current);
      if (time.current <= 0) {
        clearInterval(timeInterval.current!);
        timeInterval.current = null;
      }
    }, 1000);
  }, [examid]);

  // Function stop Time
  const stop = useCallback(() => {
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
      timeInterval.current = null;
    }
  }, []);

  // Function reset
  const reset = useCallback(() => {
    stop();
    time.current = initialSecond;
    setusedTime(initialSecond);
    localStorage.setItem(`exam-time-${examid}`, String(time.current));
  }, [stop, initialSecond, examid]);

  // Constant  time Token
  const timeToken = initialSecond - time.current;

  // Effect
  useEffect(() => {
    time.current = usedTime;
  }, [usedTime]);

  useEffect(() => {
    return () => {
      if (timeInterval.current) clearInterval(timeInterval.current);
    };
  }, []);

  return {
    start,
    stop,
    reset,
    timeToken,
    usedTime,
  };
};
