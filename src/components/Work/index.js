import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    height: "100vh",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

const generateSampleData = () => {
  var data = [];

  for (var i = 0; i < 10; i++) {
    data.push({
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "Image",
      author: "author",
      size: 2,
    });
    data.push({
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "Image",
      author: "author",
      size: 1,
    });
    data.push({
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "Image",
      author: "author",
      size: 1,
    });
  }

  return data;
};

const tileData = generateSampleData();

const Work = () => {
  const classes = useStyles();
  return (
    <div id="work" className={classes.section}>
      <Container>
        <div className={classes.root}>
          <GridList cellHeight={200} className={classes.gridList} cols={6}>
            {tileData.map((tile) => (
              <GridListTile key={Math.random()} cols={tile.size} rows={2}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  titlePosition="top"
                  actionIcon={
                    <IconButton
                      aria-label={`star ${tile.title}`}
                      className={classes.icon}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </div>
  );
};

export default Work;
