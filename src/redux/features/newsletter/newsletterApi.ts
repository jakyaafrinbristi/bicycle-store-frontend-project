import { baseApi } from "@/redux/api/baseApi";

const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubscribers: builder.query({
      query: () => ({
        url: "/newsletter",
        method: "GET",
      }),
    }),
    subscribeNewsletter: builder.mutation({
      query: (email) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const {
  useGetAllSubscribersQuery,
  useSubscribeNewsletterMutation,
} = newsletterApi;
