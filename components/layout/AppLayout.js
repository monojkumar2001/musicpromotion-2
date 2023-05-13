import Footer from "@components/footer/Footer";
import Header from "../Header/Header";


const AppLayout = ({ children }) => {
	return (
		<>
			<Header/>
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
