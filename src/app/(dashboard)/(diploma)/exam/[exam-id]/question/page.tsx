import React from 'react';
import QuestionHeader from './_components/question-header';
import QuestionContent from './_components/question-content';

export default function page() {
  const examtitle = 'hady wahba';
  return (
    <main className="flex flex-col">
      {/* question header */}
      <div>
        <QuestionHeader examTitle={examtitle} />
      </div>
      {/* question content */}

      <div className="mt-5 flex h-[61.875rem] flex-col gap-4 bg-white px-6 pt-6">
        <QuestionContent  />
      </div>
    </main>
  );
}
