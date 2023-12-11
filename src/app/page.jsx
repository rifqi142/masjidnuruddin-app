import React from "react";
import AlQuran from "@/components/AlQuran";
import AlQuranList from "@/components/AlQuranList";
import { getAlquranResponse } from "@/libs/api-libs";

const Home = async () => {
  const getAlquran = await getAlquranResponse("surat");
  return (
    <>
      <AlQuran />
      <AlQuranList api={getAlquran} />
    </>
  );
};

export default Home;
