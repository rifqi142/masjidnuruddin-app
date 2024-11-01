import Image from "next/image";
import React from "react";
import { MENU_FOOTER } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-dark-30">
      <div className="flex justify-between mb-5 mt-5 md:mt-10 flex-col md:flex-row md:px-16">
        <div className="flex-1">
          <div className="flex flex-row">
            <Image
              src={"/footer-logo.png"}
              alt="Logo-footer"
              width={100}
              height={100}
              className="mr-4 w-16"
            />
            <h1 className="text-white flexCenter text-lg md:text-xl uppercase">
              Dewan Kemakmuran <br />
              Masjid Nuruddin
            </h1>
          </div>

          <p className="text-white text-sm text-justify mt-8">
            Selamat datang di Website Resmi Masjid Nuruddin. Mari kita
            bersama-sama membangun kebersamaan, toleransi, dan keberagaman.
            Jangan lupa untuk terus mendukung kegiatan keagamaan dan sosial di
            Masjid Nuruddin. Semoga Allah memberkahi usaha kita bersama. Salam
            hangat dari Masjid Nuruddin.
          </p>
        </div>
        <div className="flex-1 md:ml-8 md:pl-16 mt-4">
          <h4 className="font-bold text-base md:text-lg mb-4 text-white">
            Menu
          </h4>
          <ul className="flex flex-col gap-3 ">
            {MENU_FOOTER.map((menu) => (
              <React.Fragment key={menu.key}>
                {menu.external ? (
                  <Link
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm  text-white hover:underline"
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <Link
                    href={menu.href}
                    key={menu.key}
                    className="text-sm  text-white hover:underline"
                  >
                    {menu.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="flex-1 md:ml-8 mt-4">
          <h4 className="font-bold text-base md:text-lg mb-4 text-white">
            Hubungi Kami
          </h4>
          <p className="text-white text-justify text-sm">
            Alamat: Jl. H. Sa'aba No.7, RT.8/RW.3, Kelurahan Meruya Selatan,
            Kecamatan Kembangan, Kota Jakarta Barat
          </p>
          <p className="text-white mt-3 text-sm">
            Telp. &nbsp;
            <a
              className="hover:underline"
              href="https://wa.me/6281584177959?text=Assalamu%27alaikum+pak+haji+mohon+maaf+menggangu"
              target="_blank"
            >
              0815 8417 7959 ||
            </a>
            <a
              className="hover:underline"
              href="https://wa.me/62085697268979?text=Assalamu%27alaikum+pak+haji+mohon+maaf+menggangu"
              target="_blank"
            >
              &nbsp; 0856 9726 8979
            </a>
          </p>
          <p className="text-white text-sm md:text-base hover:underline mt-4">
            Email:{" "}
            <a href="mailto:masjidnuruddin78@gmail.com">
              masjidnuruddin78@gmail.com
            </a>
          </p>
          <div className="flex mt-5 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/masjidnuruddin78official/"
              target="_blank"
              className="mr-4"
              aria-label="instagram"
            >
              <div className="social-media instagram"></div>
            </a>
            <a
              href="https://www.facebook.com/masjid.nuruddin.9"
              target="_blank"
              className="mr-4"
              aria-label="facebook"
            >
              <div className="social-media facebook"></div>
            </a>
            <a
              href="https://www.tiktok.com/@masjidnuruddin78official?fbclid=IwAR2Ul7MMhcpq_YLeT6DS_jKw8_HkXSox0l1HDIFrljNZWrLIFHiI6Z6zqcI"
              target="_blank"
              className="mr-4"
              aria-label="tiktok"
            >
              <div className="social-media tiktok" aria-label="tiktok"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
