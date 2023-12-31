"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Parallax } from "swiper/modules";
import { images } from "@/libs/swiper-content";

const MasjidSwiper = () => {
  return (
    <section className="w-full">
      <div className="swiper">
        <Swiper
          slidesPerView={1}
          grabCursor={true}
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
          className="swiper-image"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="h-max">
              <div className="">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="absolute w-full h-full object-cover parallax-bg"
                  data-swiper-parallax="-23%"
                />
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="text-white px-4 md:px-20 mt-12 md:mt-28">
                    <div className="title" data-swiper-parallax="-500">
                      <h3
                        className="text-2xl md:text-4xl font-bold text-brown-10"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        {image.textTitle}
                      </h3>
                    </div>
                    <div className="subtitle mt-5" data-swiper-parallax="-300">
                      <p
                        className="text-sm md:text-lg"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        {image.textSubtitle}
                      </p>
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
