// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSectionInstagram from "@components/sections/FaqSectionInstagram";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";
// Images
// import "./color/instagram.css";

const Page3 = () => {
  return (
    <div id="page3">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Global Discovery</p>
                <h1 className="banner-title">
                  Targeted <span className="focus">Instagram</span>{" "}
                  <span className="shape">Promotion</span>
                </h1>
                <p className="banner-des">
                  Boost Instagram Profile to the new height among thousands of
                  followers. We will only promote your instagram profie to
                  connect with your target audiences.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <img src="/assets/home-3/img/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="three" />
      <VisionSection type="three" />
      <AboutSection type="three" />
      <PricingSection data={pricingData} type="three" />
      <ImageSection />
      <EngageSection />
      {/* <VideoIntroSection type="three" /> */}
      <FaqSectionInstagram type="three" />
      <ReviewSection type="three" />
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
      "Reach 10k Audience Base",
      "Distribution To 100 Curators",
      "Distribution To 100 Playlists",
      "Distribution To 100 Radios Stations ",
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
      "Reach 30K Audience Base",
      "Distribution To 250 Curators",
      "Distribution To 250 Playlists",
      "Distribution To 250 Radios Stations",
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
      "Distribution To 550 Radios Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "9-10 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
  },
];

Page3.title = "Music Promotion Home";
Page3.layout = AppLayout;

export default Page3;
