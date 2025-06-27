import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<div className="max-w-[185rem] w-full mx-auto m-auto ">
			<Outlet />
			<Footer />
		</div>
	);
};

export default AppLayout;
