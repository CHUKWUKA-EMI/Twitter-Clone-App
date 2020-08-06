import React from "react";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import Hidden from "@material-ui/core/Hidden";
import Popover from "@material-ui/core/Popover";
import IOSSwitch from "../../Switch/IOSSwitch";

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
      width: "100%",
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
    color: "rgba(29,161,242,1.00)",
    height: "2rem",
    width: "2rem",
  },
  appbar: {
    position: "fixed",
    backgroundColor: "white",
    color: "black",
    fontSize: "20px",
    maxWidth: "relative",
    width: "100%",

    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
  },
  accountcircle: {
    backgroundColor: "skyBlue",
  },
  typo: {
    marginLeft: "1.5rem",
    fontWeight: 800,
  },
  popover: {
    transitionDuration: "0.2s",
    fontSize: "15px",

    marginRight: "5%",
  },
}));

const TopNavigation = (props) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.grow}>
      <AppBar elevation={1} className={classes.appbar}>
        <ToolBar>
          <Hidden mdUp>
            <div>
              <IconButton onClick={props.onClick}>
                <AccountCircle className={classes.accountcircle} />
              </IconButton>
            </div>
          </Hidden>
          <Typography className={classes.typo}>{props.text}</Typography>
          {props.text === "Search" ? (
            <Hidden mdUp>
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
            </Hidden>
          ) : (
            ""
          )}
          <div className={classes.grow} />
          <IconButton onClick={handleClick}>
            <SettingsIcon className={classes.setting} />
          </IconButton>
          <Popover
            className={classes.popover}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <IOSSwitch />
          </Popover>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default TopNavigation;
