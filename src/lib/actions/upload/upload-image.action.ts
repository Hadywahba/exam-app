
import { getToken } from '@/lib/utility/manage-token';
export const uploadImage = async (file: File) => {
  // Tokent
  const token = await getToken();

  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token?.accesstoken}`,
    },
    body: formData,
  });

  const result: ApiResponse<UploadResponse> = await response.json();
  return result;
};
