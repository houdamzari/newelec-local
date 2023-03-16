import React, { useState } from "react";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";
import ParamCard from "./ParamCard/ParamCard";
import "swiper/css";
import "swiper/css/scrollbar";
import { left, right } from "../../assets";
function ParamsSection() {
  return (
    <div className="w-full flex justify-center items-center flex-row">
      <img src={left} alt="left" className="cursor-pointer left-arrow" />
      <Swiper
        className="w-[1100px] m-0 mx-[14px] pb-4"
        spaceBetween={20}
        breakpoints={{
          1350: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 4,
          },
          300: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={6}
        navigation={{
          prevEl: ".left-arrow",
          nextEl: ".right-arrow",
        }}
        modules={[Scrollbar, Navigation]}
        scrollbar={{ draggable: false }}
      >
        {data.map((el) => (
          <SwiperSlide className="w-full" key={el.label}>
            <ParamCard data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img src={right} alt="right" className="cursor-pointer right-arrow" />
    </div>
  );
}

export default ParamsSection;
