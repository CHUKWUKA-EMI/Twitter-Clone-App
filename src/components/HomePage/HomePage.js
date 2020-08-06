import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
import TweetCard from "./TweetsCard/TweetsCard";
import Hidden from "@material-ui/core/Hidden";
import TweetBar from "./TweetBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3rem",
    marginLeft: 0,
  },
  tweet: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
    },
  },
  tweetbar: {
    height: "12rem",
    marginBottom: "1rem",
    marginTop: "0px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.4rem",
      marginTop: "3.5rem",
    },
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  const items = [0, 1, 2, 3, 4, 5];
  return (
    <Grid
      container
      justify="center"
      direction="row"
      className={classes.root}
      spacing={1}
    >
      <Hidden xsDown>
        <Grid item className={classes.tweetbar} xs={12}>
          <TweetBar />
        </Grid>
      </Hidden>
      <Grid className={classes.tweet} item xs={12}>
        {items.map((value) => (
          <Paper square key={value}>
            <TweetCard key={value} />
            <Divider />
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default HomePage;
