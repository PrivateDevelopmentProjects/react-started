import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ServiceComponent from "../ServiceComponent";
import { Grid, Paper } from "@material-ui/core";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import { Slide } from "react-reveal";
import Container from "@material-ui/core/Container";
import { ThreeDRotation } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: "center",
    padding: theme.spacing(20),
    backgroundColor: theme.palette.background.default,
  },
  serviceList: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div id="services" className={classes.section}>
      <Container maxWidth="md">
        <Slide bottom>
          <h3>
            Our number one goal is to provide the highest quality of service
            always on time. Our customers come to us with realistic expectations
            and we consistently exceed those expectations.
          </h3>
          <p>
            We bring to the table a complete list of services for residential
            &amp; commercial applications, we are confident in completing your
            projects in a professional and timely manner. Partner with our
            business today!
          </p>
        </Slide>
      </Container>
      <Container className={classes.serviceList}>
        <Grid container spacing={3}>
          <Grid item md={12} lg={4}>
            <ServiceComponent
              title="Concrete Services"
              description="Our team specializes in all areas of concrete work, including the construction of concrete driveways, flagstone, handicapped ramps, patios, pavers, retaining walls, walkways."
              image={img1}
            />
          </Grid>
          <Grid item md={12} lg={4}>
            <ServiceComponent
              title="Landscape Services"
              description="We offer services ranging from basic mowing and trimming to landscape design, installation and maintenance, and chemical application."
              image={img2}
            />
          </Grid>
          <Grid item md={12} lg={4}>
            <ServiceComponent
              title="Fencing Services"
              description="When it come to elegance in your property line, our strong and durable iron fence is the solution. Choose from Picket Top Fence, Rail Top Fence, Double Rail Fence, among other styles."
              image={img3}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
