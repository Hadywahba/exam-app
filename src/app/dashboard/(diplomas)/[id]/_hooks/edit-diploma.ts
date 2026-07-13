import { useMutation } from '@tanstack/react-query';
import { EditDiploma } from '../edit/_action/edit-diploma';
import { EditFormFields } from '@/lib/schemas/admin-dashboard/edit-diploma.schema';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export const EditDiplomas = (id: string) => {
  // Toast
  const { toast } = useToast();
  const router =useRouter()

  // Mutation
  const {
    mutate: EditDiplomass,
    error: EditErrorDiplom,
    isPending: EditIsPendingDiplom,
  } = useMutation({
    mutationKey: ['EditDiploma'],
    mutationFn: async (data: EditFormFields) => {
      const payload = await EditDiploma(id, data);

      if (payload.status === false) {
        throw new Error(payload.message);
      }
      return payload;
    },
    onSuccess: () => {
      toast({
        title: '✅ Diploma Edited Successful',
        variant: 'success',
      });
      router.refresh()
    },
  });

  return { EditDiplomass, EditErrorDiplom, EditIsPendingDiplom };
};
