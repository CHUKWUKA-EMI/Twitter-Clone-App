import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TweetCard from "./TweetsCard/TweetsCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "3.4rem",
    marginBottom: "3rem",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const items = [0, 1, 2, 3, 4, 5];
  return (
    <Grid
      container
      justify="center"
      direction="row"
      className={classes.root}
      spacing={2}
    >
      {items.map((value) => (
        <Grid item xs={12} key={value}>
          <Paper key={value}>
            <TweetCard key={value} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
