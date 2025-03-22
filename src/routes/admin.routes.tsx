
import ManageOrder from "@/pages/Admin/AdminDAshboard/ManageOrder";
import ManageProduct from "@/pages/Admin/AdminDAshboard/ManageProduct";
import ManageUser from "@/pages/Admin/AdminDAshboard/ManageUsers";








export const  adminPaths =[
  
   
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
                element:<ManageProduct></ManageProduct>
            },
            {
                name:'Manage Order',
                path:'order',
                element:<ManageOrder></ManageOrder>
            },
          
            
           
        ]
      },
    
   
    ]