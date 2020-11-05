import React from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import { PhoneInTalk, EmailRounded } from "@material-ui/icons/";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";

import img2 from "./img2.png";

const Header = () => {
	return (
		<div className="hero-image">
			<div className="hero-text">
				<Fade top>
					<h3
						style={{
							fontSize: "35px",
							fontFamily: "Inconsolata",
						}}
					>
						A.G Residential Landscapes
					</h3>
					<hr
						style={{
							height: "2px",
							width: "60px",
							backgroundColor: "#38b000",
							textShadow: "0 0 3px #008000, 0 0 #00b2ca",
						}}
					></hr>
				</Fade>
				<Slide bottom>
					<div className="header-icons">
						<PhoneInTalk />
						<EmailRounded />
					</div>
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
