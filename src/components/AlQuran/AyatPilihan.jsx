import { AYAT_KHUSUS } from "@/constants";
import Link from "next/link";
import React from "react";

const AyatPilihan = () => {
  return (
    <div className="flexCenter gap-3 mt-5 flex-wrap">
      {AYAT_KHUSUS.map((ayat) => (
        <Link
          href={ayat.href}
          key={ayat.key}
          className="regular-16 rounded-full bg-green-25 px-2 py-2 text-white
                  cursor-pointer p-10 transition-all hover:font-bold"
        >
          {ayat.label}
        </Link>
      ))}
    </div>
  );
};

export default AyatPilihan;
