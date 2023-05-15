import React from "react";
// import CountUp from "react-countup";
const WhyUs = ({ type = "one" }) => {
  return (
    <div className="why-us">
      <div className="container">
        <div className="why-us-wrapper">
          <div className="why-us-item"  data-aos="fade-up"
            data-aos-duration="1000">
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
          <div className="why-us-item"  data-aos="fade-up"
            data-aos-duration="1500">
            <div className="why-us-img">
            <video
                className="video-controls"
                muted autoPlay loop
                src="https://res.cloudinary.com/ddu4x2opv/video/upload/v1684129841/musicpromotiontoday/Rotation_Animation_MPT_Fixed_Slowed_ohy4dk.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
