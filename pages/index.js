import Image from "next/image";
import image1 from "../public/assets/image-1.png";
import image2 from "../public/assets/image-2.png";
// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSection from "@components/sections/FaqSection";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";
import Link from "next/link";
import ProvideCount from "@components/sections/ProvideCount";
import WhyUs from "@components/sections/WhyUs";
import Services from "@components/sections/Services";
import ChainUpSection from "@components/sections/ChainUpSection";
import SongFly from "@components/sections/SongFly";
import Recognized from "@components/sections/Recognized";
import MarketingAgenchy from "@components/sections/MarketingAgenchy";
import LinkedinSales from "@components/sections/LinkedinSales";

import Faq from "react-faq-component";
import ContactUs from "@components/sections/ContactUs";
import Registration from "@components/sections/Registration";
// Images

const Home = () => {
  const data = {
    rows: [
      {
        title: "Metaverse development: what is it?",
        content: `You can design your own virtual world setting to hold conventions, meetings, seminars, concerts, or even to start your own real-world company there.`,
      },
      {
        title: "How much does our metaverse development service cost?",
        content: `To get a price on your metaverse development project, get in touch with our team. Your specified features, functionalities, and other factors will affect the price. `,
      },
      {
        title: "What are the benefits of investing in metaverse platforms?",
        content: `Experts claim that the metaverse has a trillion-dollar industry thus has a promising future. If you work in such a growing field, you will be noticed by others. Be a pioneer in the field!`,
      },
      {
        title: "What can a metaverse development company do for you?",
        content: `What can a metaverse development company do for you?`,
      },
    ],
  };

  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };
  return (
    <div id="home">
      <div className="hero">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Organic & Genre</p>
                <h1 className="banner-title">
                  Your One-step E-Commerce Branding
                </h1>
                <p className="banner-des">
                  Get your songs heard by thousands of music lovers. Grow your
                  fanbase. Get featured in hot celebrity curator playlists and
                  skyrocket your Spotify channel popularity.
                </p>
                <Link href="/">
                  <button className="custom-btn"> GET STARTED</button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <img src="/assets/home-1/img/hero-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProvideCount />
      <WhyUs />
      <Services type="one" />
      <ChainUpSection type="one" />
      <SongFly />
      <Recognized />
      <MarketingAgenchy />
      <LinkedinSales />
      {/*  ========= Faq Section start ======== */}
      <section id="faq">
        <div className="container">
          <h1 className="heading">Frequently Asked Questions</h1>
          <div className="content">
            <Faq data={data} styles={styles} />
          </div>
        </div>
      </section>
      {/*  ========= Faq Section End ======== */}

      {/* ===========  Contact Us start ================== */}
      <ContactUs/>
      {/* ===========  Contact Us End ================== */}
      <Registration/>
    </div>
  );
};

Home.title = "Music Promotion Home";
Home.layout = AppLayout;

export default Home;

// const pricingData = [
//   {
//     package_type: "basic",
//     cur_price: "69",
//     off_price: "139 ",
//     percent: "50",
//     includes: [
//       "Reach 10k Audience Base",
//       "Distribution To 100 Curators",
//       "Distribution To 100 Playlists",
//       "Distribution To 100 Radios",
//       "Unlimited Revisions",
//       "Start Within 24 hours",
//       "2-3 Days Delivery",
//     ],
//     details:
//       "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
//   },
//   {
//     package_type: "Standard",
//     cur_price: "119",
//     off_price: "239",
//     percent: "50",
//     includes: [
//       "Reach 30k Audience Base",
//       "Distribution To 250 Curators",
//       "Distribution To 250 Playlists",
//       "Distribution To 250 Radios",
//       "Unlimited Revisions",
//       "Start Within 24 hours",
//       "3-5 Days Delivery",
//     ],
//     details:
//       "Engagement may vary.*Typical engagements on average 15,000 streams and 1800 followers organically",
//   },
//   {
//     package_type: "premium",
//     cur_price: "299",
//     off_price: "499",
//     percent: "50",
//     includes: [
//       "Reach 100k Audience Base",
//       "Distribution To 550 Curators",
//       "Distribution To 550 Playlists",
//       "Distribution To 550 Radios",
//       "Unlimited Revisions",
//       "Start Within 24 hours",
//       "9-10 Days Delivery",
//     ],
//     details:
//       "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
//   },
// ];
