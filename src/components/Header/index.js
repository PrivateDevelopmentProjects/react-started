import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";

const Header = () => {
	return (
		<div className="hero-image">
			<div className="hero-text">
				<h1 style={{ fontSize: "70px" }}>Hi, I'm Adelfo</h1>
				<h2 style={{ marginBottom: "20px" }}>And I'm a Builder</h2>
				<Button variant="contained" className="btn-style">
					<span>Contact Me</span>
				</Button>
			</div>
		</div>
	);
};

export default Header;
