import Image from "next/image";
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
import FeatureSection from "@components/sections/FeatureSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";

// Images

const Page10 = () => {
	return (
		<div id="page10">
			<div className="banner-container">
				<div className="banner-wrapper">
					<div className="banner-inner">
						<div className="col">
							<div className="banner-content">
								<p className="sm-title">BUILD A FOUNDATION OF</p>
								<h1 className="banner-title">
									Social Media <span className="focus">Proficiency</span>
								</h1>
								<p className="banner-des">
									Create and maintain an effective strategy for each artist that
									includes everything from creating content calendars and
									posting updates, to managing follower engagement and
									responding in real-time.
								</p>
								<a href="" className="custom-btn">
									GET STARTED
								</a>
							</div>
						</div>
						<div className="col">
							<div className="banner-right">
								<img src="/assets/home-10/img/1.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<ServiceSection type="10" />
			<VisionSection type="10" />
			<AboutSection type="10" />
			<PricingSection data={pricingData} type="10" />
			<ImageSection />
			<FeatureSection data={videoData} color="#5A8FE9" />
			<EngageSection />
			<VideoIntroSection type="10" />
			<FaqSection />
			<ReviewSection type="10" />
		</div>
	);
};

const pricingData = [
	{
		package_type: "basic",
		cur_price: "69 ",
		off_price: "139 ",
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
			"As a music industry professional, you know that your artists’ social media presence is crucial to their success. Whether you already have large fan base or just starting out, you don’t need a big budget or even any experience at all. Our Social Media Management Experts will help you to grow your social fanbase exponentially by leveraging key content creation with scroll stopping banners, motion graphics, short video ads with perfect hashtags etc. Which influences across multiple platforms including Facebook, Twitter, Instagram & more! We’ve helped some of the biggest artists in the world get their music heard by millions. Our team has worked with major record labels and artists. We know what it takes to make an artist successful with all the necessary social marketing elements. If this sounds like something you’re interested in, then don’t hesitate to contact us today.",
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

Page10.title = "Music Promotion Home";
Page10.layout = AppLayout;

export default Page10;
