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

const Page6 = () => {
  return (
    <div id="page6">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Get the Most</p>
                <h1 className="banner-title">
                  Most Snappy <span className="focus">Cover Art</span>
                </h1>
                <p className="banner-des">
                  Our aim is to deliver Artwork Design that will fit your
                  overall brand but match the frequency of genre and vibe of
                  your music.
                </p>
                <a href="#" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a">
                  <img src="/assets/home-6/img/2.png" alt="" />
                </div>
                <div className="animated ban-b">
                  <img src="/assets/home-6/img/icon/2.png" alt="" />
                </div>
                <div className="animated ban-c">
                  <img src="/assets/home-6/img/icon/3.png" alt="" />
                </div>
                <img
                  src="/assets/home-6/img/1.png"
                  className="ban-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="six" />
      <VisionSection type="six" />
      <AboutSection type="six" />
      <PricingSection data={pricingData} type="six" />
      <ImageSection />
      <FeatureSection data={videoData} color="#FE5476" />
      <EngageSection />
      <VideoIntroSection type="six" />
      <FaqSection />
      <ReviewSection type="six" />
    </div>
  );
};

const pricingData = [
  {
    package_type: "basic",
    cur_price: "69",
    off_price: "139 ",
    percent: "50",
    includes: [
      "Front Cover Design",
      "1,600 pixels",
      "Source File",
      "Commercial Use",
      "Up to 2 Revisons",
      "Start Within 24 hours",
      "2-3 Days Delivery",
    ],
    details:
      "",
  },
  {
    package_type: "Standard",
    cur_price: "119",
    off_price: "239",
    percent: "50",
    includes: [
      "Front & Back Cover Design",
      "2,500 pixels",
      "Source File",
      "Commercial Use",
      "Up to 3 Revisons",
      "Start Within 24 hours",
      "5-7 Days Delivery",
    ],
    details:
      "",
  },
  {
    package_type: "premium",
    cur_price: "299",
    off_price: "499",
    percent: "50",
    includes: [
      "Front & Back Cover Design",
      "3,000 pixels",
      "Source File",
      "Commercial Use",
      "Audio Visualizer Video",
      "Up to 5 Revisons",
      "Start Within 24 hours",
      "5-7 Days Delivery",
    ],
    details:
      "",
  },
];

const videoData = [
  {
    videoDetails:
      "As a music artist artwork for your new single, EP, or Album is a must for the project’s success. If you are planning to distribute your latest music on digital platforms & social media platforms, you will need a right & proper cover artwork for the success of your music career.  Our aim is to deliver Artwork Design that will be tailored to fit your overall music genre & vibe of your music. We always intend to deliver the highest quality files and if you have specific or custom instructions, we can also handle it for you. We make sure you can share your artwork online, but we also deliver the quality you need to print your artwork if you have any plans to do so. Get in touch with us at and one of our Project managers will follow up with you as per your need.",
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

Page6.title = "Music Promotion Home";
Page6.layout = AppLayout;

export default Page6;
