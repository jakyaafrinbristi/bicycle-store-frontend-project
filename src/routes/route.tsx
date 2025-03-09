import App from "@/App";
import { Task } from "@/pages/Task";
import { User } from "@/pages/User";


import { createBrowserRouter } from "react-router";

const routes =createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children : [
            {
                index:true,
                element:<Task></Task>
            },
            {
                path:"users",
                element:<User></User> 
            },
      
        ]
    },
  
]);
export default routes;