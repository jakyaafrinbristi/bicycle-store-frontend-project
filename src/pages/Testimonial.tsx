import { useGetAllTestimonialsQuery } from "@/redux/features/testimonials/testimonialApi";
import { ITestimonial } from "@/Types/types";
import { useEffect } from "react";
import {  FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function Testimonial() {
  const { data, isLoading, refetch } = useGetAllTestimonialsQuery(undefined);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-dashed border-teal-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 bg-teal-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    );
  }

  const testimonials = data?.data?.slice(0, 5) || []; // ✅ only 5 cards

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        🌟 What Our Customers Say
      </h2>

      <Marquee speed={80} gradient={false} pauseOnHover>
  {testimonials.map((testimonial: ITestimonial) => (
    <div
      key={testimonial._id}
      className="mx-4  dark:bg-gray-800 p-4 rounded-xl shadow border border-teal-200 w-72 min-h-[200px] flex flex-col justify-between"
    >
      <div className="flex justify-center mt-2 mb-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
        />
      </div>

      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white">
          {testimonial.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
          {testimonial.message}
        </p>

        <div className="flex justify-center mt-3">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-sm ${
                index < testimonial.rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  ))}
</Marquee>

    </div>
  );
}
