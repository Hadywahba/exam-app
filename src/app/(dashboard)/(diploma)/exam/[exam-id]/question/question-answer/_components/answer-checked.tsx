'use client';
import { CorrectAnswers } from '@/components/providers/app/components/correct-answer.provider';
import { ExamQuestionsResponse } from '@/lib/types/question.response';
import React, { useContext } from 'react';

export default function AnswerChecked({
  question,
}: {
  question: ExamQuestionsResponse;
}) {
  // context
  const { answers } = useContext(CorrectAnswers)!;

  // Variable it used to compare data came from (GetApi) and data saved it context
  const allData = question.questions.map((q) => {
    // select correct questions
    const correct = answers?.correctQuestions.find((cq) => cq.QID === q._id);

    // select Wrong questions
    const wrong = answers?.WrongQuestions.find((cq) => cq.QID === q._id);

    // Select all type of answers (correct and wrong)
    const yourAnswerKey = wrong
      ? wrong.inCorrectAnswer
      : correct
        ? correct.correctAnswer
        : null;

    // Select correct answers only
    const correctAnswerKey = wrong
      ? wrong.correctAnswer
      : correct
        ? correct.correctAnswer
        : null;

    //check about all type of answers of one question
    const yourAnswerText = q.answers.find(
      (a) => a.key === yourAnswerKey,
    )?.answer;

    // check about correct answer of one question
    const correctAnswerText = q.answers.find(
      (a) => a.key === correctAnswerKey,
    )?.answer;

    return {
      id: q._id,
      ques: q.question,
      correctAnswer: correctAnswerText,
      yourAnswer: yourAnswerText,
      isCorrect: !!correct,
      yourAnswerKey: yourAnswerKey,
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
            {q.yourAnswerKey === 'c' && (
              <span className="text-xs text-gray-500 sm:text-sm">
                (you didnt answer this question)
              </span>
            )}
          </div>
          {q.yourAnswer !== q.correctAnswer && q.yourAnswerKey !== 'c' && (
            <div className="flex items-center gap-2 bg-red-50 p-4 text-gray-800">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-[.0625rem] border-red-600 bg-white">
                <span className="h-3 w-3 rounded-full bg-red-600"></span>
              </span>

              <p className={` `}> {q.yourAnswer}</p>
            </div>
          )}
          <div className="flex items-center gap-2 bg-emerald-50 p-4 text-gray-800">
            <span className="h-5 w-5 rounded-full border-[.0625rem] border-emerald-600 bg-white"></span>
            <p className="">{q.correctAnswer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
