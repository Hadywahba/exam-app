export const getProfile = async () => {
  const res = await fetch('/api/profile', {
    cache: 'no-store',
  });

  const data = await res.json();
  return data;
};
