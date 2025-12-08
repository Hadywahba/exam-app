// interface for All questions
export interface ExamQuestionsResponse {
  questions: Question[];
}

// interface for one question
export interface Question {
  _id: string;
  question: string;
  type: string;
  answers: Answer[];
  correct: string;
  subject: string | null;
  exam: Exam;
  createdAt: string;
}
// interface for Answer
export interface Answer {
  answer: string;
  key: string;
}
export interface Exam {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}
