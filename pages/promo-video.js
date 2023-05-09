// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSectionPromoVideo from "@components/sections/FaqSectionPromoVideo";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import FeatureSection from "@components/sections/FeatureSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";

// Images

const Page4 = () => {
  return (
    <div id="page4">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Top Notch</p>
                <h1 className="banner-title">
                  Promo
                  <span className="speap">
                    Vide
                    <img
                      src="/assets/home-4/img/icon/1.png"
                      alt=""
                      className="video-icon"
                    />
                  </span>
                  <br />
                  <span className="focus">Production</span>
                </h1>
                <p className="banner-des">
                  Get Custom Made Stunning Promo/Trailer Videos to start
                  promoting your music with most results.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a">
                  <img src="/assets/home-4/img/2.png" alt="" />
                </div>
                <img
                  src="/assets/home-4/img/1.png"
                  className="ban-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="four" />
      <VisionSection type="four" />
      <AboutSection type="four" />
      <PricingSection data={pricingData} type="four" />
      <ImageSection />
      <FeatureSection data={videoData} color="#5482FF" />
      <EngageSection />
      {/* <VideoIntroSection type="four" /> */}
      <FaqSectionPromoVideo />
      <ReviewSection type="four" />
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
      "Animated Text Effects",
      "Customized With Logo & Images",
      "One Platform Screen Size",
      "Full HD 1080P Resolution",
      "Upto 10-15 Seconds Preview",
      "Upto 2 Revisons",
      "2-3 Days Delivery",
    ],
    // details:
    //   "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
  },
  {
    package_type: "Standard",
    cur_price: "119",
    off_price: "239",
    percent: "50",
    includes: [
      "Animated Text Effects",
      "Customized With Logo & Images",
      "Multi Platform Screen Size",
      "Full HD 1080P Resolution",
      "Outre Intro",
      "Upto 10-15 Seconds Preview",
      "Upto 3 Revisions",
      "3-5 Days Delivery",
    ],
  },
  {
    package_type: "premium",
    cur_price: "299",
    off_price: "499",
    percent: "50",
    includes: [
      "Trendy Animated Text Effects",
      "Customized With Logo & Images",
      "Multi Platform Screen Size",
      "Custom 2d 3d Animation",
      "4k Resuolution",
      "Free High-Quality Thumbnail",
      "Free Marketing Campaign",
      "Upto 5 Revisions",
      "Upto 3-5 Days Delivery ",
    ],
  },
];

const videoData = [
  {
    videoDetails:
      "This service is specifically for Musicians, DJs, and Artists seeking to Post/Promote their Single, Album, or EP with a professional music promotional video throughout social media Instagram, Facebook, YouTube. Our team of professional designers and animators will create an amazing promo/trailer video that matches your music genre to showcase your new single, album, or EP. We can also add up many customization options to tie in your band logo, Images, cover art design social media icons as you would like to utilize throughout the video with up to 10-15 seconds preview.",
  },
  {
    videoDetails:
      "When you release your new single or album, we make sure that people can share in the excitement with a strong visual. We will use artwork, your band logo, Images, stock footages to create unique videos for up to 15-20 seconds with optimized social media sizes Horizontal 1920x1080 (16:9), Square 1080x1080 (1:1), Vertical 1080x1920 (9:16). It’s great for Instagram, twitter and Facebook This will also Include several engaging motion backgrounds with animated text Transitions, intro outro long etc.",
  },
  {
    videoDetails:
      "This is a great way to promote your new or upcoming project on all the major social media platforms where we will use the music video footages, artwork, custom animation, , promotional elements ,3d visualization which is mostly choice by major record labels and major artists as it is delivered with more overall freedom, revisions, unlimited use of images and/or video. hottest trendy custom animation scenes, screen shakes, scribble elements promotional materials etc with up to 20-30 seconds preview. This package also comes with a FREE video marketing campaign and a FREE high-quality thumbnail & featured post on our partner networks ",
  },
];

Page4.title = "Music Promotion Home";
Page4.layout = AppLayout;

export default Page4;
