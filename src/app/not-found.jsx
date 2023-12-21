"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <Image
          src="/not-found.png"
          alt="Not Found"
          width={400}
          height={400}
          className=""
        />
        <h3 className="text-green-30 text-5xl font-bold uppercase">
          Not Found
        </h3>
        <button
          onClick={() => router.back()}
          className="text-black hover:text-green-30 transition-all underline text-xl"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default NotFound;
