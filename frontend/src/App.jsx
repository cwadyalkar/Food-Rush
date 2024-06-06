import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LoginPop from "./Components/Login/LoginPop";
import MyOrders from "./Pages/MyOrders/MyOrders";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<PlaceOrder />} path="/order" />
          <Route element={<ContactUs />} path="/contactus" />
          <Route element={<MyOrders />} path="/myorders" />
        </Routes>
        {/* Contact Page is remaining
            Navbar in Mobile Phone is Remaining
             */}
      </div>
      <Footer />
    </>
  );
};

export default App;
