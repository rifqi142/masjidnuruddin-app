"use client";
import React from "react";
import { prayerOfficer } from "@/libs/schedule-office";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Parallax } from "swiper/modules";

const OfficeSchedule = () => {
  return (
    <section className="w-full">
      <div className="p-20">
        <div className="flex justify-center items-center">
          <h2 className="text-xl border-2 rounded-full px-2 py-2 border-green-30 font-semibold">
            Petugas Harian Imam Sholat Fardu
          </h2>
        </div>
        <div className="mt-10 swiper2">
          <Swiper
            slidesPerView={3}
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
            responsive={{
              // Menampilkan 3 slide ketika lebar layar lebih besar atau sama dengan 768px (ukuran perangkat tablet)
              768: {
                slidesPerView: 3,
              },
            }}
            className=""
          >
            {prayerOfficer.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-row gap-3 w-full border-2 rounded-xl border-green-30 py-2 px-2">
                  <Image
                    src={item.photoProfile}
                    alt="Office Prayer Profile"
                    width={50}
                    height={50}
                    className="rounded-full parallax-bg"
                    data-swiper-parallax="-23%"
                  />
                  <div className="px-5 w-max">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
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
