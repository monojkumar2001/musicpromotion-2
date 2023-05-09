import AppLayout from "@components/layout/AppLayout";
import React from "react";

const AboutPage = () => {
	return (
		<div id="about">
			<div className="container">
				<div className="wrapper">
					<div className="body-wrapper">
						<div className="container">
							<div className="row-2">
								<div className="col about-image">
									<img src="/assets/about/img/about.png" alt="" />
								</div>
								<div className="col about-description">
									<div className="about-title">
										<h1>We are an online music promotion agency</h1>
									</div>
									<div className="about-des">
										<p>
										Music promotion today is one of the biggest web-based music advertising 
										organizations around the world, lately suggested# 1 Music Promotion 
										organization in 2015-2019. Music promotion today comprises of 10 unique 
										offices including PR, online media promoting, brand advancement, DMCA 
										bring down and brand insurance, Branding Design, Digital music 
										conveyance, Lyric tape item, Website Development and so forth.
										</p>
										<p>
										We've multiple times assiduity experience. Our promoting and Music creation 
										administrations has helped produce 15 viral vids and we've been piecemeal 
										of 10 platinum frameworks to date. Our primary concern is to convey record 
										level advertising at reasonable costs to the independent artists. We are 
										an all-in-one music marketing company that specializes in helping upcoming 
										artists reach their full potential through talent, passion, and hard work. 
										Whether it be with social media marketing or creating you as a brand, you 
										keep 100 of your force when raising your image with Music promotion today 
										and you will gain from our involvement with the music diligence.
										</p>
										<p>
										We've the involvement in working with significant markers for more than ten 
										times. We comprehend the recipe for raising a brand. Regardless of whether 
										you are an established or beginning new, you need the right technique 
										and strategy to shine with the right followership. Our target is to 
										cover your image by streamlining your social media channels. We likewise 
										get everything rolling with promoting and music creation by boosting your 
										image. We drive in consideration while raising prompting on your web-based 
										media channels. Our aim is to make your image and capitalize on leverage to 
										acquire further brand power with our administrations like web-based media 
										check, significant tape arrangement, retail single position, VEVO activity, 
										significant blog situation and further.
										</p>
										<p>
										Nonetheless, if you are one among our earliest supporters and have already 
										registered in the website, or u are totally new to the business, give 
										your music career a big break with our pro services!
										</p>
									</div>
								</div>
							</div>

							<div className="about-bot">
								<div className="about-title">
									<h1>We are here to grow your channel</h1>
								</div>
								<div className="about-des">
									<p>
									Our vision is to give talented artists a possibility to get their music discovered. 
									We want to expand the reach of producers by presenting their music to big 
									SoundCloud channels and Spotify playlists.
									</p>
									<p>
									Whether you make pop music or are an instrumental pianist, you only pay to reach 
									active listeners and curators that will dig your music.
									</p>
									<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. 
									Repudiandae voluptatum repellat, nostrum deleniti, itaque 
									praesentium provident necessitatibus dolores laborum eveniet 
									et culpa quae repellendus illum explicabo. Quod, provident 
									magnam. Porro.
									</p>
								</div>


							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

AboutPage.layout = AppLayout;
AboutPage.title = "About";

export default AboutPage;
