"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const marquee = document.querySelector(".animate-marquee");

    const handleMouseEnter = () => {
      marquee?.classList.add("stop-animate-marquee");
    };

    const handleMouseLeave = () => {
      marquee?.classList.remove("stop-animate-marquee");
    };

    marquee?.addEventListener("mouseenter", handleMouseEnter);
    marquee?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      marquee?.removeEventListener("mouseenter", handleMouseEnter);
      marquee?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>
      <div className="bg-green-30 h-12 flex items-center text-center relative overflow-x-hidden">
        <div className="animate-marquee slow-animate-marquee text-gray-20 whitespace-nowrap">
          <ul>
            <li>
              Website Masjid Nuruddin Jakarta- Jl. H. Sa'aba No.7, RT.8/RW.3,
              Kelurahan Meruya Selatan, Kecamatan Kembangan, Kota Jakarta Barat,
              Daerah Khusus Ibukota Jakarta 11650
            </li>
          </ul>
        </div>
      </div>
      <nav className="flexBetween max-container padding-container z-30 py-2 sticky top-0 bg-white">
        <Link href="/">
          <Image src="/logo-masjid.png" alt="logo" width={90} height={20} />
        </Link>

        <ul className="hidden h-full gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`regular-16 xl:regular-14 text-green-30 flexCenter 
        cursor-pointer pb-1.5 relative transition-all hover:text-green-50 hover:font-bold ${
          link.className === "active" ? "border-b-2 border-b-green-20" : ""
        }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Donasi"
            icon="/donasi.svg"
            variant="btn_dark_green"
          />
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    </>
  );
};

export default NavBar;
