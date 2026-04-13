'use client';
import { CorrectAnswers } from '@/components/providers/app/components/correct-answer.provider';
import { ExamQuestionsApiResponse } from '@/lib/types/question.response';
import React, { useContext } from 'react';

export default function AnswerChecked({
  question,
}: {
  question: ExamQuestionsApiResponse;
}) {
  const { answers } = useContext(CorrectAnswers)!;
  const analyticss = answers?.analytics ?? [];

  const allData = question.questions.map((q) => {
    const analyticsItem = analyticss.find((a) => a.questionId === q.id);

    return {
      id: q.id,
      ques: q.text,
      correctAnswer: analyticsItem?.correctAnswer.text ?? null,
      yourAnswer: analyticsItem?.selectedAnswer.text ?? null,
      isCorrect: analyticsItem?.isCorrect ?? false,
      notAnswered: !analyticsItem,
    };
  });

  return (
    <div className="flex flex-col gap-4 border-[.0625rem] border-gray-100">
      {allData.map((q) => (
        <div key={q.id} className="flex flex-col gap-3 rounded bg-white p-4">
          <div>
            <h2 className="text-sm font-semibold text-blue-600 sm:text-base md:text-lg lg:text-xl">
              {q.ques}
            </h2>
            {q.notAnswered && (
              <span className="text-xs text-gray-500 sm:text-sm">
                (you didn&apos;t answer this question)
              </span>
            )}
          </div>

          {!q.isCorrect && !q.notAnswered && (
            <div className="flex items-center gap-2 bg-red-50 p-4 text-gray-800">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-[.0625rem] border-red-600 bg-white">
                <span className="h-3 w-3 rounded-full bg-red-600"></span>
              </span>
              <p>{q.yourAnswer}</p>
            </div>
          )}

          <div className="flex items-center gap-2 bg-emerald-50 p-4 text-gray-800">
            <span className="h-5 w-5 rounded-full border-[.0625rem] border-emerald-600 bg-white"></span>
            <p>{q.correctAnswer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
