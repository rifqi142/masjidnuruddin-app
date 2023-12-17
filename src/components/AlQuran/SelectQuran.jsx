import React from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectQuran = async () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[280px] mt-5">
          <SelectValue placeholder="Pilih Surat" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup label="Surat">
            {getAlquran.data.map((item, index) => (
              <Link href={`/surat/${item.nomor}`} key={index} legacyBehavior>
                <a>
                  <SelectItem
                    value={item.namaLatin}
                    onClick={() => handleSelectItem(item)}
                  >
                    {item.namaLatin}
                  </SelectItem>
                </a>
              </Link>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectQuran;
