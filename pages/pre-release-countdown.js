// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSection from "@components/sections/FaqSection";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import FeatureSection from "@components/sections/FeatureSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";

// Images

const Page12 = () => {
  return (
    <div id="page12">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">BOOST YOUR NEXT</p>
                <h1 className="banner-title">
                  Upcoming <span className="focus">Release</span> with Pre Save
                </h1>
                <p className="banner-des">
                  Pre-Save For Your Upcoming Release is the best way to make
                  your fans more excited for your new album/track. You’ll be
                  able to build hype around your release with a perfect visual
                  introduction on showbiz communities.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a">
                  <img src="/assets/home-12/img/1.png" alt="" />
                </div>
                <div className="animated ban-b">
                  <img src="/assets/home-12/img/2.png" alt="" />
                </div>
                <div className="animated ban-c">
                  <img src="/assets/home-12/img/3.png" alt="" />
                </div>
                <div className="animated ban-d">
                  <img src="/assets/home-12/img/4.png" alt="" />
                </div>
                <img
                  src="/assets/home-12/img/5.png"
                  className="ban-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="12" />
      <VisionSection type="12" />
      <AboutSection type="12" />
      <PricingSection data={pricingData} type="12" />
      <ImageSection />
      <FeatureSection data={videoData} color="#D44F4A" />
      <EngageSection />
      <VideoIntroSection type="12" />
      <FaqSection />
      <ReviewSection type="12" />
    </div>
  );
};

const pricingData = [
  {
    package_type: "basic",
    cur_price: "69",
    off_price: "139",
    percent: "50",
    includes: [
      "Reach 10k Audience Base",
      "Distribution To 100 Curators",
      "Distribution To 100 Playlists",
      "Distribution To 100 Radio Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "2-3 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
  },
  {
    package_type: "Standard",
    cur_price: "119",
    off_price: "239",
    percent: "50",
    includes: [
      "Reach 30k Audience Base",
      "Distribution To 250 Curators",
      "Distribution To 250 Playlists",
      "Distribution To 250 Radio Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "3-5 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 15,000 streams and 1800 followers organically",
  },
  {
    package_type: "premium",
    cur_price: "299",
    off_price: "499",
    percent: "50",
    includes: [
      "Reach 100k Audience Base",
      "Distribution To 550 Curators",
      "Distribution To 550 Playlists",
      "Distribution To 550 Radio Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "9-10 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
  },
];

const videoData = [
  {
    videoDetails:
      "Most of the time you want to make a music video but don’t know where to start. We will help you get your video edited, and we do it in a professional manner & affordable pricing with high quality results.Take your video to the next level by using our professional video editing service in a with our basic music video editing package which comes with basic Cuts, Slow-motion transition, effects, color correction & outro intro with 120 seconds running time.",
  },
  {
    videoDetails:
      "With our standard music video package, we’ll take care of everything from color correction to adding slow motion effects with transitions green screen removal, sharpening, trippy Effects, adding film grains, video conversations adding cinemascope bar etc.Themaximum video duration will be up to 240 seconds running time & 1000p video quality. So you just need to upload & Send us your raw footage and let us do the rest.",
  },
  {
    videoDetails:
      "Don’t settle for anything less than what you deserve when it comes to promoting your new tack - let us create a high-quality, professional looking music video with advanced green effects, trippy effects, sky effects, skeleton effects, Sound Design & Mixing & many more everything included as per your need with up to 5 Minutes Running Time & 4k Resolution.",
  },
];

Page12.title = "Music Promotion Home";
Page12.layout = AppLayout;

export default Page12;
