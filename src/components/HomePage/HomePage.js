import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TweetCard from "./TweetsCard/TweetsCard";
import TopNavigation from "../Layout/TopNav/TopNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3rem",
    marginLeft: 0,
  },
  tweet: {
    marginTop: "2.7rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
    },
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  const HandleDrawer = () => {};

  const items = [0, 1, 2, 3, 4, 5];
  return (
    <Grid
      container
      justify="center"
      direction="row"
      className={classes.root}
      spacing={2}
    >
      <Grid item xs={12}>
        <TopNavigation text={props.iconLabel} onClick={HandleDrawer} />
      </Grid>
      <Grid className={classes.tweet} item xs={12}>
        {items.map((value) => (
          <Paper key={value}>
            <TweetCard key={value} />
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default HomePage;
