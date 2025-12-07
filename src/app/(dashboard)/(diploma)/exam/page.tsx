import ExamHeader from '@/components/features/dashboard/diplomas/exam-header';
import React from 'react';
import ContentExam from './_components/content-Exam';

export default function page() {
  return (
    <main className="flex flex-col">
      {/* Header Section */}
      <div>
        <ExamHeader />
      </div>
      {/* Content Section */}
      <ContentExam />
    </main>
  );
}
