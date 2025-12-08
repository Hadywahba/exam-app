import Link from 'next/link';
import React from 'react';
import { GetExamContent } from '../_hooks/get-exam-content';
import { Timer } from 'lucide-react';
export default async function ContentExam() {
  const { data, error } = await GetExamContent();
  return (
    <>
      {data?.exams.map((item) => (
        <Link
          key={item._id}
          href={{
            pathname: `/exam/${item._id}/question`,
            query: { title: item.title },
          }}
        >
          <section
            className="flex h-[5rem] flex-col bg-blue-50 px-4 hover:bg-blue-100 md:flex md:flex-row md:items-center md:justify-between"
            title={item.title}
          >
            {/* Left Part */}
            <div className="flex flex-col gap-1">
              <h1 className="text-base font-semibold text-blue-600 sm:text-lg md:text-xl">
                {item.title}
              </h1>

              <p className="text-xs font-normal text-gray-500 sm:text-sm">
                {item.numberOfQuestions} Questions{' '}
              </p>
            </div>
            {/* Right Part */}
            <div className="flex items-center gap-1">
               <Timer   className="text-gray-400 w-4 h-4 sm:w-6 sm:h-6" />
              <p className="text-xs font-normal text-gray-800 sm:text-sm">
                Duration: {item.duration} minutes{' '}
              </p>
            </div>
          </section>
        </Link>
      ))}
    </>
  );
}
