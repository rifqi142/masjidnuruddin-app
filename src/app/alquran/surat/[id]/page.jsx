"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Info } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DetailSurat = async ({ params: { id } }) => {
  const router = useRouter(); // Use the useRouter hook

  // Construct the full URL
  const suratUrl = `${process.env.NEXT_PUBLIC_API_URL}surat/${id}`;
  const tafsirUrl = `${process.env.NEXT_PUBLIC_API_URL}tafsir/${id}`;
  const getAlquranUrl = `${process.env.NEXT_PUBLIC_API_URL}surat`;

  // Fetch data using the full URL
  const getDetailSuratResponse = await fetch(suratUrl);
  const getDetailTafsirResponse = await fetch(tafsirUrl);
  const getAlquranResponse = await fetch(getAlquranUrl);

  // Parse the JSON responses
  const getDetailSurat = await getDetailSuratResponse.json();
  const getDetailTafsir = await getDetailTafsirResponse.json();
  const getAlquran = await getAlquranResponse.json();

  const indexSurat = getDetailSurat.data.nomor;
  const namaLatin = getDetailSurat.data.namaLatin;

  const renderTextWithLineBreaks = (text) => {
    const textWithLineBreaks = text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
    return textWithLineBreaks;
  };

  const italicText = (text) => {
    // Wrap the text inside <i> tags for italics
    return text.replace(/<i>(.*?)<\/i>/g, (_, content) => `<i>${content}</i>`);
  };

  const handleSelectItem = (item) => {
    router.push(`/alquran/surat/${item}`);
  };

  return (
    <>
      <section className="px-2 md:px-16 pt-5 pb-8 md:pb-14 bg-gray-10">
        <div className="w-full border-2 bg-green-30 rounded-2xl p-5 overflow-hidden">
          <div className="grid grid-cols-2 grid-rows-3">
            <div className="gap-2 md:row-span-2 md:col-span-1 col-span-2">
              <div className="flex flex-row">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {getDetailSurat.data.namaLatin} - {getDetailSurat.data.nama}
                </h2>
                {/* DIALOG */}
                <p>
                  <Dialog className="w-3 py-40 my-30">
                    <DialogTrigger asChild className="text-white px-2">
                      <button>
                        <Info size={20} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="flex flex-col h-screen md:h-max mx-auto my-auto">
                      <DialogHeader className="mb-1">
                        <DialogTitle>
                          Deskripsi dari Surat {getDetailSurat.data.namaLatin}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex-1 overflow-y-auto max-h-">
                        <div className="text-sm mt-3 ">
                          <p
                            className="text-justify text-sm"
                            dangerouslySetInnerHTML={{
                              __html: italicText(getDetailSurat.data.deskripsi),
                            }}
                          ></p>
                        </div>
                      </div>
                      <DialogFooter className="sm:justify-end">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="primary"
                            className="bg-green-30 text-white"
                          >
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </p>
              </div>
              <p className="capitalize text-sm sm:text-base text-gray-10">
                {getDetailSurat.data.tempatTurun} •{" "}
                {getDetailSurat.data.jumlahAyat} Ayat •{" "}
                {getDetailSurat.data.arti}
              </p>
            </div>

            <div className="col-span-2 md:row-span-2 md:col-span-1 flex items-end md:items-start justify-end  ">
              <Link href={`/alquran/tafsir/${id}`}>
                <div className="bg-yellow-60 text-green-90 rounded-md md:w-28 font-bold p-2 text-center text-sm hover:bg-yellow-30">
                  Lihat Tafsir
                </div>
              </Link>
            </div>

            <div className="col-span-2 mt-2">
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
              href={`/alquran/surat/${getDetailSurat.data.suratSebelumnya.nomor}`}
              className="p-2 bg-green-30 rounded-lg h-10 flexCenter flex-1 hover:bg-green-50 "
            >
              <div className="flex flex-row gap-2">
                <ArrowLeft size={23} />(
                {getDetailSurat.data.suratSebelumnya.namaLatin}) Surat
                Sebelumnya
              </div>
            </Link>
          )}

          {getDetailSurat.data.suratSelanjutnya === false ? null : (
            <Link
              href={`/alquran/surat/${getDetailSurat.data.suratSelanjutnya.nomor}`}
              className="p-2 bg-green-30 rounded-lg h-10 flexCenter flex-1 hover:bg-green-50"
            >
              <div className="flex flex-row gap-2">
                ({getDetailSurat.data.suratSelanjutnya.namaLatin}) Surat
                Selanjutnya
                <ArrowRight size={23} />
              </div>
            </Link>
          )}
        </div>
        {/*  */}
        <div>
          <h3 className="mt-3">Pilih Surah: </h3>
          <Select onValueChange={handleSelectItem}>
            <SelectTrigger className="w-[280px] mt-2">
              <SelectValue placeholder={getDetailSurat.data.namaLatin} />
            </SelectTrigger>
            <SelectContent>
              {getAlquran.data.map((item, index) => (
                <SelectItem key={index} value={item.nomor}>
                  <a onClick={() => handleSelectItem(item.nomor)}>
                    {item.namaLatin}
                  </a>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/*  */}
        <div className="mt-5">
          {getDetailSurat.data.ayat.map((ayat, index) => (
            <div
              key={index}
              className="w-full border-2 bg-white rounded-tl-md rounded-tr-2xl rounded-bl-2xl p-5 rounded-br-md
            overflow-hidden text-black mt-3 shadow-sm hover:shadow-lg"
            >
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h4 className="text-xl">
                    {indexSurat} : {ayat.nomorAyat}
                  </h4>
                  <p>
                    <Dialog className="w-3 py-40 my-30">
                      <DialogTrigger asChild className="text-green-30 px-2">
                        <button>
                          <Info size={20} />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="flex flex-col h-screen mx-auto my-auto">
                        <DialogHeader className="mb-1">
                          <DialogTitle>
                            Tafsir {namaLatin} Ayat {ayat.nomorAyat}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 overflow-y-auto max-h-">
                          <div className="text-xl flexEnd flex-wrap text-justify text-black pr-3">
                            <span className="text-right text-[justify-last] leading-loose mt-3">
                              {ayat.teksArab}
                            </span>
                          </div>
                          <div className="text-sm mt-3 ">
                            {getDetailTafsir.data.tafsir.map(
                              (tafsir, index) => (
                                <div key={index}>
                                  <p className="text-justify text-sm">
                                    {" "}
                                    {renderTextWithLineBreaks(tafsir.teks)}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                        <DialogFooter className="sm:justify-end">
                          <DialogClose asChild>
                            <Button
                              type="button"
                              variant="primary"
                              className="bg-green-30 text-white"
                            >
                              Close
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </p>
                </div>
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
    </>
  );
};

export default DetailSurat;
