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
    <section className="w-full my-5 items-center mt-5 md:mt-20 mb-5 md:mb-20 p-4 md:p-0">
      <div className="flex flex-col md:items-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Waktu Sholat Harian Masjid Nurrudin
        </h1>
        <h3 className="text-base md:text-lg mt-2 font-semibold">
          {dayName}, {formattedDate}
        </h3>
        <p className="text-green-150 text-sm font-bold">
          ({dateHijriah.hijri.day}, {dateHijriah.hijri.month.en},{" "}
          {dateHijriah.hijri.year} H)
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center">
        <Image
          src="/masjid.jpg"
          alt="masjid"
          width={380}
          height={380}
          className="rounded-lg flex-none hidden lg:block"
        />
        <div className="w-full md:max-w-2xl md:mx-3">
          <div className="overflow-x-auto shadow-lg sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y table-fixed shadow-lg">
                  <thead className="bg-green-10">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 md:px-10 text-wrap text-base font-bold tracking-wider text-left text-green-30 uppercase items-center"
                      >
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src="/name-shalat.png"
                            alt="name-shalat"
                            width={40}
                            height={40}
                            className="rounded-lg mr-1"
                          />
                          <span className="">Nama Sholat</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3 md:px-10 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                      >
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src="/adzan.png"
                            alt="adzan"
                            width={40}
                            height={40}
                            className="rounded-lg mr-1"
                          />
                          <span>Waktu Adzan</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3 md:px-10 text-base font-bold tracking-wider text-left text-green-30 uppercase"
                      >
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src="/time-shalat.png"
                            alt="time-shalat"
                            width={40}
                            height={40}
                            className="rounded-lg mr-1"
                          />
                          <span>Waktu Sholat</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-green-10 divide-y">
                    <tr className="hover:bg-green-20 ">
                      <td className="py-4 px-1 md:px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none">
                          <Image
                            src="/sun-subuh.png"
                            alt="sun-subuh"
                            width={25}
                            height={25}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span className="px-2">Subuh</span>
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.shubuh} WIB
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        0{prayerTimesTodayWithAddMinutes?.shubuh} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20">
                      <td className="py-4 px-1 md:px-10 text-base font-medium  whitespace-nowrap flex items-center">
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
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.dzuhur} WIB
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesTodayWithAddMinutes?.dzuhur} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20">
                      <td className="py-4 px-1 md:px-10 text-base font-medium  whitespace-nowrap flex items-center">
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
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap dark:text-white text-center">
                        {prayerTimesToday?.ashr}WIB
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap dark:text-white text-center">
                        {prayerTimesTodayWithAddMinutes?.ashr} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20">
                      <td className="py-4 px-1 md:px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none pr-2">
                          <Image
                            src="/sun-maghrib.png"
                            alt="sun-maghrib"
                            width={20}
                            height={20}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span className="px-1">Maghrib</span>
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.magrib} WIB
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesTodayWithAddMinutes?.magrib} WIB
                      </td>
                    </tr>
                    <tr className="hover:bg-green-20">
                      <td className="py-4 px-1 md:px-10 text-base font-medium  whitespace-nowrap flex items-center">
                        <div className="flex-none pr-2">
                          <Image
                            src="/sun-isya.png"
                            alt="sun-isya"
                            width={20}
                            height={20}
                            className="rounded-lg mr-1"
                          />
                        </div>
                        <span className="px-2">Isya</span>
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.isya} WIB
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
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
