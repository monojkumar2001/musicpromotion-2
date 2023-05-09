import Image from "next/image";
import image2 from "@assets/image-2.png";

const EngageSection = () => {
	return (
		<div className="engage-container" style={{ paddingBottom: 50 }}>
			<p className="text">
				We don’t ever send bots or any type of fake engagement. All campaigns
				are based on a combination of native paid ads on advertising, targeted
				blog outreach and track distribution to playlist curators & radio
				stations. Our services fully comply with Spotify’s terms of service.
			</p>
			<div>
				<Image src={image2} alt="image two" objectFit="cover" />
			</div>
		</div>
	);
};

export default EngageSection;
