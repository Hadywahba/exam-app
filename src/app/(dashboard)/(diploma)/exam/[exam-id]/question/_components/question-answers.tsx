'use client';
import React, { useState } from 'react';

export default function QuestionAnswers() {
  const [value, setValue] = useState('option-one');

  const options = [
    { id: 'option-one', label: 'Option One' },
    { id: 'option-two', label: 'Option Two' },
    { id: 'option-three', label: 'Option Three' },
    { id: 'option-four', label: 'Option Four' },
  ];

  return (
    <form>
      <div className="space-y-2">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setValue(option.id)}
            className={`flex cursor-pointer items-center space-x-2   p-4 ${value === option.id ? 'bg-blue-100' : 'bg-gray-50  hover:bg-gray-100'} `}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${value === option.id ? "border-blue-600" :" border-gray-400"}  `}
            >
              {value === option.id && (
                <div className="h-3 w-3 rounded-full bg-blue-500" />
              )}
            </div>
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </form>
  );
}
