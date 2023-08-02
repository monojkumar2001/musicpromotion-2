import AppLayout from "../components/layout/AppLayout";
import PaymentInformation from "../components/sections/PaymentInformation";
import OrderPlan from "../components/sections/OrderPlan";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51L3bi8F2EaVIlcpBUq2As6xjGYv9mOTnuTVSBpiD2y8TF6ZLTL60FXyBK03RIbOGT7M1yrbO4J32V1aU1bSQXlYI00L14EHGL7"
);

function Payment() {
  const [items, setItems] = useState({
    type: "",
    service_id: "",
    service_title: "",
    service_image: "",
    unit_price: "",
    service_price: "",
    slider_value: "",
    userInfo: {},
  });

  useEffect(() => {
    setItems({
      ...items,
      service_id: localStorage.getItem("service_id"),
      service_title: localStorage.getItem("service_title"),
      service_image: localStorage.getItem("service_image"),
      unit_price: localStorage.getItem("unit_price"),
      service_price: localStorage.getItem("service_price"),
      slider_value: localStorage.getItem("slider_value"),
      userInfo: localStorage.getItem("auth_token") ? localStorage.getItem("auth_token") : JSON.parse(localStorage.getItem("userInfo")),
      type: localStorage.getItem("auth_token") ? "1" : "0",
    });
    console.log(localStorage.getItem("userInfo"));
  }, []);

  return (
    <>
      <div className="order-details payment-page">
        <div className="container">
          <div className="order-details-wrapper">
            <div className="order-details-left">
              <Elements stripe={stripePromise}>
                <PaymentInformation amount={2000} items={items} />
              </Elements>
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
Payment.layout = AppLayout;
export default Payment;
