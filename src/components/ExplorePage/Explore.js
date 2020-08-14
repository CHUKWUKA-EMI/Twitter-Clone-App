import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  IconButton,
  Divider,
  Typography,
  ListItem,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import PopupList from "./ListItem/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "1%",
  },
  paper: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
  frame: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    transitionProperty: "backgroundColor, boxShadow",
    trasitionDuration: "0.2s",
    height: "35%",
    position: "relative",
    backgroundColor: "rgb(101 119 134)",
    paddingTop: "30%",
    paddingLeft: theme.spacing(2),
    cursor: "pointer",
  },
  subtitle: {
    font: "inherit",
    color: "White",
    fontSize: "20px",
    fontWeight: "500px",
    height: "15%",
    paddingBottom: "1rem",
  },
  subtitle2: {
    font: "inherit",
    fontSize: "19px",
    color: "rgb(20, 23, 26);",
    fontWeight: 800,
  },
  subtitle2Block: {
    display: "flex",
    height: theme.spacing(6),
    padding: theme.spacing(2),
  },
  trendHeader: {
    display: "flex",
    font: "inherit",
    fontSize: "13px",
    color: "rgb(101, 119, 134)",
    fontWeight: 500,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  user: {
    font: "inherit",
    fontWeight: "bold",
    color: "rgb(20, 23, 26)",
    fontSize: "15px",
    paddingTop: "2px",
  },
  tweetCount: {
    font: "inherit",
    fontSize: "13px",
    marginTop: "5px",
    color: "rgb(101, 119, 134)",
    lineHeight: "calc(19.6875px)",
    fontWeight: 500,
  },
  container: {
    padding: theme.spacing(1),
    position: "relative",
    width: "100%",
  },
  span: {
    color: "white",
    fontSize: "15px",
    fontWeight: "20px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "5%",
    marginTop: "0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const Explore = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  let trends = [0, 1, 2, 3, 4, 5];

  const handleExpandClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className={classes.frame} item>
          <span className={classes.span}>Covid-19. Live</span>
          <Typography className={classes.subtitle} variant="subtitle1">
            Updates on Covid-19 in Nigeria
          </Typography>
        </Grid>
        <Divider />
        <Grid item className={classes.subtitle2Block}>
          <Typography className={classes.subtitle2} variant="subtitle2">
            Trends for you
          </Typography>
        </Grid>
        <Divider />
        {trends.map((trend) => {
          return (
            <div key={trend}>
              <ListItem key={trend} button>
                <Grid item className={classes.container}>
                  {" "}
                  <div
                    onDoubleClick={() => history.push("/layout/search")}
                    className={classes.trendBody}
                  >
                    <div className={classes.trendHeader}>
                      Gaming. Trending
                      <IconButton
                        className={classes.expand}
                        onClick={handleExpandClick}
                      >
                        <ExpandMore />{" "}
                      </IconButton>
                    </div>
                    <PopupList
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                    />
                    <div>
                      <Typography className={classes.user} variant="body1">
                        Kiki
                      </Typography>
                    </div>
                    <div>
                      <Typography className={classes.tweetCount}>
                        65.1k Tweets
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </Paper>
    </Grid>
  );
};

export default Explore;
