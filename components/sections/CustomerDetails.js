import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function CustomerDetails() {
  const router = useRouter();
  const [isActive, setActive] = useState("true");

  const ToggleActive = () => {
    setActive(!isActive);
  };
  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    error_log: [],
  });

  const inputHandle = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("first_name", inputValue.first_name);
    formData.append("last_name", inputValue.last_name);
    formData.append("role", inputValue.role);
    formData.append("email", inputValue.email);
    formData.append("phone", inputValue.phone);
    formData.append("password", inputValue.password);
    formData.append("password_confirmation", inputValue.password_confirmation);

    axios
      .post("/api/user-info", formData)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.msg);
          localStorage.setItem("userInfo", JSON.stringify(inputValue));
          router.push("/payment");
        } else {
          setInputValue({
            ...inputValue,
            error_log: res.data.error,
          });
          console.log(res.data.error);
        }
      })
      .catch((err) => err);
  };

  return (
    <div className="customer-details-wrapper">
      <div className="customer-login-con mb-5">
        <div className="login-customer d-flex align-items-center gap-2">
          <p>Returning customer?</p>
          <button className="login-click-link" onClick={ToggleActive}>
            {" "}
            Click here to login
          </button>
        </div>
        <div className={`${isActive ? "activeLogin" : ""} login-info`}>
          <p>
            If you have shopped with us before, please enter your details below.
            If you are a new customer, please proceed to the Billing section.
          </p>
          <form action="">
            <div className="login-input d-flex">
              <div className="input-login-item">
                <label htmlFor="">Username or email *</label>
                <input type="text" />
              </div>
              <div className="input-login-item">
                <label htmlFor="">Password *</label>
                <input type="text" />
              </div>
            </div>
            <div className="login-submit-item d-flex algin-items-center justify-content-between mb-3">
              <button className="login-submit">Login</button>
              <div className="remember-item d-flex algin-items-center gap-2">
                <input type="checkbox" className="check-box" />
                <span>Remember me</span>
              </div>
            </div>
            <Link href="">Lost your password?</Link>
          </form>
        </div>
      </div>
      <form onSubmit={submitForm}>
        <div className="selected-service-header-left">
          <span>02</span>
          <div className="selected-title">
            <h1>Customer Details </h1>
          </div>
        </div>

        <div className="customer-form-input-con">
          <div className="customer-fullname">
            <div className="customer-from-input">
              <label htmlFor="">First name</label>
              <input
                type="text"
                name="first_name"
                value={inputValue.first_name}
                error={inputValue.error_log.first_name}
                onChange={inputHandle}
                id=""
              />
              <small style={{ color: "red" }}>
                {inputValue.error_log.first_name}
              </small>
            </div>
            <div className="customer-from-input">
              <label htmlFor="">Last name</label>
              <input
                type="text"
                name="last_name"
                value={inputValue.last_name}
                error={inputValue.error_log.last_name}
                onChange={inputHandle}
                id=""
              />
              <small style={{ color: "red" }}>
                {inputValue.error_log.first_name}
              </small>
            </div>
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Your Role</label>
            <input
              type="text"
              name="role"
              value={inputValue.role}
              error={inputValue.error_log.role}
              onChange={inputHandle}
              id=""
            />
            <small style={{ color: "red" }}>{inputValue.error_log.role}</small>
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={inputValue.email}
              error={inputValue.error_log.email}
              onChange={inputHandle}
              id=""
            />
            <small style={{ color: "red" }}>{inputValue.error_log.email}</small>
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Cellphone</label>
            <input
              type="text"
              name="phone"
              value={inputValue.phone}
              error={inputValue.error_log.phone}
              onChange={inputHandle}
              id=""
            />
            <small style={{ color: "red" }}>{inputValue.error_log.phone}</small>
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={inputValue.password}
              error={inputValue.error_log.password}
              onChange={inputHandle}
              id=""
            />
            <small style={{ color: "red" }}>
              {inputValue.error_log.password}
            </small>
          </div>
          <div className="customer-from-input">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              value={inputValue.password_confirmation}
              error={inputValue.error_log.password_confirmation}
              onChange={inputHandle}
              id=""
            />
            <small style={{ color: "red" }}>
              {inputValue.error_log.password}
            </small>
          </div>
          <div className="customer-form-input-submit">
            <div className="customer-form-content">
              <input type="checkbox" value="1" name="allow" onChange={inputHandle}/>
              <p>
                By creating an account, you agree to our Terms of Services and
                Privacy Policy. Already a member? Sign In
              </p>
            </div>
            <div className="customer-form-submit-btn">
              <button type="submit">Continue To payment</button>
              {/* <Link href="/payment">
               </Link> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerDetails;
