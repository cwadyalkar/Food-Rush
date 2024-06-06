import "./Navbar.css"
import logo from "../../assets/admin_assets/logo.png";
import profileimg from "../../assets/admin_assets/profile_image.png";
const Navbar = () => {
  return (
    <div className="navbar">
     <h1 className="foodrushlogo">FoodRush.</h1>
      <img src={profileimg} alt="" className="profile" />
    </div>
  );
};

export default Navbar;
