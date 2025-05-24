import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { LastNewsSliderData } from '../model/data';
import { LastNewsSliderType } from '../model/type';
import NewsCard from '../../../shared/ui/news-card';
// import Button from '../../../shared/ui/button';

export default function LastNewsSlider() {
  return (
    <div className='relative w-full'>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="last_news_slider w-full"
      >
        {LastNewsSliderData.map((item: LastNewsSliderType) => {
          return (
            <SwiperSlide key={item.id} className='mb-10 flex flex-wrap' >
              <Link to={"#"}>
              </Link>
              <NewsCard title={item.title} description={item.description} thumbnail={item.img} ></NewsCard>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Bottom "All news" link */}
      <div className="text-right">
        <a href="/news" className="text-green-600 font-medium hover:underline flex items-center gap-1 justify-end">
          Барлық жаңалыктар
        </a>
      </div>
    </div>
  );
}
