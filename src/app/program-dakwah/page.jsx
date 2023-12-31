import React from "react";
import { dakwahPrograms } from "@/libs/dakwah-programs";
import Image from "next/image";

const ProgramDakwah = () => {
  return (
    <>
      <section className="w-full">
        <div className="p-4 md:p-20">
          <div className="text-justify">
            <h2 className="text-xl md:text-3xl font-medium text-center">
              Program Dakwah Masjid Nuruddin
            </h2>
            <hr className="my-2 border-t-2 border-green-30 w-full" />
          </div>
          <div className="mt-5 mx-0 md:mx-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {dakwahPrograms.map((program, index) => (
              <div
                key={index}
                className="border-2 border-green-30 rounded-md w-full"
              >
                <div className="px-2 py-2 ml-3 block md:flex">
                  <Image
                    src={program.photoProfile}
                    alt="profile-ustadz"
                    width={150}
                    height={150}
                    className="mx-auto md:mx-0 relative object-cover rounded-full shadow-xl md:w-50 md:h-50"
                  />
                  {/* profile */}
                  <div className="flex flex-col">
                    <div className="grid ml-0 md:ml-5 mt-3 h-max">
                      <div className="col-span-1 flex items-center h-max">
                        <Image
                          src="/profile-ustadz.png"
                          alt="profile-logo"
                          width={25}
                          height={25}
                          className="object-cover w-6 h-6"
                        />
                        <div className="col-span-1 w-full ml-3">
                          <h2 className="text-base font-semibold w-full">
                            {program.nameUst}
                          </h2>
                        </div>
                      </div>
                      <hr className="my-2 border-t-2 border-green-30 w-full" />
                    </div>
                    {/* pembahasan */}
                    <div className="grid ml-0 md:ml-5 mt-3 h-max">
                      <div className="col-span-1 flex items-center h-max">
                        <Image
                          src="/kajian-books.png"
                          alt="profile-logo"
                          width={25}
                          height={25}
                          className="object-cover w-6 h-6"
                        />
                        <div className="col-span-1 w-full ml-3">
                          <h2 className="text-base font-medium w-full">
                            {program.title}
                          </h2>
                        </div>
                      </div>
                      <hr className="my-2 border-t-2 border-green-30 w-full" />
                    </div>
                    {/* jawdwal */}
                    <div className="grid ml-0 md:ml-5 mt-3 h-max">
                      <div className="col-span-1 flex items-center h-max">
                        <Image
                          src="/calendar-programs.png"
                          alt="profile-logo"
                          width={25}
                          height={25}
                          className="object-cover w-6 h-6"
                        />
                        <div className="col-span-1 w-full ml-3">
                          <h2 className="text-base font-medium w-full">
                            {program.schedule}
                          </h2>
                        </div>
                      </div>
                      <hr className="my-2 border-t-2 border-green-30 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDakwah;
