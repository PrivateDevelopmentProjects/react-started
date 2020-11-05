import React from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./style.css";

import img2 from "./img2.png";

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

			<div className="images">
				<Zoom bottom>
					<img src={img2} alt="avatar2" />
				</Zoom>
			</div>
		</div>
	);
};

export default Header;
