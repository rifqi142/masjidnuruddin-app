export const getAlquranResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`
  );

  const alquran = await response.json();
  return alquran;
};

export const getPrayerTimesResponse = async (currentYear, currentMonth) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL2}/${currentYear}/${currentMonth}.json`
  );

  const prayerTimes = await response.json();
  return prayerTimes;
};
