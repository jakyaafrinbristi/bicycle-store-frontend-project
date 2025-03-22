import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getUsers:builder.query({
            query:()=>"/user",
            providesTags:["Users"]
        }),
        deactivateUser:builder.mutation({
            query:(userId)=>({
                url:`/users/${userId}`,
                method:"PATCH",
                body:{active:false}
            }),
            invalidatesTags: ["Users"],
        })
    })
});

export const {useGetUsersQuery,useDeactivateUserMutation}=userApi