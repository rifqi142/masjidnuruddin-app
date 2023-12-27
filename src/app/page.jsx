import React from "react";
import MasjidSwiper from "@/components/Home/MasjidSwiper";
import MosqueService from "@/components/Home/MosqueService";
import PrayerTime from "@/components/Home/PrayerTime";
import ContentYoutube from "@/components/Home/ContentYoutube";
import OfficeSchedule from "@/components/Home/OfficeSchedule";
import Donation from "@/components/Home/Donation";

const Home = async () => {
  return (
    <>
      <div>
        <MasjidSwiper />
        <MosqueService />
        <PrayerTime />
        <ContentYoutube />
        <OfficeSchedule />
        <Donation />
      </div>
    </>
  );
};

export default Home;
