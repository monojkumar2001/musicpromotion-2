import Accordion from "@components/accordion/Accordion";
import AccordionHeader from "@components/accordion/AccordionHeader";
import React from "react";

const FaqSectionLogoDesign = ({ type = "one" }) => {
	return (
		<section id="faq">
			<div className="container">
				<h1 className="heading">Frequently Asked Questions</h1>
				<p className="description">
					An in-depth breakdown of our promotional services.
				</p>

				{[1].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>How long does it take to deliver it completely? </AccordionHeader>
						<p className="accordion-body">
						As soon you place the order, we start working on your order within 24 hours of receiving all necessary information and file. After that, it might take around 3-5 business days to deliver your logo, depending on the complexity of the entire project. 
						</p>
					</Accordion>
				))}
				{[2].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>Are these logo designs completely custom made?</AccordionHeader>
						<p className="accordion-body">
						Yes, we have a team of professional graphics designers they will make these logo designs with a complete unique & creative idea depending on the package you buy from us according to your music genre & given information. 
						</p>
					</Accordion>
					
				))}
				{[3].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>What if I don't like my logo design? </AccordionHeader>
						<p className="accordion-body">
						We offer unlimited revisions until you’re happy. If there’s something you don’t like or something you want to change, simply contact our support center regarding the issue we will try our best to make it perfect. 
						</p>
					</Accordion>
					
				))}
				{[4].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>What is the refund policy?</AccordionHeader>
						<p className="accordion-body">
						You are covered by our 30 days money back guarantee always!  
							<br/>
						For any kind of refund or order disputes contact our support center upon further investigation if we find that you are not completely satisfied and decide to not to use our services within 30 days of the first purchase, we’ll promptly refund 100% of your money.
						</p>
					</Accordion>
					
				))}
			</div>
		</section>
	);
};

export default FaqSectionLogoDesign;
