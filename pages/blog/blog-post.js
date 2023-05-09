import AppLayout from "@components/layout/AppLayout";
import React from "react";

const BlogPost = () => {
	return (
		<div id="blog-post">
			<div className="container">
				<div className="row-6">
					<div className="col-md-8">
						<div className="blog-left-sec">
							<form action="" className="search-form">
								<div className="form-group">
									<div className="input__field__login">
										<div className="input-icon">
											<img
												src="/assets/blog-post/img/1.svg"
												className="contct-form-icon"
												alt=""
											/>
										</div>
										<input
											type="text"
											id="name"
											className="form-control"
											placeholder="Search blogs, topics and more"
										/>
									</div>
								</div>
							</form>

							<div className="page-route">
								<a href="" className="route-link">
									Blog{" "}
								</a>
								<p> Are CBD Topicals Good for my skin?</p>
							</div>

							<div className="blog-post-area">
								<h1 className="post-title">
									The Health & Medicinal Benefits of{" "}
									<span>Cannabis Sativa</span> L. And The CBD (Cannabidiol){" "}
									<span>Extracted</span> from It
								</h1>

								<div className="post-date">
									<p>November 18, 2021</p>
									<p>
										{" "}
										<img src="/assets/blog-post/img/clock.svg" alt="" /> 6
										Minutes
									</p>
								</div>

								<div className="post-img">
									<img src="/assets/blog-post/img/post.png" alt="" />
								</div>
								<div className="sheare-read">
									<div className="read">
										<img src="/assets/blog-post/img/eye.svg" alt="" />
										<p>1.6k Reads</p>
									</div>
									<div className="share">
										<ul className="share-ul">
											<li>
												<a href="" className="share-link">
													<img src="/assets/blog-post/img/share-1.svg" alt="" />
												</a>
											</li>
											<li>
												<a href="" className="share-link">
													<img src="/assets/blog-post/img/share-2.svg" alt="" />
												</a>
											</li>
											<li>
												<a href="" className="share-link">
													<img src="/assets/blog-post/img/share-3.svg" alt="" />
												</a>
											</li>
											<li>
												<a href="" className="share-link">
													<img src="/assets/blog-post/img/share-4.svg" alt="" />
												</a>
											</li>
											<li>
												<a href="" className="share-link">
													<img src="/assets/blog-post/img/share-5.svg" alt="" />
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="post-details">
									<p className="post-des">
										Every state across the USA has laws regarding the use of
										medical cannabis sativa but notably over two-thirds of all
										the states including the District of Columbia have legalized
										marijuana for medical treatment. More states are even
										considering bills to legalize medical cannabis sativa. So
										why the increased interest in medical marijuana across the
										world?{" "}
									</p>

									<p className="post-des">
										Well, it all has to do with the health and medical benefits
										of cannabis sativa and the CBD (Cannabidiol) oil extracted
										from hemp and marijuana plants.
									</p>
									<div className="post-des">
										In this post, we look at some of the benefits of CBD oil in
										the health and wellness sectors.
									</div>

									<h2 className="post-title cpt-5">
										What is Medical Cannabis Sativa?
									</h2>
									<p>
										Medical Cannabis sativa, also known as medical marijuana,
										uses extracts from the marijuana plant to treat and manage
										diseases and other ill-health conditions.
									</p>
									<p>
										It is a medical field that basically involves some of the
										products used in recreational marijuana but for medical
										purposes instead.
									</p>
									<p>
										Medical marijuana products contain over 100 different
										chemicals known as cannabinoids. It is also important to
										note that most medical marijuana products contain low
										amounts of THC which is a compound known for creating the
										high you get when you use marijuana.
									</p>
									<p>
										The cannabinoids contained in medical cannabis sativa have
										many health benefits, especially in the management of
										stressful and painful conditions.
									</p>
									<div className="cpy-5">
										<h2 className="post-title">
											Health Benefits of CBD Oil Extracted from Cannabis Sativa
										</h2>
										<p>
											Cannabis sativa is available in different forms. Its
											health benefits continue to grow as more research is being
											done.
										</p>
										<p>
											Most importantly, cannabis sativa contains CBD which is a
											chemical that has a significant impact on the brain. CBD
											combines with THC to help the brain to function better.
											Both THC and CBD can be extracted from cannabis using a
											short path distillation process and enhanced for use in
											medicine.
										</p>
										<p>
											Some of the key benefits of cannabis sativa and its oils
											include the following:
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="col-md-4">
						<div className="latest-post">
							<p className="sm-sec-title">Other Articles</p>

							<div className="latest-post-area">
								<ul className="latest-ul">
									<li>
										<a href="" className="post-link">
											<img
												src="/assets/blog-post/img/post-sm.png"
												alt=""
												className="latest-post-img"
											/>
											<div className="latest-post-title-date">
												<p>
													Salesforce to end 9 to 5, three more ways for
													employees to work
												</p>
												<small>Today</small>
											</div>
										</a>
									</li>
									<li>
										<a href="" className="post-link">
											<img
												src="/assets/blog-post/img/post-sm-2.png"
												alt=""
												className="latest-post-img"
											/>
											<div className="latest-post-title-date">
												<p>
													Rocket.Chat aises $19M for its open source approach
												</p>
												<small>5 feb</small>
											</div>
										</a>
									</li>
									<li>
										<a href="" className="post-link">
											<img
												src="/assets/blog-post/img/post-sm-3.png"
												alt=""
												className="latest-post-img"
											/>
											<div className="latest-post-title-date">
												<p>
													“I am taking it to the grave” tweeted The Hustle’s CEO
													Sam Parr
												</p>
												<small>5 feb</small>
											</div>
										</a>
									</li>
									<li>
										<a href="" className="post-link">
											<img
												src="/assets/blog-post/img/post-sm-4.png"
												alt=""
												className="latest-post-img"
											/>
											<div className="latest-post-title-date">
												<p>Uber to acquire Drizly</p>
												<small>2 feb</small>
											</div>
										</a>
									</li>
								</ul>
							</div>

							<p className="sm-sec-title">Featured Videos</p>
							<div className="video-area">
								<div className="play-video">
									<img src="/assets/blog-post/img/video.png" alt="" />
									<a href="" className="play-icon">
										<img src="/assets/blog-post/img/play.svg" alt="" />
									</a>
									<p className="play-time">12:30</p>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

BlogPost.layout = AppLayout;
BlogPost.title = "Blog Post";

export default BlogPost;
