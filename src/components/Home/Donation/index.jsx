import Image from "next/image";
import React from "react";

const Donation = () => {
  return (
    <section className="w-full md:p-14 bg-green-10">
      <div className="flex flex-col md:flex-row mx-0 md:mx-5 lg:mx-28 md:border-2 rounded-xl md:bg-white shadow-md shadow-green-20/60">
        <div className="capitalize mt-5 px-4 mb-5 text-xl md:text-4xl font-semibold text-yellow-100">
          <h2>Berikan Donasi Terbaik Anda,</h2>
          <h2>Transfer Melalui :</h2>
          <Image
            src="/logo-bank.png"
            alt="logo-bank-dki"
            width={150}
            height={150}
            className="mt-5 block md:hidden"
          />
          <div className="uppercase mt-10 text-lg md:text-4xl leading-tight font-semibold text-green-15">
            <h2>Bank DKI Syariah</h2>
            <h3>
              No. Rekening : <span className="text-green-45">71021005658</span>
            </h3>
            <h3>a/n: Masjid Nuruddin</h3>
          </div>
        </div>

        <div className="hidden md:grid items-center justify-items-end pl-10 mt-28">
          <Image
            alt="logo-bank-dki"
            src="/logo-bank.png"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Donation;
