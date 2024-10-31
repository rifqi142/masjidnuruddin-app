"use client";
import React, { useEffect, useState } from "react";
import {
  getPrayerTimesResponse,
  getDateHijriahResponse,
} from "@/libs/api-libs";
import Image from "next/image";

const PrayerTime = () => {
  const [prayerTimesToday, setPrayerTimesToday] = useState({});
  const [dateHijriah, setDateHijriah] = useState({});
  const [dayName, setDayName] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const today = new Date();
      const currentDay = today.getDate();
      const currentYear = today.getFullYear();
      const currentMonth = (today.getMonth() + 1).toString().padStart(2, "0");
      const currentDate = today.toISOString().split("T")[0];

      const prayerTimes = await getPrayerTimesResponse(
        currentYear,
        currentMonth
      );
      const schedulePrayer = prayerTimes?.data?.jadwal;

      const prayerTimesToday = schedulePrayer?.find(
        (item) => item.date === currentDate
      );
      const filteredPrayerTimes = {
        subuh: prayerTimesToday?.subuh,
        dzuhur: prayerTimesToday?.dzuhur,
        ashar: prayerTimesToday?.ashar,
        maghrib: prayerTimesToday?.maghrib,
        isya: prayerTimesToday?.isya,
      };

      const dateHijriah = await getDateHijriahResponse(
        currentDay,
        currentMonth,
        currentYear
      );

      const daysOfWeek = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];
      const dayName = daysOfWeek[today.getDay()];

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
      const monthName = months[today.getMonth()];
      const formattedDate = `${currentDay} ${monthName}, ${currentYear}`;

      setPrayerTimesToday(filteredPrayerTimes);
      setDateHijriah(dateHijriah);
      setDayName(dayName);
      setFormattedDate(formattedDate);
    };

    fetchPrayerTimes();
  }, []);

  const addMinutes = (time, minutes) => {
    if (!time) return "";
    const [hours, mins] = time.split(":").map(Number);
    const newMinutes = hours * 60 + mins + minutes;
    const newHours = Math.floor(newMinutes / 60);
    const remainingMinutes = newMinutes % 60;
    return `${newHours.toString().padStart(2, "0")}:${remainingMinutes
      .toString()
      .padStart(2, "0")}`;
  };

  const prayerTimesTodayWithAddMinutes = {
    ...prayerTimesToday,
    subuh: addMinutes(prayerTimesToday?.subuh, 5),
    dzuhur: addMinutes(prayerTimesToday?.dzuhur, 5),
    ashar: addMinutes(prayerTimesToday?.ashar, 5),
    maghrib: addMinutes(prayerTimesToday?.maghrib, 5),
    isya: addMinutes(prayerTimesToday?.isya, 5),
  };

  const prayerIcons = {
    subuh: "/sun-subuh.png",
    dzuhur: "/sun-dzuhur.png",
    ashar: "/sun-ashr.png",
    maghrib: "/sun-maghrib.png",
    isya: "/sun-isya.png",
  };

  return (
    <section className="w-full my-5 items-center mt-5 md:mt-20 mb-5 md:mb-20 p-4 md:p-0">
      <div className="flex flex-col md:items-center">
        <h1
          className="text-2xl md:text-3xl font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Waktu Sholat Harian Masjid Nurrudin
        </h1>
        <h3
          className="text-base md:text-lg mt-2 font-semibold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {dayName}, {formattedDate} M
        </h3>
        <p
          className="text-green-150 text-sm font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="linear"
        >
          ({dateHijriah?.hijri?.day}, {dateHijriah?.hijri?.month?.en},{" "}
          {dateHijriah?.hijri?.year} H)
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center">
        <Image
          src="/masjid.jpg"
          alt="masjid"
          width={380}
          height={380}
          className="rounded-lg flex-none hidden lg:block"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <div
          className="w-full md:max-w-2xl md:mx-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="overflow-x-auto shadow-lg sm:rounded-lg">
            <table className="min-w-full divide-y table-fixed shadow-lg">
              <thead className="bg-green-10">
                <tr>
                  <th className="py-3 md:px-10 text-base font-bold text-green-30 uppercase items-center">
                    <div className="flex flex-col items-center text-center">
                      <Image
                        src="/name-shalat.png"
                        alt="name-shalat"
                        width={40}
                        height={40}
                        className="rounded-lg mr-1"
                      />
                      <span>Nama Sholat</span>
                    </div>
                  </th>
                  <th className="py-3 md:px-10 text-base font-bold text-green-30 uppercase">
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
                  <th className="py-3 md:px-10 text-base font-bold text-green-30 uppercase">
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
                {["subuh", "dzuhur", "ashar", "maghrib", "isya"].map(
                  (prayer) => (
                    <tr key={prayer} className="hover:bg-green-20">
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap flex items-center">
                        <Image
                          src={prayerIcons[prayer]}
                          alt={`${prayer} icon`}
                          width={25}
                          height={25}
                          className="rounded-lg mr-2"
                        />
                        <span>
                          {prayer.charAt(0).toUpperCase() + prayer.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesToday?.[prayer]} WIB
                      </td>
                      <td className="py-4 px-1 md:px-10 text-base font-medium whitespace-nowrap text-center">
                        {prayerTimesTodayWithAddMinutes?.[prayer]} WIB
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTime;
