
import AdminDasboard from "@/pages/Admin/AdminDAshboard/AdminDasboard";
import ManageOrder from "@/pages/Admin/AdminDAshboard/ManageOrder";
import ManageProducts from "@/pages/Admin/AdminDAshboard/ManageProducts";

import ManageUser from "@/pages/Admin/AdminDAshboard/ManageUsers";








export const  adminPaths =[
    {
        name: 'Dashboard',
        path: 'dashboard',
        element:<AdminDasboard></AdminDasboard>
    
      },
   
      {
        name:'Admin Dashboard',
        children:[
            {
                name:'Manage Users',
                path:'manage',
                element:<ManageUser></ManageUser>
            },
            {
                name:'Manage Product',
                path:'product',
                element:<ManageProducts></ManageProducts>
            },
            {
                name:'Manage Order',
                path:'order',
                element:<ManageOrder></ManageOrder>
            },
          
            
           
        ]
      },
    
   
    ]