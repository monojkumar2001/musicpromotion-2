import React, { useEffect, useState } from "react";
import BusinessItemCard from "../home/businesItem/BusinessItemCard";

function HowItWork({ type = "one" }) {
  const [isHovering, setIsHovering] = useState(1);
  return (
    <section className={`business-grow type-${type}`}>
      <div className="container">
        <div className="business-warrper">
          <div
            className="business-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              className={
                isHovering === 1 ? "business-items active" : "business-items"
              }
              onMouseOver={() => setIsHovering(1)}
            >
              <div className="business-item numbering">
                <span>01</span>
              </div>
              <BusinessItemCard
                title="Fill in your brief"
                description=" Launching  a new NFT DeFi Or fintech start up? Do you need a
              complete technical and marketing support? Tell us exactly what
              you need, and then leave the hard work to us."
              />
            </div>
            <div
              className={
                isHovering === 2 ? "business-items active" : "business-items"
              }
              onMouseOver={() => setIsHovering(2)}
            >
              <div className="business-item numbering">
                <span>02</span>
              </div>
              <BusinessItemCard
                title="Get confirmation"
                description="Our allotted team will make a wire-frame first, then we will
              show it to you for final confirmation."
              />
            </div>
            <div
              className={
                isHovering === 3 ? "business-items active" : "business-items"
              }
              onMouseOver={() => setIsHovering(3)}
            >
              <div className="business-item numbering before-none">
                <span>03</span>
              </div>
              <BusinessItemCard
                title="Manage your team"
                description="Our developers will start working to make the whole website
              functional with all the required designs and functionalities
              according to your given requirements."
              />
            </div>
          </div>
          <div
            className="business-right"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="business-img">
              <video className="video-controls" controls src=""></video>
            </div>
            <div className="business-btn">
              <button>How it works</button>
              <img src="./images/right-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
