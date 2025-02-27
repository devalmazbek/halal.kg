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
      >
        {lastNews.length > 0 && lastNews.map((item: ProductType) => (
          <SwiperSlide key={item.id} className='flex'>
            <div className='max-w-80'>
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
