import add_icons from "../../assets/admin_assets/add_icon.png"
import order_icons from "../../assets/admin_assets/order_icon.png"
import "./Sidebar.css"
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={add_icons} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={order_icons} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/order" className="sidebar-option">
          <img src={order_icons} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar