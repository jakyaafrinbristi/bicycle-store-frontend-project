/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// import { logout, setUser } from "../features/auth/authSlice";


const baseQuery =fetchBaseQuery({baseUrl:"http://localhost:9000/api",
    credentials: "include",
    prepareHeaders:(headers,{getState}) =>{
        const token = (getState() as RootState).auth.token;
        if(token){
            headers.set('authorization' ,`${token}`)
        }
        return headers;
    }
});
// const baseQueryWithRefreshToken :BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType> = 
// async(args , api, extraOptions) : Promise<any>  =>{

//     let result = await baseQuery(args , api, extraOptions);
//     console.log(result)
 
//     if(result?.error?.status === 401){
//         //send Refresh
//         console.log('Sending Refresh Token')
    
//     const res = await fetch('http://localhost:9000/api/user/refresh-token',{
//         method:'POST',
//         credentials:'include',
//     });
//     const data = await res.json();
//     if(data?.data?.accessToken){
//         const user =(api.getState() as RootState).auth.user;

//     api.dispatch(
//         setUser({
//             user,
//             token:data.data.accessToken,
//         })
//     );
//     result = await baseQuery(args,api,extraOptions)
// }

// else{
//     api.dispatch(logout())
// }
// }
// return result;
// }

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:baseQuery,
    tagTypes:["Users","Products","Orders"],
    endpoints:()=>({})
})
