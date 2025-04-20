/* eslint-disable @typescript-eslint/no-unused-vars */

import Logo from "@/assets/Logo";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";

import { FieldValues, useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import Lottie from "lottie-react";
import loginAnimation from "../json/Login.json"


export const Login = () => {
  const navigate=useNavigate()
  const location = useLocation();
  
  
  // const from = location.state?.pathname || "/";
  console.log({location})
  const dispatch =useAppDispatch()
  const {register,handleSubmit} = useForm({
    defaultValues: {
      email: "jakya@gmail.com",
      password: "Test@1234",
    },
  });
  const [login]=useLoginMutation()
  console.log(login)
  // console.log(" error=> ",error)
  const onSubmit =async(data :FieldValues)=>{
    const toastId=toast.loading('Logging in')
    console.log(data)
try{
  const userInfo ={
    email:data.email,
    password:data.password,
  }
const res=await login(userInfo).unwrap();
console.log("res",res)
const user = verifyToken(res.data.accessToken) as TUser;
console.log(user)
dispatch(setUser({user:user, token:res.data.accessToken}))
toast.success('Logged In', {id : toastId , duration:1000})

  // navigate(from, { state: location.state?.state, replace: true });
  navigate("/");


// console.log(res)
}catch(err){
  toast.error('Something Went Wrong' ,{id : toastId ,duration:1000})
}
  }
  return (
 <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 container mx-auto">
  <div className="w-full max-w-md ml-8 hidden xl:block">
				<Lottie animationData={loginAnimation} loop={true} />
				</div>
     <form onSubmit={handleSubmit(onSubmit)} className=" w-full max-w-lg mx-auto p-6 space-y-6 border rounded-lg shadow-md">
<div className="flex justify-center ">
<h1 className=" font-semibold"><span className="text-2xl text-teal-500">W</span>elcome to Login Page</h1>
<Logo className="w-12 h-12 text-teal-300"></Logo>
</div>
    <div className="space-y-2">
      <Label htmlFor="email">Email:</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register("email")}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password:</Label>
      <Input
        id="password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
      />
    </div>
    <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-700">
      Login
    </Button>
    <p className="px-6 text-sm text-center ">Don't have an account yet?
				<Link to='/register' className="hover:underline dark:text-violet-600">Sign up</Link>.
			</p>
  </form>
 </div>

  )
}
