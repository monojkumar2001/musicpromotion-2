import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";

const AppLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
