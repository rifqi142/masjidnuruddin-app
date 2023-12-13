import React from "react";
import { getAlquranResponse } from "@/libs/api-libs";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const DetailSurat = async ({ params: { id } }) => {
  const getDetailSurat = await getAlquranResponse(`surat/${id}`);
  const indexSurat = getDetailSurat.data.nomor;
  return (
    <section className="px-2 md:px-16 py-5 bg-gray-10">
      <div className="w-full border-2 bg-green-30 rounded-2xl p-5 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="gap-2 md:row-span-2 md:col-span-1 col-span-2  ">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {getDetailSurat.data.namaLatin} - {getDetailSurat.data.nama}
            </h2>
            <p className="capitalize text-sm sm:text-base text-gray-10">
              {getDetailSurat.data.tempatTurun} •{" "}
              {getDetailSurat.data.jumlahAyat} Ayat • {getDetailSurat.data.arti}
            </p>
          </div>

          <div className="col-span-2 md:row-span-2 md:col-span-1 flex items-end md:items-start justify-end  ">
            <Link href={`/tafsir/${id}`}>
              <div className="bg-yellow-60 rounded-md md:w-28 font-bold p-2 text-center text-sm hover:bg-yellow-30">
                Lihat Tafsir
              </div>
            </Link>
          </div>

          <div className="col-span-2 mt-2  ">
            <audio
              controls
              className="audio-player bg-yellow-60 rounded-md w-full h-11 md:h-14 "
            >
              <source
                src={getDetailSurat.data.audioFull["05"]}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      {/* next, previous */}
      <div className="mt-3 flex flex-col md:flex-row gap-2 text-white text-base justify-center ">
        {getDetailSurat.data.suratSebelumnya === false ? null : (
          <Link
            href={`/surat/${getDetailSurat.data.suratSebelumnya.nomor}`}
            className="p-2 bg-green-30 rounded-lg h-10 flexCenter flex-1 hover:bg-green-50 "
          >
            <div className="flex flex-row gap-2">
              <ArrowLeft size={23} />(
              {getDetailSurat.data.suratSebelumnya.namaLatin}) Surah Sebelumnya
            </div>
          </Link>
        )}

        {getDetailSurat.data.suratSelanjutnya === false ? null : (
          <Link
            href={`/surat/${getDetailSurat.data.suratSelanjutnya.nomor}`}
            className="p-2 bg-green-30 rounded-lg h-10 flexCenter flex-1 hover:bg-green-50"
          >
            <div className="flex flex-row gap-2">
              ({getDetailSurat.data.suratSelanjutnya.namaLatin}) Surah
              Selanjutnya
              <ArrowRight size={23} />
            </div>
          </Link>
        )}
      </div>

      <div className="mt-5">
        {getDetailSurat.data.ayat.map((ayat, index) => (
          <div
            key={index}
            className="w-full border-2 bg-white rounded-tr-lg rounded-bl-lg p-5 
            overflow-hidden text-black mt-3 shadow-sm hover:shadow-lg"
          >
            <div className="flex flex-col">
              <h4 className="text-xl">
                {indexSurat} : {ayat.nomorAyat}
              </h4>
              <h1 className="text-3xl flexEnd mt-3 flex-wrap text-justify">
                <span className="text-right text-[justify-last] leading-loose">
                  {ayat.teksArab}
                </span>
              </h1>
            </div>
            <div className="mt-5 text-base md:text-xl text-justify text-yellow-80">
              <p>{ayat.teksLatin}</p>
            </div>
            <div className="mt-3 text-sm md:text-lg text-justify">
              <p>{ayat.teksIndonesia}</p>
            </div>
            <div className="mt-3">
              <audio
                controls
                className="audio-player bg-yellow-60 rounded-md w-52"
              >
                <source src={ayat.audio["05"]} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailSurat;
