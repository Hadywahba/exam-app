export const getExams = async () => {
  const response = await fetch('/api/exam', {
    cache: 'no-store',
  });

  const result = await response.json();
  return result;
};
