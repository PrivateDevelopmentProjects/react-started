import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Privacy from "./privacy";
import Terms from "./terms";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(10, 0),
    textAlign: "center",
    borderTop: "1px solid",
    backgroundColor: theme.palette.primary.main,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: "80vh",
    maxWidth: "80%",
    overflow: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  const [openPrivacy, setOpenPrivacy] = React.useState(false);
  const [openTerms, setOpenTerms] = React.useState(false);

  const handleOpenPrivacy = () => {
    setOpenPrivacy(true);
  };

  const handleOpenTerms = () => {
    setOpenTerms(true);
  };

  const handleClosePrivacy = () => {
    setOpenPrivacy(false);
  };

  const handleCloseTerms = () => {
    setOpenTerms(false);
  };

  return (
    <div id="footer" className={classes.section}>
      <Container>
        <p>
          © {year} A.G. Residential Landscapes |
          <Button onClick={handleOpenPrivacy}>Privacy</Button> |{" "}
          <Button onClick={handleOpenTerms}>Terms</Button>
        </p>

        <Modal
          className={classes.modal}
          open={openPrivacy}
          onClose={handleClosePrivacy}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openPrivacy}>
            <div className={classes.paper}>
              <Privacy />
            </div>
          </Fade>
        </Modal>

        <Modal
          className={classes.modal}
          open={openTerms}
          onClose={handleCloseTerms}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openTerms}>
            <div className={classes.paper}>
              <Terms />
            </div>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
};

export default Footer;
