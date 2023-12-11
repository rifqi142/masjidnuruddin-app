export const getAlquranResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`
  );

  const anime = await response.json();
  return anime;
};
