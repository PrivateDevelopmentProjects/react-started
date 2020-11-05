import React from "react";
import { Fade, Slide } from "react-reveal";
import "./style.css";

const Header = () => {
	return (
		<div className="hero-image">
			<div className="hero-text">
				<Fade top>
					<h1
						style={{
							fontSize: "60px",
							marginBottom: "10px",
							fontFamily: "roboto",
						}}
					>
						Hi, I'm Adelfo
					</h1>
				</Fade>
				<Slide bottom>
					<h2
						style={{
							marginBottom: "15px",
							fontSize: "40px",
							fontFamily: "roboto",
						}}
					>
						And I'm a Constructor
					</h2>
				</Slide>
			</div>
		</div>
	);
};

export default Header;
