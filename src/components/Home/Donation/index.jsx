import Image from "next/image";
import React from "react";

const Donation = () => {
  return (
    <section className="w-full p-5 md:p-14 bg-green-10">
      <div className="flex flex-col max-w-full md:w-max py-5 md:py-0 mx-auto">
        <div
          className="border-2 md:border-0 rounded-xl bg-white flex flex-col md:flex-row shadow-md shadow-green-20/60"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            className="capitalize mt-5 px-4 md:px-10 mb-5 text-base sm:text-xl md:text-3xl font-semibold text-yellow-100 text-center md:text-left"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>Berikan Donasi Terbaik Anda,</h2>
            <h2>Transfer Melalui :</h2>
            <Image
              src="/logo-bank.png"
              alt="logo-bank-dki"
              width={150}
              height={150}
              className="mt-5 mx-auto md:hidden"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <div
              className="uppercase mt-5 md:mt-10 text-base sm:text-xl md:text-3xl leading-tight font-semibold text-green-15"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2>Bank DKI Syariah</h2>
              <h3>
                No. Rekening: <span className="text-green-45">71021005658</span>
              </h3>
              <h3>a/n: Masjid Nuruddin</h3>
            </div>
          </div>

          <div
            className="hidden md:flex items-center justify-center md:justify-end pl-0 md:pl-10 pr-0 md:pr-5 mt-10 md:mt-24"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              alt="logo-bank-dki"
              src="/logo-bank.png"
              width={300}
              height={300}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
