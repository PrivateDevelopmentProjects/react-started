import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";

const Header = () => {
	return (
		<div className="hero-image">
			<div className="hero-text">
				<h1 style={{ fontSize: "50px" }}>I am Adelfo</h1>
				<h3>And I'm a Builder</h3>
				<Button variant="outlined" className="btn-style">
					<span>Contact Me</span>
				</Button>
			</div>
		</div>
	);
};

export default Header;
