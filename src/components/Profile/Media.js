import React from "react";
import { Grid, Typography, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    backgroundColor: "rgba(29,161,242,1.00);",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(29,161,242,1.00);",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  btnDiv: {
    width: "12rem",
  },
  heading: {
    font: "inherit",
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    marginTop: "1.5rem",
    textAlign: "center",
  },
  paragraph: {
    font: "inherit",
    fontSize: "15px",
    color: "grey",
    marginTop: "1rem",
    textAlign: "center",
  },
}));

const Media = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography className={classes.heading} variant="h6">
          You haven't Tweeted any photos or videos yet
        </Typography>
        <Typography className={classes.paragraph} paragraph>
          When you send Tweets with photos or videos in them, it will show up
          here.
        </Typography>
        <div className={classes.btnContainer}>
          <Fab
            onClick={props.onClick}
            size="large"
            variant="extended"
            className={classes.button}
            aria-label="add"
          >
            <div className={classes.btnDiv}>
              <span>Tweet a photo or video</span>
            </div>
          </Fab>
        </div>
      </Grid>
    </Grid>
  );
};

export default Media;
