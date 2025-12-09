import React from 'react';
import QuestionHeader from './_components/question-header';
import QuestionContent from './_components/question-content';
import { GetQuestions } from './_hooks/get-questions';

import { AnswersProvider } from '@/components/providers/app/components/answer.provider';

export default async function page({
  params,
}: {
  params: { 'exam-id': string };
}) {
  const examId = params['exam-id'];

  const { data } = await GetQuestions(examId);
  console.log(data);
  const questions = data?.questions;
  return (
    <AnswersProvider examId={examId}>
      <main className="flex flex-col">
        {(!questions || questions.length === 0) && (
          <div className="flex items-center justify-center py-40">
            <p className="w-full bg-white py-20 text-center text-2xl text-gray-800">
              No questions found for this exam.
            </p>
          </div>
        )}
        {questions && questions.length > 0 && (
          <>
            {/* question header */}
            <div>
              <QuestionHeader examTitle={String(questions[0].exam.title)} />
            </div>
            {/* question content */}

            <div className="mt-5 flex flex-col gap-4 bg-white px-6 pt-6">
              <QuestionContent
                title={questions[0].exam.title}
                duration={questions[0].exam.duration}
                question={data}
                examId={examId}
              />
            </div>
          </>
        )}
      </main>
    </AnswersProvider>
  );
}
