import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const DetailTafsir = async ({ params: { id } }) => {
  const tafsirUrl = `${process.env.NEXT_PUBLIC_API_URL}/tafsir/${id}`;
  const getDetailTafsirResponse = await fetch(tafsirUrl);
  const getDetailTafsir = await getDetailTafsirResponse.json();

  const renderTextWithLineBreaks = (text) => {
    const textWithLineBreaks = text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
    return textWithLineBreaks;
  };

  return (
    <section className="px-2 md:px-16 pt-5 pb-8 md:pb-14 bg-gray-10">
      <div className="w-full border-2 bg-green-30 rounded-2xl p-5 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="gap-2 md:row-span-2 md:col-span-1 col-span-2  ">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {getDetailTafsir.data.namaLatin} - {getDetailTafsir.data.nama}
            </h2>
            <p className="capitalize text-sm sm:text-base text-gray-10">
              {getDetailTafsir.data.tempatTurun} •{" "}
              {getDetailTafsir.data.jumlahAyat} Ayat •{" "}
              {getDetailTafsir.data.arti}
            </p>
          </div>

          <div className="col-span-2 md:row-span-2 md:col-span-1 flex items-end md:items-start justify-end  ">
            <Link href={`/surat/${id}`}>
              <div className="bg-yellow-60 text-green-90 rounded-md md:w-28 font-bold p-2 text-center text-sm hover:bg-yellow-30">
                Lihat Surat
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* next, previous */}
      <div className="mt-3 flex flex-col md:flex-row gap-2 text-white text-base justify-center ">
        {getDetailTafsir.data.suratSebelumnya === false ? null : (
          <Link
            href={`/tafsir/${getDetailTafsir.data.suratSebelumnya.nomor}`}
            className="p-2 bg-green-30 rounded-lg h-10 flexCenter flex-1 hover:bg-green-50 "
          >
            <div className="flex flex-row gap-2">
              <ArrowLeft size={23} />(
              {getDetailTafsir.data.suratSebelumnya.namaLatin}) Tafsir Surat
              Sebelumnya
            </div>
          </Link>
        )}

        {getDetailTafsir.data.suratSelanjutnya === false ? null : (
          <Link
            href={`/tafsir/${getDetailTafsir.data.suratSelanjutnya.nomor}`}
            className="p-2 bg-green-30 rounded-lg h-10 flexCenter flex-1 hover:bg-green-50"
          >
            <div className="flex flex-row gap-2">
              ({getDetailTafsir.data.suratSelanjutnya.namaLatin}) Tafsir Surat
              Selanjutnya
              <ArrowRight size={23} />
            </div>
          </Link>
        )}
      </div>

      <div className="mt-5">
        {getDetailTafsir.data.tafsir.map((tafsir, index) => (
          <div
            key={index}
            className="w-full border-2 bg-white rounded-tl-md rounded-tr-2xl rounded-bl-2xl p-5 rounded-br-md
            overflow-hidden text-black mt-3 shadow-sm hover:shadow-lg"
          >
            <div className="flex flex-col">
              <h4 className="text-xl">Tafsir dari Ayat {tafsir.ayat}</h4>
            </div>
            <div className="mt-5 text-base md:text-xl text-justify">
              {renderTextWithLineBreaks(tafsir.teks)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailTafsir;
