import React from 'react';
import QuestionHeader from './_components/question-header';
import QuestionContent from './_components/question-content';
import { GetQuestions } from './_hooks/get-questions';
import { AnswersProvider } from '@/components/providers/app/components/answer.provider';
import { GetExamContent } from '../../_hooks/get-exam-content';
import { Exam } from '@/lib/types/exam-content';

export default async function page({
  params,
}: {
  params: { 'exam-id': string; exam: string };
}) {
  // Get params
  const examId = params['exam-id'];
  const diplomaExamId = params['exam'];

  // Get Exam questions data from server
  const { data } = await GetQuestions(examId);
  const { examContentData } = await GetExamContent(diplomaExamId);

  // Variables
  const questions = data?.questions;
  const exams = examContentData?.data || [];

  const currentExam = exams.find((exam: Exam) => exam.id === examId);

  const duration = currentExam?.duration;
  const examTitle = currentExam?.diploma.title;
  return (
    <AnswersProvider examId={examId} questions={questions!}>
      <main className="flex flex-col">
        {/* No question in subject */}
        {(!questions || questions.length === 0) && (
          <div className="flex items-center justify-center py-20">
            <p className="text-sm font-medium text-gray-500 sm:text-lg md:text-xl">
              No questions found for this exam.
            </p>
          </div>
        )}
        {questions && questions.length > 0 && (
          <>
            {/* question header */}
            <div>
              <QuestionHeader examTitle={String(examTitle)} />
            </div>
            {/* question content */}

            <div className="mt-5 flex flex-col gap-4 bg-white px-6 pt-6">
              <QuestionContent
                title={questions[0].text}
                duration={duration!}
                question={data}
                examId={examId}
                examTitle={String(examTitle)}
              />
            </div>
          </>
        )}
      </main>
    </AnswersProvider>
  );
}
