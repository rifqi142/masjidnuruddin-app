import React from "react";
import MasjidSwiper from "@/components/Home/MasjidSwiper";
import PrayerTime from "@/components/Home/PrayerTime";
import ContentYoutube from "@/components/Home/ContentYoutube";

const Home = async () => {
  return (
    <>
      <div>
        <MasjidSwiper />
        <PrayerTime />
        <ContentYoutube />
      </div>
    </>
  );
};

export default Home;
