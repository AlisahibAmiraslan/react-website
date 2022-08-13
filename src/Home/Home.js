import React from "react";
import Slider from "./Slider/Slider";
import "swiper/css/bundle";
import Banner from "./Banner/Banner";
function Home() {
  return (
    <div className="mt-20">
      <Slider />
      <Banner />
    </div>
  );
}

export default Home;
