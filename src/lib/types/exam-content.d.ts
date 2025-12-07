export type ExamContentResponse = {
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  exams: {
    _id: string;
    title: string;
    duration: string;
    subject: string;
    numberOfQuestions: number;
    active: boolean;
    createdAt: string;
  }[];
};
