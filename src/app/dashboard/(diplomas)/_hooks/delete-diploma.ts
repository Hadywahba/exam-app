import { DeleteDiploma } from '@/lib/actions/admin-dashboard/delete-diploma.action';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const DeleteDiplomas = (id: string) => {
  // Toast
  const { toast } = useToast();

  const {
    mutate: deleteDiplom,
    error: deleteErrorDiplom,
    isPending: deleteIsPendingDiplom,
  } = useMutation({
    mutationFn: async () => {
      const payload = await DeleteDiploma(id);

      if (payload.status === false) {
        throw new Error(payload.message);
      }
      return payload;
    },
    onSuccess: () => {
      toast({
        title: '✅ Diploma Deleted Successful',
        variant: 'success',
      });
    },
  });
  return {
    deleteDiplom,
    deleteErrorDiplom,
    deleteIsPendingDiplom,
  };
};
