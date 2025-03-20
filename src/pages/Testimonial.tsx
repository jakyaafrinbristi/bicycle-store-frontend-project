import { useGetAllTestimonialsQuery } from "@/redux/features/testimonials/testimonialApi"
import { ITestimonial } from "@/Types/types";
import { FaQuoteLeft, FaStar } from "react-icons/fa";


export default function Testimonial() {
    const {data, isLoading}=useGetAllTestimonialsQuery(undefined)
    // console.log({data ,isLoading})
    if(isLoading){
        return <div>Loading....</div>
    }
    const  testimonials =data?.data || [];
  return (
    <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl text-center font-semibold mb-20"> Customer Testimonial</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {
                 testimonials.map((testimonial : ITestimonial)=>(
                    <div key={testimonial._id} className="bg-white p-6 rounded-lg  shadow-lg hover:shadow-xl
                     transition-all duration-300 relative">
                        <div className="flex justify-center -mt-14">
                            <img src={testimonial.image} className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover" alt="" />
                        </div>
                        <div className="text-teal-600  text-4xl absolute top-6 left-6 opacity-30" >
                        <FaQuoteLeft></FaQuoteLeft>
                        </div>
                        
              
                      <div className="text-center mt-6 space-y-3">
                        <h3 className="text-2xl font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-600 ">{testimonial.message}</p>
                        <div className="flex justify-center mt-3">
                            {
                                [...Array(5)].map((_,index)=>(
                                    <FaStar
                                    key={index}
                                    className={`text-xl ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    
                                    />
                                ))
                            }

                        </div>
              

                     </div>

                      </div>

           
                ))
            }

        </div>

    </div>
  )
}
