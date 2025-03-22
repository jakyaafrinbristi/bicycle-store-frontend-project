import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode } from "react"
import { Navigate } from "react-router";

type ProtectecRouteProps = {
  children: ReactNode;
  role: string; 
};

export const ProtectecRoute = ({ children, role }: ProtectecRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if(token){
    user = verifyToken(token);
  }
  console.log(user)
  // const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  if(role !== undefined && role !== user ?. role){
    dispatch(logout());
    return <Navigate to='/login' replace={true}></Navigate>
  }

  if(!token){
      return <Navigate to='/login' replace={true}></Navigate>
  }

return children;
}
