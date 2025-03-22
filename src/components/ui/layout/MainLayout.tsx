import {  Layout } from "antd";
const { Header, Content} = Layout;

import {  Outlet } from "react-router";
import Sidebar from "./Sidebar";




const MainLayout = () => {
//   const dispatch = useAppDispatch();
//   const handleLogout =()=>{
//     dispatch(logout())
//   }

  return (
    <Layout style={{height :'100%'}}>
 <Sidebar></Sidebar>
    <Layout>
      <Header></Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
          
          }}
        >
<Outlet></Outlet>
        </div>
      </Content>
    
    </Layout>
  </Layout>
  )
}

export default MainLayout