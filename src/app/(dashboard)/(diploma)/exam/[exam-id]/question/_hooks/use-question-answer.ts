import { useMutation } from '@tanstack/react-query';
import { SendAnsewer } from '../_types/answer';
import { QuestionsAnswers } from '../_action/answer.action';

export const UseQuestionAnswers = () => {
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
    onSuccess: (data: SendAnsewer) => {
      console.log(data);
    },
  });
  return {
    Ans,
    error,
    isPending,
  };
};
