import { useGetAllTestimonialsQuery } from "@/redux/features/testimonials/testimonialApi"
import { ITestimonial } from "@/Types/types";
import { useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonial() {
  const { data, isLoading ,refetch} = useGetAllTestimonialsQuery(undefined);
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

  const testimonials = data?.data || [];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl text-center font-extrabold mb-16 text-gray-700 tracking-wide">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial: ITestimonial) => (
          <div
            key={testimonial._id}
            className="bg-white/60 backdrop-blur-md border border-teal-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out relative"
          >
            <div className="flex justify-center -mt-16">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            <div className="absolute top-5 left-5 text-4xl text-teal-300 opacity-30">
              <FaQuoteLeft />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-2">{testimonial.message}</p>

              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-lg ${
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
      </div>
    </div>
  );
}
