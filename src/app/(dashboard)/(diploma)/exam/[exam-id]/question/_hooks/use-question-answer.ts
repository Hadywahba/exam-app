import { useMutation } from '@tanstack/react-query';
import { QuestionsAnswerResponse, SendAnsewer } from '../_types/answer';
import { QuestionsAnswers } from '../_action/answer.action';
import { useContext } from 'react';
import { CorrectAnswers } from '@/components/providers/app/components/correct-answer.provider';

export const UseQuestionAnswers = () => {
  // Context
  const { answersState } = useContext(CorrectAnswers)!;
  // Mutation 
  const {
    mutate: Ans,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: SendAnsewer) => {
      const payload = await QuestionsAnswers(data);

      if ('code' in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: (data: QuestionsAnswerResponse) => {
      answersState(data)
    },
  });
  return {
    Ans,
    error,
    isPending,
  };
};
