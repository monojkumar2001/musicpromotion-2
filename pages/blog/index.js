import AppLayout from "@components/layout/AppLayout";
import React from "react";
import { useState } from "react";

const BlogPage = () => {
	const [categories, setCategories] = useState([
		"ALL",
		"CBD EDUCATION",
		"SAKINA",
		"CBD FOR PETS",
		"NEWS",
		"CBD PRODUCTS",
		"CBD RECIPES",
	]);

	return (
		<div id="blog">
			<div
				className="top-container"
				style={{
					background: "url(/assets/blog/blog-img-1.png) no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="container">
					<h1>GET MORE UPDATES</h1>
					{/* <ul className="catgories">
						{categories.map((category) => (
							<li key={category} className="category">
								{category}
							</li>
						))}
					</ul> */}
				</div>
			</div>
			<div className="container">
				<div className="blog-list">
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<div key={item} className="blog-card">
							<img src="/assets/blog/card-img.png" alt="" srcset="" />
							<h3 className="title">CBD Oil vs Hemp Seed Oil</h3>
							<p>
								Made applying cutting-edge CO₂ extraction techniques, using the
								finest (non-GMO)
							</p>
							<button>Read More</button>
							<div className="social-share"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

BlogPage.layout = AppLayout;
BlogPage.title = "Blog";

export default BlogPage;
