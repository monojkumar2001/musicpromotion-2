import React from "react";
const Services = ({ type = "one" }) => {
  return (
    <div className="services">
      <div className="container">
        <div className="title-wrapper">
            <h1 className="section-title">Services</h1>
            <p className="sec-des">
            Prepare to launch a billion-dollar start-up on the NFT Fintech and Crypto Platform with its new, exciting features and capabilities.
            </p>
        </div>
        <div className="services-wrapper">
          <div className="services-card">
            <div className="services-icon">
              <img src="/assets/home-1/img/service-1.svg" alt="" />
            </div>
            <h3>Spotify Promotion</h3>
            <p className="service-dis">
              With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
              NFT minting platform or marketplace without any coding or
              technical
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="services-card">
            <div className="services-icon">
              <img src="/assets/home-1/img/service-2.svg" alt="" />
            </div>
            <h3>Youtube Promotion</h3>
            <p className="service-dis">
              With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
              NFT minting platform or marketplace without any coding or
              technical
              
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="services-card">
            <div className="services-icon">
              <img src="/assets/home-1/img/service-3.svg" alt="" />
            </div>
            <h3>Instagram Promotion</h3>
            <p className="service-dis">
              With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
              NFT minting platform or marketplace without any coding or
              technical
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="services-card">
            <div className="services-icon">
              <img src="/assets/home-1/img/service-4.svg" alt="" />
            </div>
            <h3>Soundcloud Promotion</h3>
            <p className="service-dis">
              With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
              NFT minting platform or marketplace without any coding or
              technical
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
