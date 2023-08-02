import AppLayout from "../components/layout/AppLayout";
import SelectedService from "../components/sections/SelectedService";
import CustomerDetails from "../components/sections/CustomerDetails";
import ProceedToPayment from "../components/sections/ProceedToPayment";
import OrderPlan from "../components/sections/OrderPlan";
import React, { useEffect, useState } from "react";

function OrderDetails() {
  const [auth, setAuth] = useState('')
  const [items, setItems] = useState({
    service_id: "",
    service_title: "",
    service_image: "",
    service_price: "",
    slider_value: "",
  });

  useEffect(() => {
    setItems({
      ...items,
      service_id: localStorage.getItem("service_id"),
      service_title: localStorage.getItem("service_title"),
      service_image: localStorage.getItem("service_image"),
      service_price: localStorage.getItem("service_price"),
      slider_value: localStorage.getItem("slider_value"),
    });
    setAuth(localStorage.getItem("auth_token"))
  }, []);

  return (
    <>
      <div className="order-details">
        <div className="container">
          <div className="order-details-wrapper">
            <div className="order-details-left">
              <SelectedService items={items} />
              {
                auth ? 
                <ProceedToPayment />
                :
                <CustomerDetails />
              }
            </div>
            <div className="order-details-right">
              <OrderPlan items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
OrderDetails.layout = AppLayout;
export default OrderDetails;
