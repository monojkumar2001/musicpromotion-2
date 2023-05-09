import { Fragment, useEffect } from "react";
import Head from "next/head";

// Animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";


// SEO
import SEO from "@SEO/SEO";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

// RC Slider Styles
// import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";

// Import Global Style
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	const title = Component.title || "Music Promotion Today";
	const Layout = Component.layout || Fragment;

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
