import React from "react";
import Link from "next/link";
const Services = ({ type = "one" }) => {
  return (
    <div className="services"  data-aos="fade-up"
    data-aos-duration="1000">
      <div className="container">
        <div className="title-wrapper">
            <h1 className="section-title">Services</h1>
            <p className="sec-des">
            Prepare to launch a billion-dollar start-up on the NFT Fintech and Crypto Platform with its new, exciting features and capabilities.
            </p>
        </div>
        <div className="services-wrapper">
          <div className="services-card" >
            <div className="services-icon">
              <img src="/assets/home-1/img/service-1.svg" alt="" />
            </div>
            <h3>Spotify Promotion</h3>
            <p className="service-dis">
            We offer Spotify campaigns to drive in followers, plays and increase brand awareness for artists. Contact us to get started with our music promotion.
            </p>
            <Link href='/spotify-promotion'><button className="learn-more-btn">Learn More</button></Link>
          </div>
          <div className="services-card">
            <div className="services-icon">
              <img src="/assets/home-1/img/service-4.svg" alt="" />
            </div>
            <h3> Soundcloud Promotion</h3>
            <p className="service-dis">
            Our SoundCloud promotional services helps musicians build their brand and drive in attention, new fans, and followers. Contact us for custom campaigns.
            </p>
            <Link href='/soundcloud-promotion'><button className="learn-more-btn">Learn More</button></Link>
          </div>
          <div className="services-card">
            <div className="services-icon">
              <img src="/assets/home-1/img/service-3.svg" alt="" />
            </div>
            <h3>Instagram Promotion</h3>
            <p className="service-dis">
            Promoting hashtags and using SEO techniques to get posts seen and seen by real users, high level accounts, and verified accounts will help Instagram reward popularity.
            </p>
            <Link href='/instagram-promotion'><button className="learn-more-btn">Learn More</button></Link>
          </div>
          <div className="services-card">
            <div className="services-icon">
              <img src="/assets/home-1/img/service-2.svg" alt="" />
            </div>
            <h3>Youtube Promotion</h3>
            <p className="service-dis">
            Utilize our organic YouTube Promotion packages to boost your views naturally.To promote your tracks, we only employ natural approaches.
            </p>
            <Link href='/youtube-promotion'><button className="learn-more-btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
