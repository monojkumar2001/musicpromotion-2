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

const Page5 = () => {
  return (
    <div id="page5">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Organic & Genre</p>
                <h1 className="banner-title">
                  Music Video <span className="focus">Editing</span>
                </h1>
                <p className="banner-des">
                  Get Custom Made Stunning Music Video professional & trendy
                  visuals & tied in with your music band and genre of music.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-d">
                  <div className="animated-inner">
                    <div className="review-card-img">
                      <img
                        src="/assets/home-5/img/icon/4.png"
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="text-area">
                      <p>Best Brand Awards</p>
                    </div>
                  </div>
                </div>
                <div className="animated ban-b">
                  <img src="/assets/home-5/img/icon/5.png" alt="" />
                </div>
                <div className="animated ban-c">
                  <img src="/assets/home-5/img/icon/6.png" alt="" />
                </div>
                <div className="animated ban-g">
                  <img src="/assets/home-5/img/icon/3.png" alt="" />
                </div>

                <div className="animated ban-h">
                  <img src="/assets/home-5/img/icon/7.png" alt="" />
                </div>

                <div className="animated ban-a">
                  <img src="/assets/home-5/img/2.png" alt="" />
                </div>
                <img
                  src="/assets/home-5/img/1.png"
                  className="ban-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="five" />
      <VisionSection type="five" />
      <AboutSection type="five" />
      <PricingSection data={pricingData} type="five" />
      <ImageSection />
      <FeatureSection data={videoData} color="#6E8DF8" />
      <EngageSection />
      <VideoIntroSection type="five" />
      <FaqSection />
      <ReviewSection type="five" />
    </div>
  );
};

const pricingData = [
  {
    package_type: "basic",
    cur_price: "299",
    off_price: "599 ",
    percent: "50",
    includes: [
      "Storyline Matching",
      "Lip Synochronization",
      "Smooth Transitions",
      "Noise Removal",
      "Full HD 1080p Resolution",
      "Color Grading",
      "Text Animation Subtitles",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
  },
  {
    package_type: "Stand ard",
    cur_price: "499",
    off_price: "999",
    percent: "50",
    includes: [
      "Storyline Matching",
      "Lip Synochronization",
      "Trendy Transitions Effects",
      "Full HD 1080P Resolution",
      "Motion Graphics",
      "Color Grading & Correction",
      "Audio Noise Reductions",
      "3-5 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 15,000 streams and 1800 followers organically",
  },
  {
    package_type: "premium",
    cur_price: "899",
    off_price: "1799",
    percent: "50",
    includes: [
      "Storyline Matching",
      "Lip Synochronization",
      "Complex Transitions Effects",
      "4k Resolution",
      "Color Correction / Color Grading",
      "Green Screen Removal & VFX",
      "Sound Design",
      "Audio Noise Reductions",
    ],
  },
];

const videoData = [
  {
    videoDetails:
      "Most of the time you want to make a music video but don't know where to start. We will help you get your video edited, and we do it in a professional manner & affordable pricing with high quality results. Take your video to the next level by using our professional video editing service in a with our basic music video editing package which comes with basic Cuts, Slow-motion transitions, effects, color correction & outro intro with upto 160 seconds running time.",
  },
  {
    videoDetails:
      "With our standard music video package, we'll take care of everything from color correction to adding slow motion effects with transitions green screen removal, sharpening, trippy Effects, adding film grains, video conversions adding cinemascope bar etc. The maximum video duration will be up to 240 seconds running time & 1080p video quality. So, you just need to upload & send us your raw footage and let us do the rest!",
  },
  {
    videoDetails:
      "Don't settle for anything less than what you deserve when it comes to promoting your new track - let us create a high-quality, professional looking music video with advanced green screen effects, trippy effects, sky effects, skeleton effects, Sound Design & Mixing & many more everything included as per your need with Up to 3-5 Minutes Running Time & 4k Resolution.",
  },
];

Page5.title = "Music Promotion Home";
Page5.layout = AppLayout;

export default Page5;
