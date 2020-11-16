import React from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import { PhoneInTalk, EmailRounded } from "@material-ui/icons/";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";

import BackgroundImage from "./header.jpg";

const useStyles = makeStyles((theme) => ({
  hero_image: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: "#cccccc",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
  hero_text: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  rp: {
    paddingRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.hero_image}>
      <div className={classes.hero_text}>
        <Fade top>
          <h1>A.G. Residential Landscapes</h1>
        </Fade>
        <Slide bottom>
          <h3>helping you create that vision of your dream house</h3>
        </Slide>
        <Zoom>
          <Link smooth={true} offset={-70} duration={500} to="contact">
            <Button color="secondary" variant="outlined">
              <EmailRounded className={classes.rp} /> Let's Start That Project
              Today
            </Button>
          </Link>
          <Button color="secondary" href="tel:5124296064">
            <PhoneInTalk className={classes.rp} />
            (512) 429-6064
          </Button>
        </Zoom>
      </div>
    </div>
  );
};

export default Header;
