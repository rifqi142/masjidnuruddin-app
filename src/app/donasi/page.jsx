import React from "react";
import Image from "next/image";
import { getAlquranResponse } from "@/libs/api-libs";

const Donasi = async () => {
  const getAlquran = await getAlquranResponse("surat/2");
  const getSurah = getAlquran.data.ayat;
  const getAyatSpecific = getSurah.find((ayat) => ayat.nomorAyat === 261);

  return (
    <section className="w-full">
      <div className="p-4 md:p-10">
        <div className="flex align-center justify-center">
          <div className="px-0 md:px-36">
            <div className="text-justify">
              <h2 className="text-xl md:text-3xl font-medium">
                Berikan Donasi Terbaik Anda
              </h2>
              <hr className="my-2 border-t-2 border-green-30 w-full" />
            </div>
            <div className="mt-5">
              <h1 className="text-3xl md:text-4xl flexEnd mt-3 flex-wrap text-justify font-medium">
                <span className="text-center text-[justify-last] leading-normal">
                  {getAyatSpecific.teksArab}
                </span>
              </h1>
              <p className="mt-5 text-xs md:text-base text-center italic leading-tight">
                "{getAyatSpecific.teksIndonesia}"
                <br />
                <span>
                  (QS. {getAlquran.data.namaLatin}: {getAyatSpecific.nomorAyat})
                </span>
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-base md:text-lg text-justify">
                Bagi para jama'ah yang ingin menginfaqkan hartanya untuk
                kemakmuran Masjid Nuruddin Meruya Selatan, donasi bisa
                disalurkan melalui berikut:
              </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-center align-center gap-5">
              <div className="mt-5 md:mt-12">
                <Image
                  src="/logo-bank.png"
                  alt="logo-bank-dki"
                  width={300}
                  height={300}
                  className="responsive-image"
                />
              </div>
              <div className="uppercase md:mt-10 text-base md:text-3xl leading-tight font-semibold text-green-15">
                <h2>Bank DKI Syariah</h2>
                <h3>
                  No. Rekening :
                  <span className="text-green-45">71021005658</span>
                </h3>
                <h3>a/n: Masjid Nuruddin</h3>
              </div>
            </div>
            <div className="text-left md:text-center text-xs md:text-sm">
              <p>Konfirmasi infaq dapat melalui: 0856 9726 8979</p>
            </div>
            <div className="mt-5 md:mt-10">
              <h3 className="text-base md:text-lg text-justify">
                Donasi juga dapat disalurkan melalui kotak-kotak infaq yang
                tersebar di Masjid Nuruddin Meruya Selatan.
              </h3>

              <h3 className="mt-3 text-base md:text-lg text-justify">
                Atas Kepedulian para jama'ah terhadap kemakmuran Masjid
                Nuruddin, kami haturkan terima kasih.
                <br />
                <span className="italic font-semibold">
                  Jazakum Allahu khairan katsiran.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donasi;
