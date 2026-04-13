import React from 'react';
import CorrectAnswerContent from './_components/correct-answer-content';
import { GetQuestions } from '../_hooks/get-questions';
import CorrectAnswerHeader from './_components/correct-answer-header';
import { GetExamContent } from '../../../_hooks/get-exam-content';
import { Exam } from '@/lib/types/exam-content';

export default async function page({
  params,
}: {
  params: { 'exam-id': string; exam: string };
}) {
  // Get params
  const examId = params['exam-id'];
  const examContentId = params['exam'];

  // Get data from server
  const { data } = await GetQuestions(examId);
  const { examContentData } = await GetExamContent(examContentId);

  // Variable
  const questions = data?.questions;
  const exams = examContentData?.data || [];
  const currentExam = exams.find((exam: Exam) => exam.id === examId);
  const examTitle = currentExam?.diploma.title;
  return (
    <>
      {questions && questions.length > 0 && (
        <main className="flex flex-col">
          {/* Answer header */}
          <div>
            <CorrectAnswerHeader  />
          </div>
          <div className="mt-5 flex flex-col gap-4 bg-white px-6 pt-6">
            <CorrectAnswerContent
              question={data}
              examId={examId}
              examContentId={examContentId}
              examTitle={examTitle!}
            />
          </div>
        </main>
      )}
    </>
  );
}
