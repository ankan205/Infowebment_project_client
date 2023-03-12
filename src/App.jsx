
import React, { useContext }
 from "react";

import {
    Routes , Route,
    Link
  } from "react-router-dom";


  import Login from "./pages/login/Login";
  import Register from "./pages/register/Register";
  import AdminRegister from "./pages/adminregister/AdminRegister"; 
  import AdminLogin from "./pages/adminlogin/AdminLogin"; 
  import Upload from "./components/upload/Upload";
  import TopBar from "./components/topbar/TopBar";
  
  import { Context } from "./context/Context";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import SingleProductPage from "./pages/singleProduct/SingleProduct";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import VideosList from "./pages/videolist/VideosList";

  const App=()=>{
    const {user}= useContext(Context); 
 
     return (
         <>
             <TopBar/>
             <Routes>
                 <Route path="/" element={<Home/>} />

                 <Route path="/register" element={ <Register/>} />
                 <Route path="/login" element={  <Login/>} />
                 <Route path="/admin/register" element={ <AdminRegister/>} />
                 <Route path="/admin/login" element={  <AdminLogin/>} />
                 {/* <Route path="/write" element={user ? <Write/> :<Register/>} />
                 <Route path="/setting" element={user ? <Setting/> :<Register/>} />
                 <Route path="/post/:postId" element={<Single/>} /> */}
                 <Route path="/upload" element={  <Upload/>} />
                 <Route path="/watchvideos" element={<VideosList/>} />

                 <Route path="/admin/product/form" element={  <Product/>} />
                 <Route path="/product/:productId" element={<SingleProductPage/>} />
                 <Route path="/product/placeorder/:productId" element={<PlaceOrder/>} />

             </Routes>
         </>
     )
 }

export default App;