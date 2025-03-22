


import Root from "@/layouts/Root";
import { AboutUs } from "@/pages/AboutUs";
import AllBicycle from "@/pages/AllBicycle";
import Contact from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";

import { createBrowserRouter } from "react-router";
// import { ProtectecRoute } from "./ProtectecRoute";
import ProductDetails from "@/components/ProductDetails";

import { ProtectecRoute } from "./ProtectecRoute";
import MainLayout from "@/components/ui/layout/MainLayout";
import { routesGenerator } from "@/utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import { customerPaths } from "./customer.routes";


const routes =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,  
        children : [
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<AboutUs></AboutUs>
            },
            {
                path:"all-bicycle",
                element:<AllBicycle></AllBicycle>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            },
            {
                path:"bicycle/:id",
                element:<ProductDetails></ProductDetails>
            },

        ]
    },
    {
        path: "/admin",
        element:<ProtectecRoute role="admin"> <MainLayout></MainLayout></ProtectecRoute>,
        children:routesGenerator(adminPaths)
      },
    {
        path: "/customer",
        element:<ProtectecRoute role="customer"> <MainLayout></MainLayout></ProtectecRoute>,
        children:routesGenerator(customerPaths)
      },
    
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
]);

export default routes;