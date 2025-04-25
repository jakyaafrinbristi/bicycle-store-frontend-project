import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode } from "react";
import { Navigate } from "react-router";
import { JwtPayload } from "jsonwebtoken";

type ProtectecRouteProps = {
  children: ReactNode;
  role?: string;
};

interface MyJwtPayload extends JwtPayload {
  role: string;
  email: string;
  name?: string;
}

export const ProtectecRoute = ({ children, role }: ProtectecRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  let user: MyJwtPayload | null = null;
  if (token) {
    user = verifyToken(token) as MyJwtPayload;
  }

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};
