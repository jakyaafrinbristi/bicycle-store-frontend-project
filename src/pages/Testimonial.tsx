import { useGetAllTestimonialsQuery } from "@/redux/features/testimonials/testimonialApi"
import { FaQuoteLeft, FaStar } from "react-icons/fa";


export default function Testimonial() {
    const {data, isLoading}=useGetAllTestimonialsQuery(undefined)
    // console.log({data ,isLoading})
    if(isLoading){
        return <div>Loading....</div>
    }
    const  testimonials =data?.data || [];
  return (
    <div className="container mx-auto py-12">
        <h2 className="text-4xl text-center font-semibold mb-6"> Customer Testimonial</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {
                 testimonials.map((testimonial)=>(
                    <div key={testimonial._id} className="bg-white p-6 rounded-lg  shadow-lg hover:shadow-xl
                     transition-all duration-300 ">
                        <div className="">
                        <FaQuoteLeft></FaQuoteLeft>
                        </div>
                        
                      <div className="flex flex-col justify-between h-full">
                      <div className="flex justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{testimonial.name}</h3>
                        <div className="flex">
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
                      <p className="text-gray-600 mb-4">{testimonial.message}</p>
                      </div>

                    </div>
                ))
            }

        </div>

    </div>
  )
}
