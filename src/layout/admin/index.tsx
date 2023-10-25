// import React from 'react'

// const AdminLayout = () => {


//   return (
// <div>
// <div className="min-h-full">
// <nav className="bg-gray-800">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex items-center">
//                         <div className="flex-shrink-0">
//                             <a href="/"><img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /></a>
//                         </div>
//                         <div className="hidden md:block">
//                             <div className="ml-10 flex items-baseline space-x-4">
//                                 <NavLink to="/admin" className="navlinkadmin bg-gray-900  hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Trang Chủ</NavLink>

//                                 <NavLink to="/admin/category" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Danh Mục</NavLink>

//                                 <NavLink to="/admin/product" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản Phẩm</NavLink>

//                                 <NavLink to="/admin/bill" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Đơn Hàng</NavLink>

//                                 <NavLink to="/admin/user" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tài Khoản</NavLink>

//                                 <NavLink to="/admin/voucher" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Voucher</NavLink>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav >
//             <div>
//             <div>
//             <header className="bg-white shadow">
//                 <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
//                     <h1 className="text-3xl font-bold text-gray-900">Quản Trị Sản Phẩm</h1>
//                 </div>
//             </header>
//             <main>
//                 <div className="max-w-7xl mx-auto py-6 ">
//                     <div className="flex flex-col">
//                         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                             <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//                                 <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                                     <table className="min-w-full divide-y divide-gray-200">
//                                         <thead className="bg-gray-50">
//                                             <tr>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     STT
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Tên Sản Phẩm
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Ảnh
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Nội Dung
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Danh Mục
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Sale
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Giá
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Giá Cũ
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                                     Trạng Thái
//                                                 </th>
//                                                 <th scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
//                                                     <Link to="/admin/product/add"
//                                                         className="text-green-600 hover:text-green-900">Thêm Mới</Link>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="bg-white divide-y divide-gray-200">

                                           
//                                                 <tr >
//                                                     <td className="px-6 py-4 whitespace-nowrap">1</td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">dsadsa</td>
//                                                     <td className="px-6 py-4 whitespace-nowrap"><img src="" alt=""
//                                                         width="100" /></td>
//                                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  "><span
//                                                         className="">saSAsaS</span></td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                         DSADSADSA
//                                                     </td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                        2321321
//                                                     </td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">432432432</td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">432432432
//                                                     </td>
                                                    
//                                                         <td className="px-6 py-4 whitespace-nowrap bg-green-500 text-white font-bold">Còn Hàng</td>
                                                   
//                                                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                                         <Link to={ `` }
//                                                             className="text-indigo-600 hover:text-indigo-900 font-bold inline-block mx-[5px]">Cập Nhật</Link>
//                                                         <button 
//                                                             className="text-red-600 hover:text-red-900 font-bold inline-block">Xóa</button>
//                                                     </td>
//                                                 </tr>
                                           

//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main >
//         </div >
//             </div>
//         </div>
// </div>


//   )
// }

// export default AdminLayout

 import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
//  import { Link, NavLink } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout; const AdminLayout = () => {   const {     token: { colorBgContainer },   } = theme.useToken();   return (     <>  <Layout>       <Sider         breakpoint="lg"         collapsedWidth="0"         onBreakpoint={(broken) => {           console.log(broken);         }}         onCollapse={(collapsed, type) => {           console.log(collapsed, type);         }}       >         <div className="demo-logo-vertical" />         <Menu           theme="light"           mode="inline"           defaultSelectedKeys={['4']}           items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(             (icon, index) => ({               key: String(index + 1),               icon: React.createElement(icon),               label: `nav ${index + 1}`,             }),           )}         />
       </Sider>
       <Layout>
         <Header style={{ padding: 0, background: colorBgContainer}}
                 />
         <Content style={{ margin: '24px 16px 0' }}>
           <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
         </Content>
         <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
       </Layout>
     </Layout>
    
    
     </>


   )
 }

 export default AdminLayout