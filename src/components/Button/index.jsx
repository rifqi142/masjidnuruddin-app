import React from "react";
import Image from "next/image";

const ButtonNav = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flexCenter gap-2 
        rounded-full border ${variant} ${full && "w-full"}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default ButtonNav;
