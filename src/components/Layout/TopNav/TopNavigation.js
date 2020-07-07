import React from "react";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import Hidden from "@material-ui/core/Hidden";

const useStyle = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: "1rem",

    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "grey",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    color: "Black",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  setting: {
    color: "skyBlue",
  },
  appbar: {
    position: "fixed",
    backgroundColor: "white",
    color: "black",
    fontSize: "20px",
    width: "relative",
    [theme.breakpoints.up("md")]: {
      width: "38.45rem",
      marginRight: "24.25rem",
    },
  },
  accountcircle: {
    backgroundColor: "skyBlue",
  },
  typo: {
    marginLeft: "1.5rem",
    fontWeight: 800,
  },
}));

const TopNavigation = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.grow}>
      <AppBar elevation={1} className={classes.appbar}>
        <ToolBar>
          <Hidden mdUp>
            <div onClick={props.onClick}>
              <AccountCircle className={classes.accountcircle} />
            </div>
          </Hidden>
          <Typography className={classes.typo}>{props.text}</Typography>
          {props.text === "Search" ? (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Twitter"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          ) : (
            ""
          )}
          <div className={classes.grow} />
          <SettingsIcon className={classes.setting} />
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default TopNavigation;
