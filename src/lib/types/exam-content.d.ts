export type ExamContentResponse = {
  metadata: MetaData;
  data: Exam[];
};

export interface Exam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  diplomaId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  diploma: Diploma;
  _count: {
    questions: number;
  };
}

export interface Diploma {
  id: string;
  title: string;
}


export interface ExamsResponse {
  data: Exam[];
  metadata: MetaData;
}