import React from "react";
import MasjidSwiper from "@/components/Home/MasjidSwiper";
import MosqueService from "@/components/Home/MosqueService";
import PrayerTime from "@/components/Home/PrayerTime";
import ContentYoutube from "@/components/Home/ContentYoutube";
import Donation from "@/components/Home/Donation";

const Home = async () => {
  return (
    <>
      <div>
        <MasjidSwiper />
        <MosqueService />
        <PrayerTime />
        <ContentYoutube />
        <Donation />
      </div>
    </>
  );
};

export default Home;
