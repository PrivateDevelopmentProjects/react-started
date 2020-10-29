import React from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import Avatar from "@material-ui/core/Avatar";
import "./style.css";

const Service = ({ image, title, description }) => {
	return (
		<div className="service">
			<Fade top>
				<Avatar src={image} className="avatar-style" />
			</Fade>
			<Slide right>
				<h2>{title}</h2>
			</Slide>
			<Zoom bottom>
				<h3>{description}</h3>
			</Zoom>
		</div>
	);
};

export default Service;
