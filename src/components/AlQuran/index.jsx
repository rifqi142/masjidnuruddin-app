import Image from "next/image";
import React from "react";
import AyatPilihan from "./AyatPilihan";
import InputSearch from "./InputSearch";

const AlQuran = async () => {
  return (
    <div className="bg-alquran h-full relative">
      <div className="flex flex-col items-center">
        <Image
          src="/kaligrafi-quran.png"
          alt="Kaligrafi Quran"
          width={250}
          height={250}
          className="mt-5 "
        />
        <Image
          src="/arab-quran.png"
          alt="Arab Quran"
          width={400}
          height={400}
          className="mt-5"
        />
      </div>
      <InputSearch />
      <AyatPilihan />
      <br /> <br />
    </div>
  );
};

export default AlQuran;