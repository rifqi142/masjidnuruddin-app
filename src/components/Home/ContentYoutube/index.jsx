import { youtubeContent } from "@/libs/youtube-content";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContentYoutube = () => {
  return (
    <>
      <section className="bg-home-gradient w-full p-20 ">
        <div className="mb-8">
          <h3 className="text-brown-10 text-xl font-semibold">
            <Link
              href="https://www.youtube.com/@masjidnuruddin78tv"
              target="_blank"
            >
              Masjid Nuruddin 78 TV
            </Link>
          </h3>
          <h4 className="text-white text-3xl mt-2 font-semibold">
            Video Kegiatan Masjid Nuruddin Meruya Selatan.
          </h4>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-3 gap-5 mx-auto">
          {youtubeContent.map((content, index) => (
            <Link key={index} href={content.link} target="_blank">
              <Image
                src={content.image}
                alt={content.alt}
                width={500}
                height={500}
                className="relative object-cover rounded-lg shadow-xl"
              />
              <h4 className="mt-3 text-brown-10 text-base font-semibold text-justify">
                {content.textTitle}
              </h4>
              <p className="mt-3 text-white text-base leading-6 text-justify">
                {content.textSubtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContentYoutube;
