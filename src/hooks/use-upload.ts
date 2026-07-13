import { uploadImage } from '@/lib/actions/upload/upload-image.action';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const UseUpload = () => {
  // Toast
  const { toast } = useToast();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (file: File) => {
      const payload = await uploadImage(file);

      if (payload.status === false) {
        throw new Error(payload.message);
      }

      return payload;
    },

    onError: (error) => {
      toast({
        title: error.message,
        variant: 'destructive',
      });
    },
    onSuccess: () => {
      toast({
        title: '✅ Picture Uploaded Successful',
        variant: 'success',
      });
    },
  });

  return {
    UploadImages: mutate,
    isPending,
    error,
  };
};
