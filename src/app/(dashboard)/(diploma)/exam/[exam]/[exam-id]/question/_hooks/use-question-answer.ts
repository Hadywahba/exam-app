import { useMutation } from '@tanstack/react-query';
import { QuestionsAnswerResponse, SendAnswer } from '../_types/answer';
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
    mutationFn: async (data: SendAnswer) => {
      const payload = await QuestionsAnswers(data);

      if (payload.status === false) {
        throw new Error(payload.message);
      }

      // Extract only submission and analytics from the response

      return payload.payload as QuestionsAnswerResponse;
    },
    onSuccess: (data) => {
      answersState(data);
      console.log('Answers saved to context and localStorage:', data);
    },
  });
  return {
    Ans,
    error,
    isPending,
  };
};
