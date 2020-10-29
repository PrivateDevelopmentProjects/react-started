import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import { Fade, Slide, Zoom } from "react-reveal";

const Header = () => {
	return (
		<div className="hero-image">
			<div className="hero-text">
				<Fade top>
					<h1
						style={{
							fontSize: "100px",
							marginBottom: "10px",
							fontFamily: "roboto",
							borderRadius: "30px",
						}}
					>
						Hi, I'm Adelfo
					</h1>
				</Fade>
				<Slide bottom>
					<h2
						style={{
							marginBottom: "20px",
							fontSize: "60px",
							fontFamily: "roboto",
						}}
					>
						And I'm a Builder
					</h2>
				</Slide>
				<Zoom>
					<Button variant="contained" className="btn-style">
						<span>Contact Me</span>
					</Button>
				</Zoom>
			</div>
		</div>
	);
};

export default Header;
