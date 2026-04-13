import ExamHeader from '@/components/features/dashboard/diplomas/exam-header';
import React, { Suspense } from 'react';
import ContentExam from './_components/content-exam';
import Spinner from '@/components/loaders/Spinner';

export default async function page({ params }: { params: { exam: string } }) {
  // Get params
  const diplomaExamId = params['exam'];

  return (
    <main className="flex h-full flex-col">
      {/* Header Section */}
      <div>
        <ExamHeader />
      </div>

      {/* Content Section */}
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <Spinner color="text-blue-600" />
          </div>
        }
      >
        <div className="mt-5 flex h-[61.875rem] flex-col gap-4 bg-white px-6 pt-6 ">
          <ContentExam examId={diplomaExamId} />
        </div>
      </Suspense>
    </main>
  );
}
