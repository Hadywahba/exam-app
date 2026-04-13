export type SendAnswer = {
  examId: string;
  answers: {
    questionId: string;
    answerId: string;
  }[];
 startedAt:string
};

// Type الخاص بالـ response بعد الـ submit
export type QuestionsAnswerResponse = {
  submission: Submission;
  analytics: AnalyticsItem[];
};

// كل سؤال في الـ analytics
export type AnalyticsItem = {
  questionId: string;
  questionText: string;
  selectedAnswer: {
    id: string;
    text: string;
  };
  isCorrect: boolean;
  correctAnswer: {
    id: string;
    text: string;
  };
};

// Types قديمة لو عايز تصنفهم لـ correct/wrong
export type WrongQues = {
  QID: string;
  Question: string;
  inCorrectAnswer: string;
  correctAnswer: string;
};

export type CorrectQues = {
  QID: string;
  Question: string;
  correctAnswer: string;
};

export type Answers = {
  questionId: string;
  answerId: string;
};

export type Submission = {
  id: string;
  examId: string;
  examTitle: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  startedAt?: string; // اختياري لو مش موجود
  submittedAt: string;
};
