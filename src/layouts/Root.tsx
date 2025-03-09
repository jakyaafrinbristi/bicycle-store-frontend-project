import { Footer } from "@/components/ui/layout/Footer";
import Navbar from "@/components/ui/layout/Navbar";
import { Outlet } from "react-router";


export default function Root() {
  return (
    <div>
    <Navbar></Navbar>
    <div className="min-h-[calc(100vh-140px)]"> 
         <Outlet></Outlet>
         </div>
    <Footer></Footer>
   </div>
  )
}
