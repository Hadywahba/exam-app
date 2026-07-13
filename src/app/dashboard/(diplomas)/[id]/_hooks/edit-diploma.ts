import { useMutation } from '@tanstack/react-query';
import { EditDiploma } from '../edit/_action/edit-diploma';

export const EditDiplomas = (id: string) => {
  // Mutation
  const {} = useMutation({
    mutationFn: async () => {
      const payload = await EditDiploma(id);

      if (payload.status === false) {
        throw new Error(payload.message);
      }
      return payload;
    },
  });
};
