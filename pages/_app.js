import { Fragment, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

// Animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

// axios.defaults.baseURL = "http://metacookiesnft.com/";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.authorization = token ? `Bearer ${token}` : ''
    return config
})

function MyApp({ Component, pageProps }) {
	const title = Component.title || "Music Promotion Today";
	const Layout = Component.layout || Fragment;
	const router = useRouter();
	const { logout } = router.query;

	useEffect(() => {
		if (logout !== undefined) {
			localStorage.removeItem('auth_token');
			localStorage.removeItem('user');
		  }
		AOS.init();
	}, [logout]);
	

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
