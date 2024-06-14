import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import Register from "./Admin/Auth/Register/Register.jsx";
import ProductCategoryPage from "./pages/ProductCategoryPage/ProductCategoryPage.jsx";
import Login from "./Admin/Auth/Login/Login.jsx";
import ForgotPassword from "./Admin/Auth/forgotpassword/ForgotPassword.jsx";
import AdminHomePage from "./Admin/Pages/AdminHomePage.jsx";
import SingleUserPage from "./Admin/Pages/SingleUserPage.jsx";
import AddUser from "./Admin/Components/AddUser.jsx";
import AddProduct from "./Admin/Components/AddProduct.jsx";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();
  const showHeader = location.pathname == "/";
  return (
    <>
      <header>{showHeader && <Header />}</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpage" element={<AdminHomePage />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="product/:category" element={<ProductCategoryPage />} />
        <Route path="admin/register" element={<Register />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        {/*<Route path="about" element={<About />} />
        <Route path="comunity" element={<Comunity />} />
        <Route path="member" element={<Members />} />
        <Route path="merch" element={<Merch />} />
        <Route path="host_event" element={<HostEvent />} />
        <Route path="site_map" element={<SiteMap />} />
        <Route path="contact" element={<Contact />} />
        <Route path="merchandise" element={<Merchandise />} /> */}
        {/* Admin Routes  */}
        <Route path="/admin/home" element={<AdminHomePage />} />
        <Route path="/admin/home/user/:id" element={<SingleUserPage />} />
        {/* <Route path="/admin/home/product/:type/:id" element={<SingleProduct />} */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
