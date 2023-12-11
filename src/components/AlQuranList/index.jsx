import Link from "next/link";
import React from "react";

const AlQuranList = ({ api }) => {
  return (
    <div className="flexCenter">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 w-max">
        {api.data?.map((alquran, index) => {
          return (
            <Link
              href={`/surat/${alquran.nomor}`}
              key={index}
              className="cursor-pointer text-color-primary transition-all"
            >
              <div
                className="px-4 py-2 flex flex-row border border-green-70
              relative rounded-lg shadow-xl gap-2 hover:border-4 hover:bg-white"
              >
                <div className="text-white regular-18 md:mt-2 mt-4">
                  <h6 className="text-center md:mt-2 mt-1 text-green-30 font-semibold ">
                    {alquran.nomor}
                  </h6>
                </div>
                <div className="flex mt-3 w-full">
                  <div className="justify-center ml-2 ">
                    <h4 className="bold-16 text-green-30 max-w-max truncate-text">
                      {alquran.namaLatin}{" "}
                      <span className="regular-14">({alquran.arti})</span>
                    </h4>
                    <h4 className="text-gray-30">
                      {alquran.tempatTurun} • {alquran.jumlahAyat} Ayat
                    </h4>
                  </div>
                </div>
                <div className="flexEnd items-center w-full">
                  <h2 className="text-green-30 text-xl">{alquran.nama}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AlQuranList;
