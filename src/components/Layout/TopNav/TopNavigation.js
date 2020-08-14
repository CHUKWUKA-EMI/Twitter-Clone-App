import React from "react";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Popover from "@material-ui/core/Popover";

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
  svg: {
    color: "rgba(29,161,242,1.00)",
    height: "1.5em",
    verticalAlign: "text-bottom",
    display: "inline",
    overflow: "hidden",
    lineHeight: 1,
    fontWeight: "bold",
    fontSize: "15px",
  },
  path: {
    fill: "rgba(29,161,242,1.00)",
  },
}));

const StarIcon = () => {
  const classes = useStyle();
  return (
    <svg viewBox="0 0 24 24" className={classes.svg}>
      <g>
        <path
          className={classes.path}
          d="M 22.772 10.506 l -5.618 -2.192 l -2.16 -6.5 c -0.102 -0.307 -0.39 -0.514 -0.712 -0.514 s -0.61 0.207 -0.712 0.513 l -2.16 6.5 l -5.62 2.192 c -0.287 0.112 -0.477 0.39 -0.477 0.7 s 0.19 0.585 0.478 0.698 l 5.62 2.192 l 2.16 6.5 c 0.102 0.306 0.39 0.513 0.712 0.513 s 0.61 -0.207 0.712 -0.513 l 2.16 -6.5 l 5.62 -2.192 c 0.287 -0.112 0.477 -0.39 0.477 -0.7 s -0.19 -0.585 -0.478 -0.697 Z m -6.49 2.32 c -0.208 0.08 -0.37 0.25 -0.44 0.46 l -1.56 4.695 l -1.56 -4.693 c -0.07 -0.21 -0.23 -0.38 -0.438 -0.462 l -4.155 -1.62 l 4.154 -1.622 c 0.208 -0.08 0.37 -0.25 0.44 -0.462 l 1.56 -4.693 l 1.56 4.694 c 0.07 0.212 0.23 0.382 0.438 0.463 l 4.155 1.62 l -4.155 1.622 Z M 6.663 3.812 h -1.88 V 2.05 c 0 -0.414 -0.337 -0.75 -0.75 -0.75 s -0.75 0.336 -0.75 0.75 v 1.762 H 1.5 c -0.414 0 -0.75 0.336 -0.75 0.75 s 0.336 0.75 0.75 0.75 h 1.782 v 1.762 c 0 0.414 0.336 0.75 0.75 0.75 s 0.75 -0.336 0.75 -0.75 V 5.312 h 1.88 c 0.415 0 0.75 -0.336 0.75 -0.75 s -0.335 -0.75 -0.75 -0.75 Z m 2.535 15.622 h -1.1 v -1.016 c 0 -0.414 -0.335 -0.75 -0.75 -0.75 s -0.75 0.336 -0.75 0.75 v 1.016 H 5.57 c -0.414 0 -0.75 0.336 -0.75 0.75 s 0.336 0.75 0.75 0.75 H 6.6 v 1.016 c 0 0.414 0.335 0.75 0.75 0.75 s 0.75 -0.336 0.75 -0.75 v -1.016 h 1.098 c 0.414 0 0.75 -0.336 0.75 -0.75 s -0.336 -0.75 -0.75 -0.75 Z"
        ></path>
      </g>
    </svg>
  );
};

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
                <Avatar style={{ marginLeft: 0 }} />
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
            <StarIcon />
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
          ></Popover>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default TopNavigation;
