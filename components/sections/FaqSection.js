import Accordion from "@components/accordion/Accordion";
import AccordionHeader from "@components/accordion/AccordionHeader";
import React from "react";

const FaqSection = ({ type = "one" }) => {
	return (
		<section id="faq">
			<div className="container">
				<h1 className="heading">Frequently Asked Questions</h1>
				<p className="description">
					An in-depth breakdown of our promotional services.
				</p>

				{[1].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>How you will promote my Spotify music organically?</AccordionHeader>
						<p className="accordion-body">
						We are going to use our own partner networks (music promoters, music curator blogs , online radio stations, playlists, and others) to promote your Spotify music organically. We are partnered with thousands of independent playlist curators all over the world. We also run native ad campaigns on popular social media channels & search engines to get an initial traction and boost engagement. Our marketing method combines these two different approaches (For the Premium Plan): 1- We run native ad campaigns across different websites and blogs related to your music genre. 2- We also send your music and artist channel to hundreds of playlist curators and influencers (the actual number varies based on genre and target country), so they can promote your tracks. They might choose to promote your tracks or not, based on their own preference. Only for Premium Plans With both strategies, you'll get fully REAL and TARGETED engagements. We don't ever send bots or any type of fake engagements. Our services fully comply with Spotify's terms of service.
						</p>
					</Accordion>
				))}
				{[3].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Do you guarantee an exact number of engagements/streams/listeners through this promotion?</AccordionHeader>
						<p className="accordion-body">
						First of all, of our promotional campaigns is completely organic & real. There is no way to specify what kind of results you will get. They are all different. But your music will surely reach new potential fans without a doubt.
						</p>
					</Accordion>
					
				))}
				{[4].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>How long does it take to see engagements coming over from this Spotify promotion service?</AccordionHeader>
						<p className="accordion-body">
						Be noted it can take up to 2-3 days to see engagements coming over. It can also take a day or two longer if there are delays with your ads serving but we are always quick about getting your ads going and letting you know the order status.
						</p>
					</Accordion>
					
				))}
				{[5].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Can you guys also promote Spotify artist profile/albums/playlists?</AccordionHeader>
						<p className="accordion-body">
						Yes, we can surely do so. But just get in touch with us before placing the order for custom priced packages.
						</p>
					</Accordion>
					
				))}
				{[6].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Why you should buy this Spotify Promotion service?</AccordionHeader>
						<p className="accordion-body">
						Through our Spotify promotion service, you can easily grow your audience base the right way. But be noted we do not provide any bot streams. There is no such chance that bot can grow your Spotify fanbase.
						</p>
					</Accordion>
					
				))}
				{[7].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Where do you promote my Spotify music?</AccordionHeader>
						<p className="accordion-body">
						We run promotional campaigns depending on the package you buy through network of music curators and blogs using native ads. You've probably seen many native ads across the internet, especially on big news sites, popular social media channel and search engines. It's our proprietary system of programmatic native ads that achieves this cost-effective type of campaign, alongside with our network of independent playlist curators.
						</p>
					</Accordion>
					
				))}
				{[8].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>What if I do not receive any streams or engagements after the order is completed?</AccordionHeader>
						<p className="accordion-body">
						We offer only real exposure. It never happened that any of our promotions did not bring any activity. If it happens, please contact our support with  any valid proof of inactivity & we will do our best together to find the issue. If we are totally unable to do that, we will surely cancel your order and get you a complete refund.
						</p>
					</Accordion>
					
				))}
				{[9].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Is it completely safe for my Spotify channel?</AccordionHeader>
						<p className="accordion-body">
						First of all, as we said it’s a real & organic music promotion service. Which complies with Spotify terms & conditions. Beside that we guarantee the privacy of your personal data as well your Spotify artist's account is completely protected from any risks.
						</p>
					</Accordion>
					
				))}
				{[10].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Can I make money with this promotion?</AccordionHeader>
						<p className="accordion-body">
						All our promotional campaigns are 100% royalty eligible, so you won't face any problems in regards to royalties. Please contact your music distributor to know more about how royalties work.
						</p>
					</Accordion>
					
				))}
				{[11].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Do you also share direct links of promotional posts made for the promotion?</AccordionHeader>
						<p className="accordion-body">
						Yes, we will share direct links or screenshot of our promotional post to you. We will also provide you analytics data of the promotion with exact stats during the delivery.
						</p>
					</Accordion>
					
				))}

				{/* <button
					className="faq-btn"
					style={{
						backgroundColor:
							type === "two"
								? "#ff8435"
								: type === "three"
								? "#ffae34"
								: "#1db954",
					}}
				>
					Know more
				</button> */}
			</div>
		</section>
	);
};

export default FaqSection;
