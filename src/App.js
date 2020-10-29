import React from "react";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Work from "./components/Work";
import "./App.css";

const App = () => {
	return (
		<>
			<div className="app-style">
				<div>
					<Navigation />
					<Header />
				</div>
				<div>
					<Services />
				</div>
				<div>
					<Work />
				</div>
				<div>
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
};

export default App;
