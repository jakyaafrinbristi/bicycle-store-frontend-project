import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router"; 

import image1 from "../assets/images/Banner1-unsplash.jpg";
import image2 from "../assets/images/banner-4-unsplash.jpg";
import image3 from "../assets/images/banner-5-unsplash.jpg";

const images = [image1, image2, image3];

export default function Banner() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-full h-[600px] relative"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white px-6 md:px-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Discover Your Perfect Ride
                  </h2>
                  <p className="text-lg mb-6 max-w-2xl mx-auto">
                    From city cruisers to mountain conquerors — we have a bike that suits your style.
                  </p>
                  <Link to="/all-bicycle">
                    <span className="inline-block bg-teal-600 hover:bg-teal-700 transition text-white font-semibold py-3 px-6 rounded-full shadow-lg">
                      Explore Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
