'use client';
import { useTimer } from '@/hooks/use-timer';
import { getSeconds } from '@/lib/utility/convert-minutes-second';
import React from 'react';

export default function QuestionTimer({ duration }: { duration: number }) {
    // convert minutes from api to seconds
  const seconds=getSeconds(duration)
  // hook
  const { timeLeft } = useTimer({ initialSeconds: seconds });

  // Variables
  const radius = 29;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / seconds) * circumference;



  return (
    <div className="relative flex h-[68px] w-[68px] items-center justify-center">
      {/* SVG Circle Progress */}
      <svg className="h-full w-full -rotate-90 transform">
        {/* Back circle */}
        <circle
          cx="35"
          cy="35"
          r={radius}
          stroke="#BFDBFE"
          strokeWidth="8"
          fill="none"
        />

        {/* Progress circle */}
        <circle
          cx="35"
          cy="35"
          r={radius}
          stroke="#2563EB"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>

      {/* Time Text */}
      <span className="absolute text-sm font-semibold text-black">
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
      </span>
    </div>
  );
}
