/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Lottie from "lottie-react";
import registerAnimation from "../json/register.json"
import { Link, useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import Logo from "@/assets/Logo";

type FormValues={
  name:string;
  phone:string;
  email: string;
  password:string;
}
export const Register = () => {
  const navigate= useNavigate();

  const {register,handleSubmit} = useForm<FormValues>();
  const [registerUser] =useRegisterMutation();
  const onSubmit :SubmitHandler<FormValues>=async(data)=>{
    const toastId = toast.loading("Registering...");


    try{
      const userInfo ={
        name:data.name,
        phone:data.phone,
        email:data.email,
        password:data.password,

      };
      await registerUser(userInfo).unwrap();
      toast.success('Register Successfully', {id : toastId , duration:1000})
      navigate('/login');
    }catch(err){
      toast.error('Register Failed', {id : toastId , duration:1000})

    }

    }
  


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 container mx-auto">

       <form onSubmit={handleSubmit(onSubmit)} className=" w-full max-w-lg mx-auto p-6 space-y-6 border rounded-lg shadow-md">
  <div className="flex justify-center ">
  <h1 className=" font-semibold"><span className="text-2xl text-teal-500">W</span>elcome to Register Page</h1>
  <Logo className="w-12 h-12 text-teal-300"></Logo>
  </div>


  <div className="space-y-2">
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone:</Label>
        <Input
          id="phone"
          type="text"
          placeholder="Enter your phone"
          {...register("phone")}
        />
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
        Register
      </Button>
      <p className="px-6 text-sm text-center ">Don't have an account yet?
				<Link to='/login' className="hover:underline dark:text-violet-600">Sign In</Link>.
			</p>
    </form>
    <div className="w-full max-w-md ml-8">
          <Lottie animationData={registerAnimation} loop={true} />
          </div>
   </div>
  )
}
