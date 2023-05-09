// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSectionLogoDesign from "@components/sections/FaqSectionLogoDesign";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import FeatureSection from "@components/sections/FeatureSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";

// Images

const Page16 = () => {
  return (
    <div id="page16">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">GIVE INSIGHT</p>
                <h1 className="banner-title">
                  <span className="focus">Get</span> Your Own Custom{" "}
                  <span className="focus">Branded </span>Logo
                </h1>
                <p className="banner-des">
                  The first step is getting into music industry is to design
                  your artist/band logo and branding guidelines. Your name is
                  the most important part of your brand so make sure you choose
                  something that will stand out from the crowd.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a">
                  <img src="/assets/home-16/img/4.png" alt="" />
                </div>
                <div className="animated ban-b">
                  <img src="/assets/home-16/img/3.png" alt="" />
                </div>
                <div className="animated ban-c">
                  <img src="/assets/home-16/img/2.png" alt="" />
                </div>
                <img src="/assets/home-16/img/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="16" />
      <VisionSection type="16" />
      <AboutSection type="16" />
      <PricingSection data={pricingData} type="16" />
      <ImageSection />
      <FeatureSection data={videoData} color="#24A5E7" />
      <EngageSection />
      {/* <VideoIntroSection type="16" /> */}
      <FaqSectionLogoDesign />
      <ReviewSection type="16" />
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
      " Logo & Branding Design is one of the most important things you will need to build a reputable brand in music industry. Our professional team of designers will design a perfect & unique typography-based logo in High Quality PNG PSD & PDF format completely from scratch which will help you to build a consistent brand identity for your artist & music band profile. We design our logos in vector format so you can resize them as large or as small as you’d like and they won’t become blurry, pixelated or distorted.",
  },
  {
    videoDetails:
      "With our standard logo design  package, we’ll create a completely custom made logo with uinique concepts based on your given instructions in high Resolution 3D Mockup & also with social media kit for your social handles which you can also  them for anything including billboards, business cards, album covers, tshirts ,websites, vehicle wraps, vinyl graphics and anything in between! ",
  },
  {
    videoDetails:
      "This service is specifically for Musicians, DJs, and Artists seeking music productions who are looking to get a complete branding package which includes logo , social media kit , merchandise design & complete branding guideline design that comes with top notch quality  designs & scalable & editable vector files oln PSD,SVG,WEBP & many other file format for diffrent kind social media & website platforms.",
  },
];

Page16.title = "Music Promotion Home";
Page16.layout = AppLayout;

export default Page16;
