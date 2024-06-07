import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import bag_icon from "../../assets/frontend_assets/bag_icon.png";
import logout from "../../assets/frontend_assets/logout_icon.png";
import { useState, useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";
import profile_icon from "../../assets/frontend_assets/userimg.png";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/">
        {/* <img src={assets.logo} alt="" className="logo" />
         */}
        <h2 className="foodrushlogo">FoodRush.</h2>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          Mobile
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>{" "}
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>SignIn</button>
        ) : (
          <div className="navbar-profile">
            {/* <i className="fa-solid fa-user profile"></i> */}
            <div className="profile">
              <img src={profile_icon} alt="" />
            </div>
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
