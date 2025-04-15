
import CustomerDashboard from "@/pages/Customer/CustomerDashboard";
import CustomerOrders from "@/pages/Customer/CustomerOrders/CustomerOrders";
import ManageProfile from "@/pages/Customer/ManageProfile/ManageProfile";



export const customerPaths = [
    {
        name:'Dashboard',
        path:'dashboard', 
        element:<CustomerDashboard></CustomerDashboard>
    },
    {
            name:'Customer Dashboard',
            children:[
         
                    {
                            name:'Customer Orders',
                            path:'customerOrders', 
                            element:<CustomerOrders></CustomerOrders>                            
                            },
                    {
                            name:'Manage Profile',
                            path:'manageProfile', 
                            element:<ManageProfile></ManageProfile>                          
                            },
               
            ]
          },
        
   
   
     

]