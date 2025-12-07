import ExamHeader from '@/components/features/dashboard/diplomas/exam-header';
import React from 'react';
import ContentExam from './_components/content-exam';
import { GetExamContent } from './_hooks/get-exam-content';

export default async function page() {
  const { data, error } = await GetExamContent();
  return (
    <main className="flex flex-col">
      {/* Header Section */}
      <div>
        <ExamHeader />
      </div>
      {/* Content Section */}
      <div className=" mt-5 bg-white h-screen px-6 pt-6 flex flex-col gap-4">
        {data?.exams.map((items) => {
          return (
            <ContentExam
              key={items._id}
              title={items.title}
              duration={items.duration}
              numberOfQuestions={items.numberOfQuestions}
            />
          );
        })}
        <section className='w-full py-3 '>
        <h4 className='text-gray-600  text-center mx-auto text-base'>End of list</h4>
    </section>
      </div>
    </main>
  );
}
