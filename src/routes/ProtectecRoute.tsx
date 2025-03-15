import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react"
import { Navigate } from "react-router";



export const ProtectecRoute = ({children} : {children : ReactNode}) => {
    const token = useAppSelector(useCurrentToken);
    if(!token){
        return <Navigate to="/login" replace={true}/>
    }
  return children;
}
