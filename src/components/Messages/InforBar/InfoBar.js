import React from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";

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
  title: {
    fontSize: "19px",
    fontWeight: 800,
  },
  titleDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const InfoBar = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      {props.info && (
        <div className={classes.titleDiv}>
          <IconButton onClick={props.closeInfo}>
            <KeyboardBackspace className={classes.icon} />
          </IconButton>
          <Typography className={classes.title}>Conversation info</Typography>
        </div>
      )}
      {!props.info && (
        <>
          <div className={classes.names}>
            <div>
              <Typography>name</Typography>
            </div>
            <div>
              <Typography>@username</Typography>
            </div>
          </div>
          <IconButton onClick={props.switchToInfo}>
            <InfoOutlinedIcon className={classes.icon} />
          </IconButton>
        </>
      )}
    </header>
  );
};

export default InfoBar;
