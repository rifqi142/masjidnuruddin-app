"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
      searchRef.current.value = "";
    }
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center mx-15 md:mx-10 pl-7 md:pl-0">
        <input
          placeholder="Surat apa yang mau anda baca? (contoh: Al-Fatihah)"
          className="p-3 max-w-5xl rounded-lg text-sm content-center
          focus:outline-none focus:shadow-xl w-full"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button
          className="p-4 rounded-lg focus:outline-none focus:shadow-xl"
          onClick={handleSearch}
        ></button>{" "}
      </div>
    </div>
  );
};

export default InputSearch;
