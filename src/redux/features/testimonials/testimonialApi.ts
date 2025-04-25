import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getAllTestimonials:builder.query({
            query:()=>({
                url:'/testimonial',
                method:'GET'
            }),
         
        }),
        createTestimonial: builder.mutation({
            query: (testimonialData) => ({
              url: "/testimonial/create-testimonial",
              method: "POST",
              body: testimonialData,
            }),
          }),
          
    })
});
export const {useGetAllTestimonialsQuery,useCreateTestimonialMutation}=testimonialApi;