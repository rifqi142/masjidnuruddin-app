import React from "react";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-dark-40 p-3 text-center text-white text-sm md:text-base">
      <p>&copy; {year} Masjid Nuruddin. All Rights Reserved.</p>
    </div>
  );
};

export default Copyright;
