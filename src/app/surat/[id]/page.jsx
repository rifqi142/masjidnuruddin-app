import React from "react";
import { getAlquranResponse } from "@/libs/api-libs";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const DetailSurat = async ({ params: { id } }) => {
  const getDetailSurat = await getAlquranResponse(`surat/${id}`);
  return (
    <section className="px-2 md:px-16 py-5">
      <div className="w-full border-2 bg-green-30 rounded-2xl p-5 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="gap-2 md:row-span-2 md:col-span-1 col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {getDetailSurat.data.namaLatin} - {getDetailSurat.data.nama}
            </h2>
            <p className="capitalize text-sm sm:text-base text-gray-10">
              {getDetailSurat.data.tempatTurun} •{" "}
              {getDetailSurat.data.jumlahAyat} Ayat • {getDetailSurat.data.arti}
            </p>
          </div>

          <div className="col-span-2 md:row-span-2 md:col-span-1 flex items-end md:items-start justify-end">
            <Link href={`/tafsir/${id}`}>
              <div className="bg-yellow-60 rounded-md md:w-28 font-bold p-2 text-center text-sm hover:bg-yellow-30">
                Lihat Tafsir
              </div>
            </Link>
          </div>

          <div className="col-span-2 mt-1">
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

      {getDetailSurat.data.suratSelanjutnya === false ? null : (
        <div>
          <Link
            href={`/surat/${getDetailSurat.data.suratSelanjutnya.nomor}`}
            className="p-2"
          >
            <div className="flex flex-row gap-2 border border-red-500">
              ({getDetailSurat.data.suratSelanjutnya.namaLatin}) Surah
              Selanjutnya
              <ArrowRight size={23} />
            </div>
          </Link>
        </div>
      )}

      {getDetailSurat.data.suratSebelumnya === false ? null : (
        <div>
          <Link
            href={`/surat/${getDetailSurat.data.suratSebelumnya.nomor}`}
            className="p-2"
          >
            <div className="flex flex-row gap-2">
              <ArrowLeft size={23} />(
              {getDetailSurat.data.suratSebelumnya.namaLatin}) Surah Sebelumnya
            </div>
          </Link>
        </div>
      )}

      <div>
        <div>
          {getDetailSurat.data.ayat.map((ayat, index) => (
            <div key={index}>
              <h5>{ayat.nomorAyat}</h5>
              <div>
                <h1>{ayat.teksArab}</h1>
                <p>{ayat.teksLatin}</p>
              </div>
              <div>
                <p>{ayat.teksIndonesia}</p>
              </div>
              <div>
                <audio controls>
                  <source src={ayat.audio["05"]} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailSurat;
