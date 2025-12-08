import ExamHeader from '@/components/features/dashboard/diplomas/exam-header';
import React, { Suspense } from 'react';
import ContentExam from './_components/content-exam';
import Spinner from '@/components/loaders/Spinner';

export default async function page() {
  return (
    <main className="flex flex-col">
      {/* Header Section */}
      <div>
        <ExamHeader />
      </div>
      {/* Content Section */}
      <Suspense
        fallback={
          <div className="flex min-h-screen w-full items-center justify-center">
            <Spinner color="text-blue-600" />
          </div>
        }
      >
        <div className="mt-5 flex h-[61.875rem] flex-col gap-4 bg-white px-6 pt-6">
          <ContentExam />

          <section className="w-full bg-white py-3">
            <h4 className="mx-auto text-center text-base text-gray-600">
              End of list
            </h4>
          </section>
        </div>
      </Suspense>
    </main>
  );
}
