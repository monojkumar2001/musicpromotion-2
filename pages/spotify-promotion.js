// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSectionSoundCloud from "@components/sections/FaqSectionSoundCloud";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";
import HowItWork from "@components/sections/HowItWork";

// Images

const Page1 = () => {
  return (
<>
        <div className="page-1">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Organic & Genre</p>
                <h1 className="banner-title">
                  Targeted <span className="focus">Spotify</span> Promotion
                </h1>
                <p className="banner-des">
                  Get your songs heard by thousands of music lovers. Grow your
                  fanbase.Get featured in hot celebrity curator playlists and
                  skyrocket your Spotify channel popularity.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a glass-bg">
                  <p className="animate-title">Follower Growth</p>
                  <div className="count-area">
                    <h4>15.7k</h4>
                    <p>New Followers</p>
                  </div>
                  <img src="/assets/home-1/img/2.png" alt="" />
                </div>
                <img
                  src="/assets/home-1/img/3.png"
                  alt=""
                  className="animated ban-b"
                />
                <img
                  src="/assets/home-1/img/4.png"
                  alt=""
                  className="animated ban-c"
                />

                <div className="animated ban-d glass-bg">
                  <div className="animated-card">
                    <p className="animate-title-lg">
                      John Doe <br /> Data
                    </p>
                    <div className="animated-inside">
                      <p>New Growth</p>
                      <h4>6,000</h4>
                    </div>
                    <img
                      src="/assets/home-1/img/5.png"
                      className="joiner-img"
                    />
                  </div>
                </div>

                <div className="animated ban-e glass-bg">
                  <div className="experience-count">
                    <h4>20+</h4>
                    <p>years of Experience </p>
                  </div>
                </div>
                <img
                  src="/assets/home-1/img/7.png"
                  alt=""
                  className="animated ban-f"
                />
                <img
                  src="/assets/home-1/img/1.png"
                  alt=""
                  className="ban-image"
                />
              </div>
            </div>
          </div>
        </div>

        </div>
      <ServiceSection type="two" />
      <VisionSection  type="two"/>
      <AboutSection type="two" />
      <PricingSection data={pricingData} type="two" />
      <ImageSection />
      <EngageSection />
      <HowItWork/>
      {/* <FaqSectionSoundCloud type="two"  /> */}
      {/* <ReviewSection type="two" /> */}
      </>
  );
};

const pricingData = [
  {
    package_type: "basic",
    package_dis:"Crafted for high touch sales teams",
    cur_price: "69",
    package_lead: "2000",
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
    package_dis:"Crafted for high touch sales teams",
    cur_price: "119",
    package_lead : "2000",
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
    package_dis:"Crafted for high touch sales teams",
    cur_price: "299",
    package_lead: "2000",
    percent: "50",
    includes: [
      "Reach 100k Audience Base",
      "Distribution To 550 Curators",
      "Distribution To 550 Playlists",
      "Distribution To 550 Radios Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "9-10 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
  },
];

Page1.title = "Music Promotion Home";
Page1.layout = AppLayout;

export default Page1;
