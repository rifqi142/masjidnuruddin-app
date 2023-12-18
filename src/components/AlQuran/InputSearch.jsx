"use client";
import React from "react";

const InputSearch = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const keyword = event.target.value;
    onSearch(keyword);
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center mx-8 md:mx-10 md:pl-0">
        <input
          placeholder="Surat apa yang mau anda baca? (contoh: Al-Fatihah)"
          className="p-3 max-w-5xl rounded-lg text-sm content-center
          focus:outline-none focus:shadow-xl w-full"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default InputSearch;
