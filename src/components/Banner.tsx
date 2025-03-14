"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import local images
import image1 from "../assets/images/Banner1-unsplash.jpg";
import image2 from "../assets/images/banner-4-unsplash.jpg";
import image3 from "../assets/images/Banner-5-unsplash.jpg";

const images = [image1, image2, image3];

export default function Banner() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 rounded-xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-[600px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
