"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import AyatPilihan from "./AyatPilihan";
import InputSearch from "./InputSearch";
import AlQuranList from "../AlQuranList";

const AlQuran = () => {
  const [dataAlquran, setDataAlquran] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getAlquranUrl = `${process.env.NEXT_PUBLIC_API_URL}surat`;
        const getAlquranResponse = await fetch(getAlquranUrl);
        const result = await getAlquranResponse.json();
        setDataAlquran(result.data);
        setFilteredData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (keyword) => {
    const filteredResults = dataAlquran.filter(
      (surah) =>
        surah.namaLatin.toLowerCase().includes(keyword.toLowerCase()) ||
        surah.arti.toLowerCase().includes(keyword.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <>
      <div className="bg-alquran h-full relative">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src="/kaligrafi-quran.png"
            alt="Kaligrafi Quran"
            width={250}
            height={250}
            className="mt-5"
          />
          <Image
            src="/arab-quran.png"
            alt="Arab Quran"
            width={400}
            height={400}
            className="mt-5"
          />
        </div>
        <InputSearch onSearch={handleSearch} />
        <AyatPilihan />
        <br /> <br />
      </div>
      <div className="overflow-y-auto h-full">
        {filteredData.length ? (
          <AlQuranList api={{ data: filteredData }} />
        ) : (
          <div className="text-center my-20 flex flex-col items-center">
            <Image
              src="/not-found.png"
              alt="Not Found"
              width={200}
              height={200}
            />
            <h1 className="text-2xl font-bold">Keyword Tidak Ditemukan</h1>
            <p>
              Silahkan gunakan keyword yang lebih spesifik seperti Al-fatihah,
              Ar-rahman, Al-waqi'ah
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AlQuran;
