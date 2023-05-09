import React from "react";

const FeatureSection = ({ data, color }) => {
	return (
		<section id="feature">
			<div className="container">
				<div className="feature-wrapper">
					<div data-aos="fade-right" className="col">
						<div className="feature-video">
							<img src="/assets/feature/img/1.png" alt="" />
						</div>
					</div>
					<div data-aos="fade-left" className="col">
						<div className="feature-content">
							<h2 className="feature-title">
								<div>
									The{" "}
									<span className="focus" style={{ color: color }}>
										Amazing
									</span>
									<br /> Starter
								</div>

								<svg
									width="112"
									height="118"
									viewBox="0 0 112 118"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.56734 14.648L1.99902 4.9834L11.6636 2.41508"
										stroke={color}
										strokeWidth="3"
									/>
									<path
										d="M2.99902 5.41504C47.499 25.415 83.2265 28.7878 70.999 80.415C61.999 118.415 -2.05639 84.0294 46.499 41.915C95.499 -0.584961 110.499 83.415 110.499 116.415"
										stroke={color}
										strokeWidth="3"
										strokeLinecap="round"
									/>
								</svg>
							</h2>

							<div className="feature-des">
								<p className="mb-3">{data[0].videoDetails}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="feature-wrapper">
					<div data-aos="fade-left" className="col">
						<div className="feature-video">
							<img src="/assets/feature/img/1.png" alt="" />
						</div>
					</div>
					<div data-aos="fade-right" className="col">
						<div className="feature-content">
							<h2 className="feature-title">
								<div>
									Most Choiced <br />
									<span className="focus" style={{ color: color }}>
										(Best Selling)
									</span>
								</div>
							</h2>

							<div className="feature-des">
								<p>{data[1].videoDetails}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="feature-wrapper">
					<div data-aos="fade-right" className="col">
						<div className="feature-video">
							<img src="/assets/feature/img/1.png" alt="" />
						</div>
					</div>
					<div data-aos="fade-left" className="col">
						<div className="feature-content">
							<h2 className="feature-title">
								<div>
									Stand For Advanced <br />
									<span className="focus" style={{ color: color }}>
										(Recommended)
									</span>
								</div>
							</h2>
							<div className="feature-des">
								<p>{data[2].videoDetails}</p>
							</div>
							<svg
								width="112"
								height="105"
								viewBox="0 0 112 105"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.0364916 88.7676L69.7476 0.44683L111.38 104.979L0.0364916 88.7676Z"
									fill={color}
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;
