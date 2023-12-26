import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full">
      <div className="p-4 md:p-10">
        <div className="flex align-center justify-center">
          <div className="px-0 md:px-36">
            <div className="text-justify">
              <h2 className="text-xl md:text-3xl font-medium">
                Struktur Pengurus dan Pembina DKM Nuruddin
              </h2>
              <hr className="my-2 border-t-2 border-green-30 w-full" />
              <p className="text-lg">
                Masjid Nuruddin Mempunyai pengurus untuk menjalankan operasional
                dan program-program Masjid yang disebut Dewan Kemakmuran Masjid
                Nuruddin atau DKM Nuruddin
              </p>
              <p className="text-lg mt-4">
                DKM Nuruddin periode 2022 - 2027 telah dikukuhkan dan dipilih
                Jama'ah masjid pada Septermber 2022 melalui musyawarah rapat
                pengurus masjid periode sebelumnya dan jamaah Masjid Nuruddin
              </p>
              <p className="mt-4 text-lg">
                Berikut adalah struktur pengurus dan pembina DKM Nuruddin,
                susunan organisasi Masjid meliputi Pembina, Penasehat, Ketua,
                Koordinasi Mejalis Taklim, Wakil Ketua, Sekretaris, Bendahara.
                Adapun Ketua membawahi beberapa Bidang, antara lain: Bidang
                Dak'wah & Peribadatan, Bidang Sosial Humas, Bidang Kepemudaan,
                Bidang Muslimatan, Bidang Sapras, dan Bidang Media dan PBHI
                (Peringatan Hari Besar Islam)
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/struktur-dkm.jpg"
                alt="struktur-dkm"
                width={700}
                height={600}
                className="mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
