import { ExamContentResponse } from "../types/exam-content";


export const getExams = async () => {
  const response = await fetch('/api/exam', {
    cache: 'no-store',
  });
  const payload:ExamContentResponse = await response.json();

  return payload;
};
