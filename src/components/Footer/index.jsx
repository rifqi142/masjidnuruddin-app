import Image from "next/image";
import React from "react";
import { MENU_FOOTER } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 bg-dark-30 mt-10 p-32">
      <div className="flex justify-between container mx-auto">
        <div className="flex-1">
          <div className="flex flex-row">
            <Image
              src={"/footer-logo.png"}
              alt="Logo-footer"
              width={100}
              height={100}
              className="mr-4"
            />
            <h1 className="text-white flexCenter text-2xl">MASJID NURUDDIN</h1>
          </div>

          <p className="text-white text-xl text-justify mt-10">
            Selamat datang di Website Resmi Masjid Nuruddin. Mari kita
            bersama-sama membangun kebersamaan, toleransi, dan keberagaman.
            Jangan lupa untuk terus mendukung kegiatan keagamaan dan sosial di
            Masjid Nuruddin. Semoga Allah memberkahi usaha kita bersama. Salam
            hangat dari Masjid Nuruddin
          </p>
        </div>
        <div className="flex-1 ml-8 pl-16">
          <h4 className="font-bold text-2xl mb-4 text-white">Menu</h4>
          <ul className="flex flex-col gap-3 ">
            {MENU_FOOTER.map((menu) => (
              <Link
                href={menu.href}
                key={menu.key}
                className="regular-16 text-white hover:underline"
              >
                {menu.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex-1 ml-8">
          <h4 className="font-bold text-2xl mb-4 text-white">Hubungi Kami</h4>
          <p className="text-white">
            Alamat: Jl. H. Sa'aba No.7, RT.8/RW.3, Kelurahan Meruya Selatan,
            Kecamatan Kembangan, Kota Jakarta Barat
          </p>
          <p className="text-white mt-3">
            Telp. &nbsp;
            <a
              href="https://api.whatsapp.com/send/?phone=6281584177959&text=Assalamu%27alaikum+pak+haji+mohon+maaf+menggangu&type=phone_number&app_absent=0"
              target="_blank"
            >
              0815 8417 7959 ||
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=62085697268979&text=Assalamu%27alaikum+pak+haji+mohon+maaf+menggangu&type=phone_number&app_absent=0"
              target="_blank"
            >
              &nbsp; 0856 9726 8979
            </a>
          </p>
          <p className="text-white hover:underline mt-4">
            Email:{" "}
            <a href="mailto:masjidnuruddin78@gmail.com">
              masjidnuruddin78@gmail.com
            </a>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="mr-4">
              <div className="social-media instagram"></div>
            </a>
            <a href="#" className="mr-4">
              <div className="social-media facebook"></div>
            </a>
            <a href="#">
              <div className="social-media twitter"></div>
            </a>
          </div>
          <div className="flex1- ml-8"></div>
        </div>
      </div>
      <div className="bg-dark-40 p-3 text-center text-white">
        <p>&copy; 2023 Masjid Nuruddin. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
