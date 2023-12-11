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
      <div className="flex justify-center mx-10">
        <input
          placeholder="Surat apa yang mau anda baca? (contoh: Al-Fatihah)"
          className="p-4 max-w-5xl rounded-lg text-sm content-center
          focus:outline-none focus:shadow-xl w-full sm:mx-14"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button
          className="ml-2 p-3 rounded-lg focus:outline-none focus:shadow-xl"
          onClick={handleSearch}
        ></button>{" "}
      </div>
    </div>
  );
};

export default InputSearch;
