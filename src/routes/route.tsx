


import Root from "@/layouts/Root";
import { AboutUs } from "@/pages/AboutUs";
import AllBicycle from "@/pages/AllBicycle";
import Contact from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { createBrowserRouter } from "react-router";
import { ProtectecRoute } from "./ProtectecRoute";
import ProductDetails from "@/components/ProductDetails";

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
                element:<ProtectecRoute><AllBicycle></AllBicycle></ProtectecRoute>
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
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
]);

export default routes;