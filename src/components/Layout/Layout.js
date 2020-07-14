import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Hidden from "@material-ui/core/Hidden";
import LabelBottomNavigation from "./BottomNav/BottomNav";
import HomePage from "../HomePage/HomePage";
import SideNavigation from "./SideNav/SideNav";
import NotificationsPage from "../Notifications/index";
import tweet from "../../assets/icons.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "40rem",
    width: "relative",
    position: "fixed",
    marginRight: "2rem",
  },
  paper1: {
    height: "100%",
    position: "fixed",
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
    width: "40%",
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
  content: {
    borderLeft: "1px solid gray",
    borderRight: "1px solid gray",
    width: "100%",
    height: "100vh",
  },
  tweet: {
    backgroundColor: "rgba(29,161,242,1.00)",
    marginLeft: "1rem",
    color: "white",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const wrapper = React.createRef();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div ref={wrapper} className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Hidden smDown>
              <Grid item md={4}>
                <Paper className={classes.paper1}>
                  <SideNavigation />
                </Paper>
              </Grid>
            </Hidden>
            <Grid className={classes.content} item md={5}>
              <Route exact path="/layout" component={HomePage} />
              <Route path="/layout/home" component={HomePage} />
              <Route
                path="/layout/notifications"
                component={NotificationsPage}
              />

              <Hidden mdUp>
                <LabelBottomNavigation
                  value={value}
                  handleChange={handleChange}
                  homeVal="Home"
                  searchVal="Search"
                  notifyVal="Notifications"
                  inboxVal="Messages"
                />
              </Hidden>
            </Grid>
            <Hidden smDown>
              <Grid item md={3}>
                <Paper className={classes.paper}>
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
                </Paper>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
