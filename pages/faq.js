import Accordion from "@components/accordion/Accordion";
import AccordionHeader from "@components/accordion/AccordionHeader";
import AppLayout from "@components/layout/AppLayout";
import React from "react";

const FaqPage = () => {
	return (
		<div className="faq">
			<div className="container">
				<h1 className="heading">
				Frequently Asked Questions <br /> <span className="focus">FAQs</span>
				</h1>
				<p className="body-text">
					Here you can read the frequently asked questions about our music
					promotion service, or you can scroll down below to send us message.
					Please keep in mind that we might take up to 1 business day to reply
					to your inquiry.
				</p>
			<div className="faq-qes-con">
				<div className="faq-left">
					<div className="faq-img">
						<img src="/assets/faq/faq-img.png" alt="" />	
					</div>
				</div>
				<div className="questions">
					{/* {[1, 2, 3, 4].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>How will you promote my music?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))} */}
					{[1].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>How will you promote my music?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[2].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>Is it reallt 100% safe?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[3].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>Where do you adverise my music?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[4].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>For how long does my promotion run?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[5].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>Can I make money with this promotion?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[6].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>How will you promote my music ?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[7].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>How will you promote my music ?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[8].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>Where do you adverise my music?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[9].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>Is it reallt 100% safe?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					{[10].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>Where do you adverise my music?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
					
				</div>
			</div>
			</div>
		</div>
	);
};

FaqPage.layout = AppLayout;
FaqPage.title = "Frequently Asked Question";

export default FaqPage;
