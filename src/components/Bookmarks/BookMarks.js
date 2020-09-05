import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "39px",
    paddingBottom: "39px",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "1%",
    height: "100%",
    textAlign: "center",
    borderRight: "1px solid rgb(230, 236, 240)",
    borderLeft: "1px solid rgb(230, 236, 240)",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6%",
    },
  },
  heading: {
    marginBottom: "10px",
    fontWeight: "bold",
    fontSize: "19px",
    color: "rgb(20, 23, 26)",
  },
  subheading: {
    whiteSpace: "pre-line",
    fontWeight: 400,
    fontSize: "15px",
    color: "rgb(101, 119, 134)",
  },
}));

const BookMarks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.heading}>
          You haven't added any Tweets to your Bookmarks yet
        </Typography>
      </div>
      <div>
        <Typography className={classes.subheading}>
          when you do, they'll show up here.
        </Typography>
      </div>
    </div>
  );
};

export default BookMarks;
