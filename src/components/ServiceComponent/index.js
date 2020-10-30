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
				<span className="title">{title}</span>
			</Slide>
			<Zoom bottom>
				<span className="description">{description}</span>
			</Zoom>
		</div>
	);
};

export default Service;
