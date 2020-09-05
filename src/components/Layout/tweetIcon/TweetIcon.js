import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "rgb(255, 255, 255);",
    height: "1.5em",
    verticalAlign: "text-bottom",
    maxWidth: "100%",
    position: "relative",
    display: "inline",
    overflow: "hidden",
    lineHeight: 1,
    fontWeight: "bold",
    fontSize: "20px",
  },
  btn: {
    backgroundColor: "rgba(29,161,242,1.00)",
    position: "fixed",
    top: 0,
    zIndex: 9,
    marginTop: "50rem",
    width: "60px",
    height: "60px",
  },
  path: {
    fill: "rgb(255, 255, 255)",
  },
});

const TweetIcon = () => {
  const classes = useStyles();
  return (
    <Fab size="small" variant="round" className={classes.btn}>
      <svg viewBox="0 0 24 24" className={classes.root}>
        <g>
          <path
            className={classes.path}
            d="M 8.8 7.2 H 5.6 V 3.9 c 0 -0.4 -0.3 -0.8 -0.8 -0.8 s -0.7 0.4 -0.7 0.8 v 3.3 H 0.8 c -0.4 0 -0.8 0.3 -0.8 0.8 s 0.3 0.8 0.8 0.8 h 3.3 v 3.3 c 0 0.4 0.3 0.8 0.8 0.8 s 0.8 -0.3 0.8 -0.8 V 8.7 H 9 c 0.4 0 0.8 -0.3 0.8 -0.8 s -0.5 -0.7 -1 -0.7 Z m 15 -4.9 v -0.1 h -0.1 c -0.1 0 -9.2 1.2 -14.4 11.7 c -3.8 7.6 -3.6 9.9 -3.3 9.9 c 0.3 0.1 3.4 -6.5 6.7 -9.2 c 5.2 -1.1 6.6 -3.6 6.6 -3.6 s -1.5 0.2 -2.1 0.2 c -0.8 0 -1.4 -0.2 -1.7 -0.3 c 1.3 -1.2 2.4 -1.5 3.5 -1.7 c 0.9 -0.2 1.8 -0.4 3 -1.2 c 2.2 -1.6 1.9 -5.5 1.8 -5.7 Z"
          ></path>
        </g>
      </svg>
    </Fab>
  );
};

export default TweetIcon;
