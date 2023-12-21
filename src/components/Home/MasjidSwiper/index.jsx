"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Parallax } from "swiper/modules";
import { images } from "@/libs/image";

const MasjidSwiper = () => {
  return (
    <section className="w-full">
      <div className="swiper">
        <Swiper
          slidesPerView={1}
          rewind={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Parallax]}
          parallax={true}
          className="w-full swiper-image"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover parallax-bg"
                  data-swiper-parallax="-23%"
                />
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="text-white px-20 mt-28">
                    <div className="title" data-swiper-parallax="-300">
                      <h3 className="text-5xl font-bold">{image.textTitle}</h3>
                    </div>
                    <div className="subtitle mt-5" data-swiper-parallax="-200">
                      <p className="text-lg">{image.textSubtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MasjidSwiper;
