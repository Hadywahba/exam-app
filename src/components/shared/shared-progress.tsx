'use client';

import React from 'react';
import { RegisterSteps } from '@/lib/types/register-steps';

interface ProgressProps {
  step: RegisterSteps;
  steps: string[];
}

export default function SharedProgress({ step, steps }: ProgressProps) {
  const currentStepIndex = steps.indexOf(step as string) + 1;

  // نسبة التقدم بشكل dynamic
  const progressWidth = `${(currentStepIndex / steps.length) * 100}%`;

  return (
    <div className="relative mb-8 mt-4 flex w-full flex-col gap-4">
      {/* Progress Line */}
      <div className="relative h-2 w-full rounded-full bg-zinc-200">
        <div
          className="dark:bg-softpink-300 absolute left-0 top-0 h-2 origin-left rounded-full bg-red-600 transition-all duration-500"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Steps */}
      <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-1">
        {steps.map((s, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStepIndex;

          return (
            <div key={s} className="flex flex-col items-center gap-2">
              {/* Circle */}
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-500 ${
                  isActive
                    ? 'dark:border-softpink-300 dark:bg-softpink-300 border-red-600 bg-red-600 text-white dark:text-zinc-800'
                    : 'border-zinc-300 bg-zinc-200 text-gray-500'
                }`}
              >
                {isActive ? '✓' : stepNumber}
              </div>

              {/* Label */}
              <span
                className={`text-xs font-medium ${
                  isActive
                    ? 'dark:text-softpink-300 text-red-600'
                    : 'text-gray-400'
                }`}
              >
                {s}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
