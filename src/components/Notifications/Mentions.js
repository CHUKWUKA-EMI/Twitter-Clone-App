import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  content: {
    textAlign: "center",
    flexGrow: 1,
    height: "100%",
    marginTop: "2rem",
  },
}));

const Mentions = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} className={classes.content}>
        <Typography variant="h5">Nothing to see here — yet</Typography>
        <Typography variant="body1" paragraph>
          When someone mentions you, you’ll find it here.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Mentions;
