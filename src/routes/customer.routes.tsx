


import CustomerOrders from "@/pages/Customer/CustomerOrders/CustomerOrders";
import CustomerOverview from "@/pages/Customer/CustomerOverview";
import CustomerPassword from "@/pages/Customer/CustomerPassword/CustomerPAssword";
import ManageProfile from "@/pages/Customer/ManageProfile/ManageProfile";



export const customerPaths = [
    {
        name:'Overview',
        path:'dashboard', 
        element:<CustomerOverview></CustomerOverview>
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
                    {
                            name:'Customer Password',
                            path:'customerPassword', 
                            element:<CustomerPassword></CustomerPassword>                     
                            },
               
            ]
          },
        
   
   
     

]