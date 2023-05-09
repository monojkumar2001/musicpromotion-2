import Accordion from "@components/accordion/Accordion";
import AccordionHeader from "@components/accordion/AccordionHeader";
import React from "react";

const FaqSectionPromoVideo = ({ type = "one" }) => {
	return (
		<section id="faq">
			<div className="container">
				<h1 className="heading">Frequently Asked Questions</h1>
				<p className="description">
					An in-depth breakdown of our promotional services.
				</p>

				{[1].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>What is music promo videos?</AccordionHeader>
						<p className="accordion-body">
						A music promo video is a stunning type of video that you can use to promote your music online to attract audiences. These promo or trailer videos are perfect to promote your latest released music on YouTube, Facebook and other major social media platforms.
						</p>
					</Accordion>
				))}
				{[3].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>How long does it take to deliver it completely?</AccordionHeader>
						<p className="accordion-body">
						As soon you place the order, we start working on your order within 24 hours of receiving all necessary information and file. After that, it might take around 3-5 business days to deliver your promo video, depending on the complexity of the entire project.
						</p>
					</Accordion>
					
				))}
				{[4].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Are these videos completely custom made?</AccordionHeader>
						<p className="accordion-body">
						Yes, we have a team of professional designer video editor & animators they will make these videos with a complete unique & creative idea depending on the package you buy from us according to your music genre & given information.
						</p>
					</Accordion>
					
				))}
				{[5].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>What if I don't like my video?</AccordionHeader>
						<p className="accordion-body">
						We offer unlimited revisions until you’re happy. If there’s something you don’t like or something you want to change, simply contact our support center regarding the issue we will try our best to make it perfect.
						</p>
					</Accordion>
					
				))}
				{[6].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>What is the refund policy?</AccordionHeader>
						<p className="accordion-body">
						You are covered by our 30 days money back guarantee always!
							<br/>
						For any kind of refund or order disputes contact our support center upon further investigation if we find that you are not completely satisfied and decide to not to use our services within 30 days of the first purchase, we’ll promptly refund 100% of your money.
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

export default FaqSectionPromoVideo;
