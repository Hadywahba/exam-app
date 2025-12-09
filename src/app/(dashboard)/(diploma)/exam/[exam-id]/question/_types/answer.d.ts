export type SendAnsewer ={
    answers:{
        questionId:string;
        correct:string;
    }[]
    time:number
}

export type QuestionsAnswerResponse ={
correct:number ;
wrong:number ;
total:string;
WrongQuestions:WrongQues[]
correctQuestions:CorrectQues[]
}

export type WrongQues ={
QID:string;
Question:string;
inCorrectAnswer:string;
correctAnswer:string;
}
export type CorrectQues ={
QID:string;
Question:string;
correctAnswer:string;
}

export type Answers = {
  questionId: string;
  correct: string;
};