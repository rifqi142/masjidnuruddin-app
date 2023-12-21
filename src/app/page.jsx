import React from "react";
import MasjidSwiper from "@/components/Home/MasjidSwiper";
import PrayerTime from "@/components/Home/PrayerTime";

const Home = async () => {
  return (
    <>
      <div>
        <MasjidSwiper />
        <PrayerTime />
      </div>
    </>
  );
};

export default Home;
