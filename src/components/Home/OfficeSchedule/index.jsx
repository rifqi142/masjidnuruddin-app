"use client";
import React, { useEffect, useState } from "react";
import { prayerOfficer } from "@/libs/schedule-office";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Parallax } from "swiper/modules";

const OfficeSchedule = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      // Ganti nilai 768 dengan lebar layar yang sesuai untuk beralih ke tata letak ponsel
      const newSlidesPerView = window.innerWidth >= 768 ? 3 : 1;
      setSlidesPerView(newSlidesPerView);
    };

    // Panggil fungsi saat komponen dimuat dan lebar layar berubah
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []); // Empty dependency array agar useEffect hanya dijalankan sekali saat komponen dimuat

  return (
    <section className="w-full">
      <div className="p-4">
        <div className="flex justify-center items-center">
          <h2 className="text-base border-2 rounded-full px-2 py-2 border-green-30 bg-green-10 text-green-30 font-semibold">
            Petugas Harian Imam Sholat Fardu
          </h2>
        </div>
        <div className="mt-5 h-20 md:h-30">
          <Swiper
            slidesPerView={slidesPerView}
            grabCursor={true}
            rewind={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Parallax]}
            parallax={true}
          >
            {prayerOfficer.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-row gap-3 w-full border-2 rounded-xl border-green-30 py-2 px-2 bg-green-10">
                  <Image
                    src={item.photoProfile}
                    alt="Office Prayer Profile"
                    width={50}
                    height={50}
                    className="rounded-full parallax-bg"
                    data-swiper-parallax="-23%"
                  />
                  <div className="px-5 w-max">
                    <h2 className="text-base font-semibold text-green-30">
                      {item.title}
                    </h2>
                    <h2 className="text-base font-medium">{item.officer}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OfficeSchedule;
