import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="foodrushlogo">FoodRush.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            earum quidem debitis ipsam ipsum molestias! Enim perferendis earum
            voluptas mollitia.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 5457842324</li>
            <li>foodrush@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 foodRush.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
