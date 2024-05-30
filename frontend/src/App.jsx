import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import ProductCategoryPage from "./pages/ProductCategoryPage/ProductCategoryPage.jsx";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  // Define a variable to track whether to show the header or not
  const showHeader = location.pathname == '/';

  return (
    <>
      <header>{showHeader && <Header />}</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="product/:cat" element={<ProductCategoryPage />} />
      { /* <Route path="studio" element={<Studio />} />
        <Route path="cafe" element={<Cafe />} />
        <Route path="about" element={<About />} />
        <Route path="comunity" element={<Comunity />} />
        <Route path="member" element={<Members />} />
        <Route path="merch" element={<Merch />} />
        <Route path="host_event" element={<HostEvent />} />
        <Route path="site_map" element={<SiteMap />} />
        <Route path="contact" element={<Contact />} />
        <Route path="merchandise" element={<Merchandise />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
