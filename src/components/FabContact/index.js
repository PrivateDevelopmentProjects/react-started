import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FabContact = () => {
  const classes = useStyles();
  return (
    <Link smooth={true} offset={-70} duration={500} to="contact">
      <Fab color="primary" className={classes.fab}>
        <EmailOutlined />
      </Fab>
    </Link>
  );
};

export default FabContact;
