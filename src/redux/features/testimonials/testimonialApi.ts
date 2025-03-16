import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getAllTestimonials:builder.query({
            query:()=>({
                url:'/testimonial',
                method:'GET'
            })
        })
    })
});
export const {useGetAllTestimonialsQuery}=testimonialApi;