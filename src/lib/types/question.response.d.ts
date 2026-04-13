// Root response
export interface ExamQuestionsApiResponse {
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  examId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  answers: Answer[];
}

// Answer
export interface Answer {
  id: string;
  text: string;
}
