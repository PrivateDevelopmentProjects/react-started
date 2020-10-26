import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Work from "./components/Work";
import "./App.css";

const App = () => {
	return (
		<>
			<Navigation />
			<div className="app-style">
				<div>
					<Header />
				</div>
				<div>
					<About />
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
