import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, fade } from "@material-ui/core/styles";
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
    backgroundColor: fade(theme.palette.common.black, 0.7),
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
  },
  subtitle2: {
    font: "inherit",
    color: "Black",
    fontWeight: "200px",
  },
  subtitle2Block: {
    display: "flex",
    height: theme.spacing(6),
    padding: theme.spacing(2),
  },
  trendHeader: {
    display: "flex",
    font: "inherit",
    fontSize: "15px",
    color: "gray",
    fontWeight: "30px",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  user: {
    font: "inherit",
    fontWeight: "semiBold",
  },
  tweetCount: {
    font: "inherit",
    fontSize: "15px",
    color: "gray",
    fontWeight: "30px",
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
                    onClick={() => history.push("/layout/search")}
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
