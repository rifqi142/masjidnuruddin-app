"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (href) => {
    if (router.pathname === href) {
      router.push(href).then(() => router.reload());
    } else {
      router.push(href);
    }
  };

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
      <nav className="w-full px-6 lg:px-20 z-30 py-2 sticky top-0 bg-white">
        <div className="flexBetween">
          <Link href="/">
            <Image
              src="/logo-masjid.png"
              alt="logo"
              width={90}
              height={20}
              className="block"
            />
          </Link>

          <ul className="hidden h-full gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <React.Fragment key={link.key}>
                {link.external ? (
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`regular-16 xl:regular-14 text-green-30 flexCenter 
            cursor-pointer pb-1.5 relative transition-all hover:text-green-50 hover:font-bold ${
              link.className === "active" ? "border-b-2 border-b-green-20" : ""
            }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`regular-16 xl:regular-14 text-green-30 flexCenter 
            cursor-pointer pb-1.5 relative transition-all hover:text-green-50 hover:font-bold ${
              link.className === "active" ? "border-b-2 border-b-green-20" : ""
            }`}
                  >
                    {link.label}
                  </Link>
                )}
              </React.Fragment>
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
            src={isMenuOpen ? "/close-menu.svg" : "/menu-open.svg"}
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white mt-5">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`block regular-16 xl:regular-14 text-green-30 py-2 px-2 
                transition-all hover:text-green-50 hover:font-bold`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex-center py-2 px-1">
              <Button
                type="button"
                title="Donasi"
                icon="/donasi.svg"
                variant="btn_dark_green_2"
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
