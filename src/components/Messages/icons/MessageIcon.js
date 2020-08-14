import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1.5em",
    flexShrink: 0,
    color: "rgb(255, 255, 255)",
    borderColor: "white",
    verticalAlign: "text-bottom",
    display: "inline",
    maxWidth: "100%",
    position: "relative",
    lineHeight: 1,
    fontSize: "15px",
    fill: "rgb(255,255,255)",
  },
}));

const MessageIcon = () => {
  const classes = useStyles();

  return (
    <div>
      <svg viewBox="0 0 24 24" className={classes.root}>
        <g>
          <path d="M 23.25 3.25 h -2.425 V 0.825 c 0 -0.414 -0.336 -0.75 -0.75 -0.75 s -0.75 0.336 -0.75 0.75 V 3.25 H 16.9 c -0.414 0 -0.75 0.336 -0.75 0.75 s 0.336 0.75 0.75 0.75 h 2.425 v 2.425 c 0 0.414 0.336 0.75 0.75 0.75 s 0.75 -0.336 0.75 -0.75 V 4.75 h 2.425 c 0.414 0 0.75 -0.336 0.75 -0.75 s -0.336 -0.75 -0.75 -0.75 Z m -3.175 6.876 c -0.414 0 -0.75 0.336 -0.75 0.75 v 8.078 c 0 0.414 -0.337 0.75 -0.75 0.75 H 4.095 c -0.412 0 -0.75 -0.336 -0.75 -0.75 V 8.298 l 6.778 4.518 c 0.368 0.246 0.79 0.37 1.213 0.37 c 0.422 0 0.844 -0.124 1.212 -0.37 l 4.53 -3.013 c 0.336 -0.223 0.428 -0.676 0.204 -1.012 c -0.223 -0.332 -0.675 -0.425 -1.012 -0.2 l -4.53 3.014 c -0.246 0.162 -0.563 0.163 -0.808 0 l -7.586 -5.06 V 5.5 c 0 -0.414 0.337 -0.75 0.75 -0.75 h 9.094 c 0.414 0 0.75 -0.336 0.75 -0.75 s -0.336 -0.75 -0.75 -0.75 H 4.096 c -1.24 0 -2.25 1.01 -2.25 2.25 v 13.455 c 0 1.24 1.01 2.25 2.25 2.25 h 14.48 c 1.24 0 2.25 -1.01 2.25 -2.25 v -8.078 c 0 -0.415 -0.337 -0.75 -0.75 -0.75 Z"></path>
        </g>
      </svg>
    </div>
  );
};

export default MessageIcon;
