import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { sliderData } from '../model/sliderData';
import { sliderDataTypes } from '../model/sliderTypes';

export default function Slider() {
  return (
    <div className='relative w-full'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {sliderData.map((item: sliderDataTypes) => (
          <SwiperSlide key={item.id} className="relative min-h-[82dvh] flex items-center justify-center text-white">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            />
          
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative w-[500px] flex flex-col justify-center items-start z-3 text-center px-5 min-h-[inherit]">
              <h1 className="text-7xl font-bold">
                {item.title}
              </h1>
              <p className="text-base text-left text-gray-300 font-semibold">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
