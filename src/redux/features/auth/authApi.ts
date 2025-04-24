import { baseApi } from "@/redux/api/baseApi";


const authApi =baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userInfo)=>({
                url:'/user/login',
                method:'POST',
                body:userInfo,
            })
        }),
        register:builder.mutation({
            query:(userInfo)=>({
                url:'/user/register',
                method:'POST',
                body:userInfo,
            })
        }),
       
        updateProfile: builder.mutation({
            query: (updatedInfo) => ({
              url: '/user/profile',
              method: 'PATCH',
              body: updatedInfo,
            }),
          }),
          changePassword: builder.mutation({
            query: (passwordInfo) => ({
              url: '/user/change-password',
              method: 'PATCH',
              body: passwordInfo,
            }),
          }),
          
    })
});
export const {useLoginMutation,useRegisterMutation,useUpdateProfileMutation,useChangePasswordMutation}=authApi;