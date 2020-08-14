import React from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  icon: {
    color: "rgba(29,161,242,1.00)",
  },
});

const InfoBar = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.names}>
        <div>
          <Typography>Name</Typography>
        </div>
        <div>
          <Typography>@username</Typography>
        </div>
      </div>
      <div>
        <InfoOutlinedIcon className={classes.icon} />
      </div>
    </header>
  );
};

export default InfoBar;
