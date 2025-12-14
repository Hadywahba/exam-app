import React from 'react';
import CorrectAnswerContent from './_components/correct-answer-content';
import { GetQuestions } from '../_hooks/get-questions';
import CorrectAnswerHeader from './_components/correct-answer-header';

export default async function page({
  params,
}: {
  params: { 'exam-id': string };
}) {
  // Get params
  const examId = params['exam-id'];

  // Get data from server
  const { data } = await GetQuestions(examId);

  // Variable
  const questions = data?.questions;
  return (
    <>
      {questions && questions.length > 0 && (
        <main className="flex flex-col">
          {/* Answer header */}
          <div>
            <CorrectAnswerHeader examTitle={String(questions[0].exam.title)} />
          </div>
          <div className="mt-5 flex flex-col gap-4 bg-white px-6 pt-6">
            <CorrectAnswerContent question={data} examId={examId} />
          </div>
        </main>
      )}
    </>
  );
}
