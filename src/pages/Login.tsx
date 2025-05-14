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
import { Link,  useNavigate } from "react-router";
import { toast } from "sonner";
import Lottie from "lottie-react";
import loginAnimation from "../json/Login.json"

export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { register, handleSubmit, setValue } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in');
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged In', { id: toastId, duration: 1000 });
      navigate("/");
    } catch (err) {
      toast.error('Something Went Wrong', { id: toastId, duration: 1000 });
    }
  };

  // Set admin credentials
  const handleSetAdmin = () => {
    setValue("email", "jakya@gmail.com");
    setValue("password", "Test@1234");
  };

  // Set customer credentials
  const handleSetCustomer = () => {
    setValue("email", "customer@gmail.com");
    setValue("password", "customer123");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 container mx-auto">
      <div className="w-full max-w-md ml-8 hidden xl:block">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg mx-auto p-6 space-y-6 border rounded-lg shadow-md"
        autoComplete="off"
      >
        <div className="flex justify-center items-center gap-2">
          <h1 className="font-semibold">
            <span className="text-2xl text-teal-500">W</span>elcome to Login Page
          </h1>
          <Logo className="w-12 h-12 text-teal-300" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register("email")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
            {...register("password")}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSetAdmin}
            className="px-3 py-1 text-sm bg-teal-200 text-teal-700 rounded hover:bg-teal-300 transition"
          >
            Admin Pass
          </button>
          <button
            type="button"
            onClick={handleSetCustomer}
            className="px-3 py-1 text-sm bg-teal-200 text-teal-700 rounded hover:bg-teal-300 transition"
          >
            Customer Pass
          </button>
        </div>

        <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-700">
          Login
        </Button>

        <p className="px-6 text-sm text-center">
          Don't have an account yet?{" "}
          <Link to="/register" className="hover:underline text-teal-600">
            Sign up
          </Link>.
        </p>
      </form>
    </div>
  );
};
