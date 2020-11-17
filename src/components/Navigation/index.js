import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import BuildOutlined from "@material-ui/icons/BuildOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import WorkOutlineOutlined from "@material-ui/icons/WorkOutlineOutlined";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Avatar, Button } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "rgba(255,255,255, 0.2)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobile_nav: {
    background: theme.palette.primary.light,
  },
  button: {
    color: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "site-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "site-menu-mobile";

  const ServicesLink = (
    <Link smooth={true} offset={-70} duration={500} to="services">
      <Button startIcon={<BuildOutlined />} className={classes.button}>
        Our Services
      </Button>
    </Link>
  );

  const WorkLink = (
    <Link smooth={true} offset={-70} duration={500} to="work">
      <Button startIcon={<WorkOutlineOutlined />} className={classes.button}>
        Our Work
      </Button>
    </Link>
  );

  const ContactLink = (
    <Link smooth={true} offset={-70} duration={500} to="contact">
      <Button startIcon={<EmailOutlined />} className={classes.button}>
        Contact Us
      </Button>
    </Link>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.mobile_nav}>{ServicesLink}</MenuItem>
      <MenuItem className={classes.mobile_nav}>{WorkLink}</MenuItem>
      <MenuItem className={classes.mobile_nav}>{ContactLink}</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.nav}>
        <Toolbar>
          <Link
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scroll.scrollToTop}
            to=""
          >
            <Avatar alt="logo" src={logo} className={classes.large} />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {ServicesLink}
            {WorkLink}
            {ContactLink}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show menu"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navigation;
