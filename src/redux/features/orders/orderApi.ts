import { baseApi } from "@/redux/api/baseApi";

 const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: () => '/order',
            providesTags: ["Orders"],
         
          }),
          verifyOrder:builder.query({
            query:(order_id)=>({
              url:"/order/verify",
              params:{order_id},
              method:"GET",
            })
          }),
          

          createOrder:builder.mutation({
            query:(orderData)=>({
             url:"/order",
             method:"POST",
             body:orderData
            }),
            invalidatesTags: ["Orders"],
          }),

          updateOrder:builder.mutation({
            query:({id,updatedData})=>({
              url: `/order/${id}`,
              method: "PATCH",
              body:updatedData,
             }),
             invalidatesTags: ["Orders"],

          }),
          deleteOrder:builder.mutation({
            query:(id)=>({
              url: `/order/${id}`,
              method: "DELETE",
          
             }),
             invalidatesTags: ["Orders"],

          }),
}),
});
export const {useGetAllOrderQuery,useCreateOrderMutation,
  useUpdateOrderMutation,useDeleteOrderMutation,useVerifyOrderQuery}=orderApi;