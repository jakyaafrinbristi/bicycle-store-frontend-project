
import { Button } from "@/components/ui/button"
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { verify } from "crypto";
import { useForm } from "react-hook-form"

export const Login = () => {
  const dispatch =useAppDispatch()
  const {register,handleSubmit} = useForm({
    defaultValues: {
      email: "jakya@gmail.com",
      password: "Test@1234",
    },
  });
  const [login,{data,error}]=useLoginMutation()
  // console.log(" data => ",data)
  // console.log(" error=> ",error)
  const onSubmit =async(data)=>{
    // console.log(data)
    const userInfo ={
      email:data.email,
      password:data.password,
    }
const res=await login(userInfo).unwrap();
const user =verifyToken(res.data)
console.log(user)
dispatch(setUser({user:user,token:res.data}))
console.log(res)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>
    <label htmlFor="email">Email:</label>
    <input className="border" type="text" id="email" { ...register('email')} />

    </div>
    <div>
    <label htmlFor="password">Password:</label>
    <input className="border" type="password" id="password"  { ...register('password')} />
    </div>
    <Button type="submit">Login</Button>   
    </form>

  )
}
