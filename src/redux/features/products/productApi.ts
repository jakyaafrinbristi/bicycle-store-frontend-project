import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux } from "@/Types/global";
import { IProduct } from "@/Types/types";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
        query: () => '/product',
      }),
    getAllProductsPagination: builder.query<TResponseRedux<IProduct[]>, { searchTerm?: string; category?: string; page?: number; limit?: number }>({
      query: ({ searchTerm, category, page = 1, limit = 6 }) => {
        let queryString = `?page=${page}&limit=${limit}`;
        if (searchTerm) queryString += `&searchTerm=${searchTerm}`;
        if (category) queryString += `&category=${category}`;
        return {
          url: `/product${queryString}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<IProduct[]>) => {
        // Return the full response object
        return response;
      },
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetAllProductQuery, useGetProductByIdQuery,useGetAllProductsPaginationQuery } = productApi;