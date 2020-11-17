import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { AccountCircle, PhoneInTalk, EmailRounded } from "@material-ui/icons/";
import { Button } from "@material-ui/core";
import { Slide, Zoom } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0),
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
  },
  margin: {
    margin: theme.spacing(1),
  },
  spaced: {
    padding: theme.spacing(5),
  },
  right: {
    float: "right",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.section} id="contact">
      <Container>
        <Zoom>
          <h1>Let's Start That Project Today</h1>
          <h4>
            Include your contact information and our team will give you a call
            in the next 48 hours.
          </h4>
          <Button color="primary" href="tel:5124296064">
            <PhoneInTalk color="primary" />
            (512) 429-6064
          </Button>
        </Zoom>
        <Slide bottom>
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.spaced}
          >
            <form>
              <TextField
                fullWidth
                className={classes.margin}
                id="contact-name-field"
                label="Name"
                placeholder="Who is contacting us"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                className={classes.margin}
                id="contact-phone-field"
                label="Phone"
                placeholder="Provide us a phone number if we can reach by phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneInTalk color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                className={classes.margin}
                id="contact-email-field"
                label="Email"
                placeholder="Provide us an email if we can reach by email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRounded color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                className={classes.margin}
                rows={10}
                multiline
                id="contact-text-field"
                placeholder="Please, tell us how we can help"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.right}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Slide>
      </Container>
    </div>
  );
};

export default Contact;
