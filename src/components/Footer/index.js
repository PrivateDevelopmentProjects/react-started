import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(5),
    textAlign: "center",
    borderTop: "1px solid",
    borderColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <div id="footer" className={classes.section}>
      <p>
        © {year} A.G. Residential Landscapes |
        <Button color="primary">Privacy</Button> |{" "}
        <Button color="primary">Terms</Button>
      </p>
    </div>
  );
};

export default Footer;
