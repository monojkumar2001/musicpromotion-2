import React from "react";

const VideoIntroSection = ({ type = "one" }) => {
	return (
		<section id="video-intro" className={`type-${type}`}>
			<div className="container">
				<h1 className="heading">VIdeo Introductory</h1>
				<p className="description">
					An in-depth breakdown of our promotional services
				</p>
				<div
					className="player-container"
					style={{ maxWidth: 980, margin: "0 auto" }}
				>
					<div className="player-wrapper">
						<iframe
							className="video"
							src="https://www.youtube.com/embed/ONyrc0jHb3A"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VideoIntroSection;
