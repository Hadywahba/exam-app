'use client';
import React from 'react';
export default function QuestionTimer({ usedTime , totalTime }: { usedTime: number , totalTime: number}) {


  // Variables
  const radius = 29;
  const circumference = 2 * Math.PI * radius;
  const progress = (usedTime / totalTime) * circumference;



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
        {Math.floor(usedTime / 60)}:{String(usedTime % 60).padStart(2, '0')}
      </span>
    </div>
  );
}
