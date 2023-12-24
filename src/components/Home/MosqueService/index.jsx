import React from "react";
import { mosqueService } from "@/libs/mosque-service";
import Image from "next/image";

const MosqueService = () => {
  return (
    <section className="bg-home-gradient w-full p-4 md:p-20">
      <div>
        <h5 className="text-lg text-brown-10">Layanan</h5>
        <h3 className="text-2xl md:text-3xl text-white mt-3 font-semibold">
          Layanan Masjid Nuruddin.
        </h3>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-3 gap-10 mx-auto mt-14">
        {mosqueService.map((service, index) => (
          <div key={index}>
            <Image
              src={service.image}
              alt={service.alt}
              width={100}
              height={100}
              className="relative object-cover rounded-lg"
            />
            <h2 className="mt-5 text-brown-10 text-xl font-semibold text-justify">
              {service.textTitle}
            </h2>
            <p className="mt-5 text-white text-sm leading-6 text-justify">
              {service.textSubtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MosqueService;
