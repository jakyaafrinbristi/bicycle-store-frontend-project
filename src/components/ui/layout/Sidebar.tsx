
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.routes";
import { customerPaths } from "@/routes/customer.routes";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { verifyToken } from "@/utils/verifyToken";
import { Layout, Menu, } from "antd";

const {  Sider } = Layout;
const userRole ={
    ADMIN : "admin",
    CUSTOMER: "customer",
   
    
}


 const Sidebar = () => {
    
    const token = useAppSelector(useCurrentToken);
      let user;
        if(token){
          user = verifyToken(token);
        }
    let sidebarItems;

    switch ((user as TUser)!.role) {
        case userRole.ADMIN:
          sidebarItems = sidebarItemsGenerator(adminPaths ,userRole.ADMIN)
            break;
        case userRole.CUSTOMER:
          sidebarItems = sidebarItemsGenerator(customerPaths ,userRole.CUSTOMER)
            break;
       
        default:
            break;
    }
    
   return (
    <Sider
    breakpoint="lg"
    collapsedWidth="0"
    style={{height: '100vh',position:'sticky',top:'0', left:'0'}}
   
  >
    <div style={{color:"white",textAlign:"center",height:'4rem',display:"flex", justifyContent:"center",alignItems:"center"}}>
      <h1>Bicycle Store</h1>
      </div>
    <Menu  theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
  </Sider>
   )
 }
 
 export default Sidebar