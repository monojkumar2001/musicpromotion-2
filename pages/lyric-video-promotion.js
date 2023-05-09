// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSectionLyricVideo from "@components/sections/FaqSectionLyricVideo";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import FeatureSection from "@components/sections/FeatureSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";

// Images

const Page7 = () => {
  return (
    <div id="page7">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Top Notch</p>
                <h1 className="banner-title">
                  Lyrics Video <span className="focus">Promotion</span>
                </h1>
                <p className="banner-des">
                  Get Custom Made Stunning lyric videos to start promoting your
                  music with most results.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a">
                  <img src="/assets/home-7/img/2.png" alt="" />
                </div>
                <div className="animated ban-b">
                  <img src="/assets/home-7/img/3.png" alt="" />
                </div>
                <img
                  src="/assets/home-7/img/1.png"
                  className="ban-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="seven" />
      <VisionSection type="seven" />
      <AboutSection type="seven" />
      <PricingSection data={pricingData} type="seven" />
      <ImageSection />
      <FeatureSection data={videoData} color="#EF4B4C" />
      <EngageSection />
      {/* <VideoIntroSection type="seven" /> */}
      <FaqSectionLyricVideo />
      <ReviewSection type="seven" />
    </div>
  );
};

const pricingData = [
  {
    package_type: "basic",
    cur_price: "199",
    off_price: "399 ",
    percent: "50",
    includes: [
      "Animated Texts Effects",
      "Customized With Logo & Images",
      "Full HD 1080P Resolution",
      "Color Grading",
      "Upto 2  Revisons",
      "Start Within 24 hours",
      "2-3 Days Delivery",
    ],
    // details:
    //   "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
  },
  {
    package_type: "Standard",
    cur_price: "399",
    off_price: "799",
    percent: "50",
    includes: [
      "Animated Texts Effects",
      "Customized With Logo & Images",
      "Full HD 1080P Resolution",
      "Color Grading & Correction",
      "Upto 3  Revisons",
      "Start Within 24 hours",
      "3-5 Days Delivery",
    ],
    // details:
    //   "Engagement may vary.*Typical engagements on average 15,000 streams and 1800 followers organically",
  },
  {
    package_type: "premium",
    cur_price: "799",
    off_price: "1599",
    percent: "50",
    includes: [
      "Trendy Animated Text Effects",
      "Customized With Logo & Images & Videos",
      "4k Resolution",
      "Color Grading & Correction",
      "Upto 5  Revisons",
      "Start Within 24 hours",
      "9-10 Days Delivery",
    ],
    // details:
    //   "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
  },
];

const videoData = [
  {
    videoDetails:
      "Our team of professional designers and animators will create an amazing video that matches your music genre with custom utilized motion backgrounds, bass reaction, images, Kinetic typography and gets you more views on video streaming platforms like YouTube, Vimeo etc. We can also add up many customization options to tie in your band logo, Images, video footages & as many fonts as you would like to utilize throughout the video with up to 350 words. Get in touch now to start working for your next release together. We can also add up many customization options to tie in your band logo, Images, video footages & as many fonts as you would like to utilize throughout the video with up to 350 words. ",
  },
  {
    videoDetails:
      "With our most popular standard package, we will use up to 400-450 words and include several engaging motion backgrounds with animated text Transitions, promotional elements, intro outro long with 3d visualization. We always love working with independent & creative musicians who take their music seriously and want it presented professionally online. Contact us today. We will review your lyrics and your overall goals & map out a plan that fits within budget, time, and style of music you are producing.",
  },
  {
    videoDetails:
      "This the top-notch lyric video production package which is mostly choice by major record labels and major artists as it is delivered with more overall freedom, revisions, unlimited use of images and/or video,texts,hottest trendy custom animation scenes, screen shakes, scribble elements promotional materials etc. This package also comes with a FREE video marketing campaign and a FREE high-quality thumbnail to get your video on the front page of music curator’s blog.",
  },
];

Page7.title = "Music Promotion Home";
Page7.layout = AppLayout;

export default Page7;
