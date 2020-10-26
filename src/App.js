import React from "react";
import Container from "@material-ui/core/Container";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => {
	return (
		<>
			<Navigation />
			<Container className="container-style"></Container>
		</>
	);
};

export default App;
