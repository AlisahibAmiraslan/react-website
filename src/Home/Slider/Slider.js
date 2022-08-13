import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Navigation, Autoplay } from "swiper";
import Img1 from "../../Images/slider-img-1.jpg";
import Img2 from "../../Images/slider-img-2.jpg";
import Img3 from "../../Images/slider-img-3.jpg";
import Img4 from "../../Images/slider-img-4.jpg";

function Slider() {
  return (
    <div className="swiper-slider-home">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={2000}
      >
        <SwiperSlide>
          <img src={Img1} />
          <div className="slide-body-content absolute text-center">
            <h2 className="text-white md:text-4xl text-xl">
              Yatırım Danışmanlığı için Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <a
                href="/"
                className="bg-red-600 md:px-10 px-8 md:py-5 py-3 text-white hover:bg-red-500"
              >
                Keşfet
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} />
          <div className="slide-body-content absolute text-center">
            <h2 className="text-white md:text-4xl text-xl">
              Yatırım Danışmanlığı için Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <a
                href="/"
                className="bg-red-600 md:px-10 px-8 md:py-5 py-3 text-white hover:bg-red-500"
              >
                Keşfet
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} />
          <div className="slide-body-content absolute text-center">
            <h2 className="text-white md:text-4xl text-xl">
              Yatırım Danışmanlığı için Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <a
                href="/"
                className="bg-red-600 md:px-10 px-8 md:py-5 py-3 text-white hover:bg-red-500"
              >
                Keşfet
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} />
          <div className="slide-body-content absolute text-center">
            <h2 className="text-white md:text-4xl text-xl">
              Yatırım Danışmanlığı için Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <a
                href="/"
                className="bg-red-600 md:px-10 px-8 md:py-5 py-3 text-white hover:bg-red-500"
              >
                Keşfet
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
