import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: "63.99px",
    minHeight: "60vh",
    marginTop: "30px",
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  spaced: {
    marginTop: theme.spacing(5),
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.section} id="contact">
      <h1>Let's Start That Project Today</h1>
      <h3>Yes! Our estimates are always free</h3>
      <h4 className={classes.spaced}>
        Please, tell us how we can help. Include your contact information and
        our team will give you a call in the next 24 hours.
      </h4>
      {/* <Grid container spacing={3} justify="center" className={classes.spaced}>
        <Grid item>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Your Name
            </InputLabel>
            <Input
              id="name"
              placeholder="Tell us who to contact"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Your Name
            </InputLabel>
            <Input
              id="name"
              placeholder="Tell us who to contact"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Contact;
