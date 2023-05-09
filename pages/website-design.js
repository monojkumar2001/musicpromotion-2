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

const Page17 = () => {
  return (
    <div id="page17">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Logo & Branding Design</p>
                <h1 className="banner-title">
                  Artist Profile with a{" "}
                  <span className="focus">Customized</span>{" "}
                  <span className="shape">Website</span>
                </h1>
                <p className="banner-des">
                  If you’re an artist, then you know how important it is to have
                  a good looking and functioning website. That’s where we come
                  in! We work hard to make sure your website looks great on all
                  devices so people can enjoy your music anywhere they go!
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="ban-a">
                  <img src="/assets/home-17/img/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="17" />
      <VisionSection type="17" />
      <AboutSection type="17" />
      <PricingSection data={pricingData} type="17" />
      <ImageSection />
      <FeatureSection data={videoData} color="#0098CD" />
      <EngageSection />
      <VideoIntroSection type="17" />
      <FaqSection />
      <ReviewSection type="17" />
    </div>
  );
};

const pricingData = [
  {
    package_type: "basic",
    cur_price: "399",
    off_price: "139",
    percent: "50",
    includes: [
      "Simple Web Design",
      "1-2 pages ",
      "Fully Responsive Website",
      "SEO Friendly ",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "2-3 Days Delivery",
    ],
    details:
      "",
  },
  {
    package_type: "Standard",
    cur_price: "699",
    off_price: "239",
    percent: "50",
    includes: [
      "Branded  Web Design",
      "2-3 pages ",
      "Fully Responsive Website",
      "SEO Friendly ",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "3-5 Days Delivery",
    ],
    details:
      "",
  },
  {
    package_type: "premium",
    cur_price: "1199",
    off_price: "499",
    percent: "50",
    includes: [
      "Award Winning Web Design",
      "3-5 Pages",
      "Ecommerce Functionalities",
      "Fully Responsive Website",
      "SEO Friendly ",
      "Unlimited Revisions",
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
      "If you’re an artist, then you know how important it is to have a good looking and functioning website. But you are on a tight budget, right? That’s where we come in! Our team of professional web designer & developers will make sure your website looks great on all devices so people can enjoy your music anywhere they go with some basic marketing & music sharing functionalities.",
  },
  {
    videoDetails:
      "A lot of artists have a hard time getting their music out to the public. This is because there are so many other artists in the industry that it’s hard for people to find you. Therefore, our expert team of web designers & developers will build a perfect website where musicians can easily get their name out into the world and provide information about themselves such as who they are, where they come from, what instruments/tools they use etc.… It also allows them to post upcoming music, shows & many other marketing features as well.",
  },
  {
    videoDetails:
      "Our goal is to build a strong personal brand that speaks to artists fans and takes an artist from musician to icon. We will create a fully customizable website giving the artist full creative freedom to design their page the way they want. Controlling design elements like layouts and colors that truly reflect the artist’s vision means that any visitors get an immediate impression of what they represent. the website will provide the artist an opportunity to curate their personal brand, sell their music, merchandises more carefully with a space dedicated to their targeted audiences. ",
  },
];

Page17.title = "Music Promotion Home";
Page17.layout = AppLayout;

export default Page17;
