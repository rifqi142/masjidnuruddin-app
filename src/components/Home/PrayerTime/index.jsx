import React from "react";
import {
  getPrayerTimesResponse,
  getDateHijriahResponse,
} from "@/libs/api-libs";

import Image from "next/image";

const PrayerTime = async () => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.toISOString().split("T")[0];

  //  waktu sholat
  const prayerTimes = await getPrayerTimesResponse(currentYear, currentMonth);
  const prayerTimesToday = prayerTimes.find((prayerTimes) => {
    return prayerTimes.tanggal === currentDate;
  });

  // tanggal hijriah
  const dateHijriah = await getDateHijriahResponse(
    currentDay,
    currentMonth,
    currentYear
  );
  // mendapatkan hari
  const dayObject = new Date(currentDate);
  const dayOfWeek = dayObject.getDay();
  const daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  // function untuk menambahkan waktu adzan
  const addMinutes = (time, minutes) => {
    const timeParts = time.split(":");
    const hoursInMinutes = parseInt(timeParts[0]) * 60;
    const minutesInMinutes = parseInt(timeParts[1]) + minutes;
    const totalMinutes = hoursInMinutes + minutesInMinutes;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;
    return `${newHours}:${newMinutes}`;
  };

  // menambahkan 5 menit sesudah adzan menggunakan mapping
  const prayerTimesTodayWithAddMinutes = {
    ...prayerTimesToday,
    shubuh: addMinutes(prayerTimesToday?.shubuh, 5),
    dzuhur: addMinutes(prayerTimesToday?.dzuhur, 5),
    ashr: addMinutes(prayerTimesToday?.ashr, 5),
    magrib: addMinutes(prayerTimesToday?.magrib, 5),
    isya: addMinutes(prayerTimesToday?.isya, 5),
  };
  const dayName = daysOfWeek[dayOfWeek];
  return (
    <section className="w-full my-5 items-center mt-20 mb-20">
      <div className="mx-60 px-10 items-center justify-center">
        <h1 className="text-3xl font-bold">
          Waktu Sholat Harian Masjid Nurrudin
        </h1>
        <h3 className="text-lg mt-2 font-semibold">
          {dayName}, {prayerTimesToday.tanggal} &nbsp;
          <span className="text-green-150 text-base font-bold">
            ({dateHijriah.hijri.day}, {dateHijriah.hijri.month.en},{" "}
            {dateHijriah.hijri.year})
          </span>
        </h3>
      </div>
      <div className="flex flex-row mt-3 justify-center">
        <Image
          src="/masjid.jpg"
          alt="masjid"
          width={300}
          height={300}
          className="rounded-lg flex-none"
        />
        <div className="max-w-2xl mx-3">
          <div className="overflow-x-auto shadow-lg sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-green-10 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-10 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                      >
                        Nama Sholat
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-10 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                      >
                        Waktu Adzan
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-10 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                      >
                        Waktu Sholat
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-green-10 divide-y divide-gray-200">
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-base font-medium  whitespace-nowrap">
                        Subuh
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap">
                        {prayerTimesToday?.shubuh} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap">
                        {prayerTimesTodayWithAddMinutes?.shubuh} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20">
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap">
                        Dzuhur
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap">
                        {prayerTimesToday?.dzuhur} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap">
                        {prayerTimesTodayWithAddMinutes?.dzuhur} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Ashar
                      </td>
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {prayerTimesToday?.ashr}WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {prayerTimesTodayWithAddMinutes?.ashr} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Maghrib
                      </td>
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {prayerTimesToday?.magrib} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {prayerTimesTodayWithAddMinutes?.magrib} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Isya
                      </td>
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {prayerTimesToday?.isya} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {prayerTimesTodayWithAddMinutes?.isya} WIB
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTime;
