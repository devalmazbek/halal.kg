import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductService from '../../../shared/api/products'

import { ProductType } from '../../../shared/types/products'; 
import NewsCard from '../../../shared/ui/news-card';
import { Spinner } from '../../../shared/ui/spinner';



export default function LastProducts() {
  const [lastNews, setLastNews] = useState<ProductType[]>([]);

  useEffect(() => {
    ProductService.getPosts().then((data) => setLastNews(data)).
    catch((error) => console.log(error))
  }, [])

  if(!lastNews) return <Spinner/>


  return (
    <div className='w-full last_news'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true, modifierClass: "last_news_pagination_" }}
        autoplay={{ delay: 3000 }}
        className='slider flex flex-wrap'
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 }, 
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {lastNews.length > 0 && lastNews.map((item: ProductType) => (
          <SwiperSlide key={item.id} className='flex justify-center'>
            <div className='max-w-80 mx-auto'>
              <Link to={"#"}>
                <NewsCard title={item.title} thumbnail={item.thumbnail} meta={item.meta}/>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
