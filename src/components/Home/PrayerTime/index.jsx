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

  // mendapatkan bulan
  const month = dayObject.getMonth();
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const monthName = months[month];

  const formattedDate = `${currentDay} ${monthName}, ${currentYear}`;

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
          {dayName}, {formattedDate} &nbsp;
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
                        <div className="flex flex-col items-center">
                          <Image
                            src="/name-shalat.png"
                            alt="name-shalat"
                            width={40}
                            height={40}
                            className="rounded-lg mr-1 transform scaleX(-1)"
                          />
                          <span>Nama Sholat</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3 px-10 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/adzan.png"
                            alt="adzan"
                            width={40}
                            height={40}
                            className="rounded-lg mr-1 transform scaleX(-1)"
                          />
                          <span>Waktu Adzan</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-10 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/time-shalat.png"
                            alt="time-shalat"
                            width={40}
                            height={40}
                            className="rounded-lg mr-1 transform scaleX(-1)"
                          />
                          <span>Waktu Sholat</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-green-10 divide-y divide-gray-200">
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none pr-2">
                          <Image
                            src="/sun-subuh.png"
                            alt="sun-subuh"
                            width={30}
                            height={30}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span>Subuh</span>
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.shubuh} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesTodayWithAddMinutes?.shubuh} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20">
                      <td className="py-4 px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none pr-2">
                          <Image
                            src="/sun-dzuhur.png"
                            alt="sun-dzuhur"
                            width={25}
                            height={25}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span>Dzuhur</span>
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.dzuhur} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesTodayWithAddMinutes?.dzuhur} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none pr-2">
                          <Image
                            src="/sun-ashr.png"
                            alt="sun-ashar"
                            width={25}
                            height={25}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span>Ashar</span>
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap dark:text-white text-center">
                        {prayerTimesToday?.ashr}WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap dark:text-white text-center">
                        {prayerTimesTodayWithAddMinutes?.ashr} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none pr-2">
                          <Image
                            src="/sun-maghrib.png"
                            alt="sun-maghrib"
                            width={20}
                            height={20}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span>Maghrib</span>
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.magrib} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesTodayWithAddMinutes?.magrib} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20 dark:hover:bg-gray-700">
                      <td className="py-4 px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none pr-2">
                          <Image
                            src="/sun-isya.png"
                            alt="sun-isya"
                            width={20}
                            height={20}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span>Maghrib</span>
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.isya} WIB
                      </td>
                      <td className="py-4 px-10 text-base font-medium whitespace-nowrap text-center">
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
