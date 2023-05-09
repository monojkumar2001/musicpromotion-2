// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSection from "@components/sections/FaqSection";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import FaqSectionYoutube from "@components/sections/FaqSectionYoutube";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";

// Images

const Page14 = () => {
  return (
    <div id="page14">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Stunning</p>
                <h1 className="banner-title">
                  Targeted <span className="focus">Youtube</span>{" "}
                  <span className="title-bg">Promotion</span>
                </h1>
                <p className="banner-des">
                  Get your songs heard by thousands of people. Grow your
                  Followers.Get Featured in hot channels and skyrocket your
                  artist populartity
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a">
                  <img src="/assets/home-14/img/2.png" alt="" />
                </div>
                <img src="/assets/home-14/img/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="14" />
      <VisionSection type="14" />
      <AboutSection type="14" />
      <PricingSection data={pricingData} type="14" />
      <ImageSection />
      <EngageSection />
      {/* <VideoIntroSection type="14" /> */}
      <FaqSectionYoutube />
      <ReviewSection type="14" />
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

Page14.title = "Music Promotion Home";
Page14.layout = AppLayout;

export default Page14;
