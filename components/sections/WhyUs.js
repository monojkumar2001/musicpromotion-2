import React from "react";
import CountUp from "react-countup";
const WhyUs = ({ type = "one" }) => {
  return (
    <div className="why-us">
      <div className="container">
        <div className="why-us-wrapper">
          <div className="why-us-item">
            <h1 className="section-title">Why Us</h1>
            <p>
              Our design services include solutions to fit any budget starting
              at a moderate cost. Projects typically begin getting designs
              within a few hours. A experienced and dynamic team of designers is
              always available to create the ideal logo for your brand.{" "}
            </p>
            <p>
              You can request as many adjustments and changes as you like till
              you're pleased.
            </p>
            <p>
              Money back guarantee if our designs don't meet your standards and
              you don't receive the best one for your company.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-img">
              <img src="/assets/home-1/img/why-us.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
