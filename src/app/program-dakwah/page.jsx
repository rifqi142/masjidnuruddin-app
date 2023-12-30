import React from "react";
import { dakwahPrograms } from "@/libs/dakwah-programs";
import Image from "next/image";

const ProgramDakwah = () => {
  return (
    <section className="w-full">
      <div className="p-4 md:p-20">
        <div className="text-justify">
          <h2 className="text-xl md:text-3xl font-medium text-center">
            Program Dakwah Masjid Nuruddin
          </h2>
          <hr className="my-2 border-t-2 border-green-30 w-full" />
        </div>
        <div className="mt-5 mx-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {dakwahPrograms.map((program, index) => (
            <div key={index} className="border-2 border-green-30 rounded-md">
              <div className="px-2 py-2 flex ml-3">
                <Image
                  src={program.photoProfile}
                  alt="profile-ustadz"
                  width={50}
                  height={50}
                  className="relative object-cover rounded-full shadow-xl"
                />
                <div className="ml-5 mt-3">
                  <h2 className="text-base font-semibold">{program.nameUst}</h2>
                  <h2 className="text-base font-medium">{program.title}</h2>
                  <hr className="my-2 border-t-2 border-green-30 w-full" />
                  <p className="text-sm">{program.schedule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDakwah;
