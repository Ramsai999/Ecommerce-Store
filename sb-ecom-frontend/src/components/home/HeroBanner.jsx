import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { bannerLists } from "../../utils";
import { Link } from "react-router-dom";
import React from "react";

const colors = ["#FF2C2C", "#21AD61", "#723DA6"];

const HeroBanner = () => {
  return (
    <div className="mt-5 sm:mt-2 py-2 rounded-md">
      {/* Adjusted margin-top to prevent overlap */}
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {bannerLists.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div
              className="carousel-item h-full rounded-md sm:h-[500px] h-96"
              style={{ backgroundColor: colors[i] }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="hidden lg:flex justify-center w-1/2 p-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                    <h1 className="text-5xl font-bold text-white mt-2">{item.subtitle}</h1>
                    <p className="text-white font-bold mt-4">{item.description}</p>
                    <Link
                      className="mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                      to="/products"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="w-full flex justify-center lg:w-1/2 p-4">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
