import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Hidden from "@material-ui/core/Hidden";
import { Divider } from "@material-ui/core";
import LabelBottomNavigation from "./BottomNav/BottomNav";
import HomePage from "../HomePage/HomePage";
import SideNavigation from "./SideNav/SideNav";
import NotificationsPage from "../Notifications/index";
import ProfilePage from "../Profile/ProfilePage";
import ExplorePage from "../ExplorePage/Explore";
import TopNavigation from "./TopNav/TopNavigation";
import SearchDetails from "../ExplorePage/SearchDetails/Search";
import SideDrawer from "../SideDrawer/SideDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
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
    width: "100%",
    height: "100vh",
  },
  tweet: {
    backgroundColor: "rgba(29,161,242,1.00)",
    marginLeft: "1rem",
    color: "white",
  },
  topnav: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    width: "100%",
    zIndex: 1,
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const wrapper = React.createRef();
  const [value, setValue] = React.useState("");
  const [state, setState] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const openDrawer = () => {
    setState(true);
  };

  return (
    <div ref={wrapper} className={classes.root}>
      <Hidden mdUp>
        <SideDrawer
          iconClick={() => setState(false)}
          onClick={() => setState(false)}
          onKeyDown={() => setState(false)}
          open={state}
          onClose={() => setState(false)}
        />
      </Hidden>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Hidden smDown>
              <Grid item md={4}>
                <Paper className={classes.paper1}>
                  <SideNavigation
                    onClickHome={() => setValue("Home")}
                    onClickNotify={() => setValue("Notifications")}
                    onClickProfile={() => setValue("Profile")}
                  />
                </Paper>
              </Grid>
            </Hidden>
            <Divider />
            <Grid className={classes.content} item md={5}>
              <header className={classes.topnav}>
                <TopNavigation onClick={openDrawer} text={value} />
              </header>
              <Route exact path="/layout" component={HomePage} />
              <Route path="/layout/home" component={HomePage} />
              <Route
                path="/layout/notifications"
                component={NotificationsPage}
              />
              <Route path="/layout/profile" component={ProfilePage} />
              <Route path="/layout/explore" component={ExplorePage} />
              <Route path="/layout/search" component={SearchDetails} />
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
            <Divider />
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
