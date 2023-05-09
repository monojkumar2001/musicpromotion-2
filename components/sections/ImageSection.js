import Image from "next/image";
import image1 from "@assets/image-1.png";

const ImageSection = () => {
	return (
		<div className="section-image">
			<div className="section-img-content-warpper">
				<h1 className="section-title">Want a Subscription</h1>
				<p>We also offer Pay As You Go credits on the platform which do not require to subscribe. We also offer plans to extract up to 500k leads per month.</p>
			<button className="sign-up-btn-all">Sign up to See all offers</button>
			</div>
			<Image src={image1} alt="image one" objectFit="cover" />
		</div>
	);
};

export default ImageSection;
