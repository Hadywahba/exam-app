'use';
import { useCallback, useEffect, useRef, useState } from 'react';

export const UseExamTimer = (examid: string, initialSecond: number) => {
  const timeInterval = useRef<NodeJS.Timeout | null>(null);
  const time = useRef<number>(initialSecond);
  const [usedTime, setusedTime] = useState(() => {
    const savedTime = localStorage.getItem(`exam-time-${examid}`);
    return savedTime ? Number(savedTime) : initialSecond;
  });

  useEffect(() => {
    time.current = usedTime;
  }, [usedTime]);

  // start time
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

  // stop Time
  const stop = useCallback(() => {
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
      timeInterval.current = null;
    }
  }, []);

  // reset
  const reset = useCallback(() => {
    stop();
    time.current = initialSecond;
    setusedTime(initialSecond);
    localStorage.setItem(`exam-time-${examid}`, String(time.current));
  }, [stop, initialSecond, examid]);
  
  // time Token
  const timeToken = initialSecond - time.current;

  // Cleanup
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
