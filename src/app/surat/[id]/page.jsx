import React from "react";
import { getAlquranResponse } from "@/libs/api-libs";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const DetailSurat = async ({ params: { id } }) => {
  const getDetailSurat = await getAlquranResponse(`surat/${id}`);

  return (
    <section>
      <div className="w-full border border-red-500">
        <div>
          <h2>
            {getDetailSurat.data.namaLatin} - {getDetailSurat.data.nama}
          </h2>
          <p className="capitalize">
            {getDetailSurat.data.tempatTurun} • {getDetailSurat.data.jumlahAyat}{" "}
            Ayat • {getDetailSurat.data.arti}
          </p>
        </div>

        <div>
          <Link href={`/tafsir/${id}`} className="">
            <div className="p-2 border border-red-500">lihat Tafsir</div>
          </Link>
        </div>

        <div>
          <div>
            <audio controls>
              <source
                src={getDetailSurat.data.audioFull["05"]}
                type="audio/mpeg"
              />
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
            <div className="flex flex-row gap-2">
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
