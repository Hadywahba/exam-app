import { useEffect, useRef, useState } from 'react';

interface InitialSeconds {
  initialSeconds: number;
}
export const useTimer = ({ initialSeconds }: InitialSeconds) => {
  // Get the start time from localStorage or use the current time if not available
  const savedStartTime = Number(localStorage.getItem('timer')) || Date.now();

  // Calculate how many seconds have passed since the start time
  const past = Math.floor((Date.now() - savedStartTime) / 1000);

  /**  Determine the initial time left:
   * If the past time is greater than or equal to initialSeconds, start from full time
   * Otherwise, continue from the remaining time
   */
  const initialTimeLeft =
    past >= initialSeconds ? initialSeconds : initialSeconds - past;

  //Store the start time in a ref
  const startTimeRef = useRef(
    past >= initialSeconds ? Date.now() : savedStartTime,
  );
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    localStorage.setItem('timer', startTimeRef.current.toString());
    const interval = setInterval(() => {
      const pastTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const newTime = initialSeconds - pastTime;
      setTimeLeft(newTime > 0 ? newTime : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [initialSeconds]);

  // resetTimer is a function that used to reset time again
  const resetTimer = () => {
    startTimeRef.current = Date.now();
    localStorage.setItem('timer', startTimeRef.current.toString());
    setTimeLeft(initialSeconds);
  };

  return { timeLeft, resetTimer };
};
