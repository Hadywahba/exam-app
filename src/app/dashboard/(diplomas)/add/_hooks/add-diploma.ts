

import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { AddFormFields } from '@/lib/schemas/admin-dashboard/add-diploma.schema';
import { AddDiploma } from '../_action/add-diploma';

export const UseAddsDiplomas = () => {
  // Toast
  const { toast } = useToast();
  const router = useRouter();

  // Mutation
  const {
    mutate: AddDiplomass,
    error: AddErrorDiplom,
    isPending: AddIsPendingDiplom,
  } = useMutation({
    mutationKey: ['AddDiploma'],
    mutationFn: async (data: AddFormFields) => {
      const payload = await AddDiploma(data);

      if (payload.status === false) {
        throw new Error(payload.message);
      }
      return payload;
    },
    onSuccess: () => {
      toast({
        title: '✅ Diploma Added Successful',
        variant: 'success',
      });
      router.refresh();
    },
  });

  return { AddDiplomass, AddErrorDiplom, AddIsPendingDiplom };
};
