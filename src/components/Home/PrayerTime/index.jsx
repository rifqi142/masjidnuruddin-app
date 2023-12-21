import React from "react";
import { getPrayerTimesResponse } from "@/libs/api-libs";

const PrayerTime = async () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.toISOString().split("T")[0];

  const prayerTimes = await getPrayerTimesResponse(currentYear, currentMonth);
  const prayerTimesToday = prayerTimes.find((prayerTimes) => {
    return prayerTimes.tanggal === currentDate;
  });
  return (
    <section className="w-full my-5">
      <div className="px-5">
        <h1 className="text-2xl font-bold">Waktu Sholat Hari ini di Jakarta</h1>
        <h3 className="text-xl"></h3>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="overflow-x-auto shadow-lg sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-center text-lg">
                Tanggal {prayerTimesToday.tanggal}
              </h2>
            </header>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                    >
                      Nama Sholat
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                    >
                      Waktu Sholat
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Subuh
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {prayerTimesToday?.shubuh} WIB
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Dzuhur
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {prayerTimesToday?.dzuhur} WIB
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Ashar
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {prayerTimesToday?.ashr}WIB
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Maghrib
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {prayerTimesToday?.magrib} WIB
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Isya
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {prayerTimesToday?.isya} WIB
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTime;
