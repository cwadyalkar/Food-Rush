import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Orders.css";
import { useEffect } from "react";
import parcel_icon from "../../assets/admin_assets/parcel_icon.png";
// eslint-disable-next-line react/prop-types
const Order = ({ url }) => {
  const [orders, setorders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setorders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p> {order.address.street + ", "}</p>
                <p>
                  {" "}
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>

            <p>Items: {order.items.length}</p>
            <p>{order.amount}/-</p>
            <select
              value={order.status}
              onChange={(event) => statusHandler(event, order._id)}
            >
              <option className="option" value="Food Processing">
                Food Processing
              </option>
              <option className="option" value="Out For Delivery">
                Out For Delivery
              </option>
              <option className="option" value="Delivered">
                Delivered
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
