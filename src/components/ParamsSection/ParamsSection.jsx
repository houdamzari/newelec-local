import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";
import ParamCard from "./ParamCard/ParamCard";
import "swiper/css";
function ParamsSection() {
  return (
    <div className="w-full flex justify-center">
      <Swiper className="w-[1181px]" spaceBetween={20} slidesPerView={6}>
        {data.map((el) => (
          <SwiperSlide className="w-full" key={el.label}>
            <ParamCard data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ParamsSection;
