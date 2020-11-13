import React from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import { PhoneInTalk, EmailRounded } from "@material-ui/icons/";
import Button from "@material-ui/core/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";

import img2 from "./img2.png";

const Header = () => {
  return (
    <div className="hero-image full-height-section">
      <div className="hero-text">
        <Fade top>
          <h1>A.G. Residential Landscapes</h1>
        </Fade>
        <Slide bottom>
          <h3>helping you create that vision of your dream house</h3>
        </Slide>
        <Zoom>
          <Link smooth={true} offset={-70} duration={500} to="contact">
            <Button variant="outlined">
              <EmailRounded /> Let's Start That Project Today
            </Button>
            <p>
              <PhoneInTalk /> (512) 123-4567
            </p>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Header;
