import React from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Hidden from "@material-ui/core/Hidden";
import { Divider, Link } from "@material-ui/core";
import LabelBottomNavigation from "./BottomNav/BottomNav";
import HomePage from "../HomePage/HomePage";
import SideNavigation from "./SideNav/SideNav";
import NotificationsPage from "../Notifications/index";
import ProfilePage from "../Profile/ProfilePage";
import ExplorePage from "../ExplorePage/Explore";
import TopNavigation from "./TopNav/TopNavigation";
import SearchDetails from "../ExplorePage/SearchDetails/Search";
import SideDrawer from "../SideDrawer/SideDrawer";
import MessagePage from "../Messages/Messages";
import TweetIcon from "./tweetIcon/TweetIcon";
import BookMarks from "../Bookmarks/BookMarks";
import RightBar from "./RightBar/RightBar";
import CreateTweet from "./CreateTweet";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
  },
  paper: {
    height: "100",
    width: "relative",
    position: "relative",
    marginRight: "5%",
    overflowY: "hidden",
  },
  sidenavGrid: {
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
    },
  },
  paper1: {
    height: "100%",
    position: "fixed",
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
      position: "fixed",
      marginLeft: "6%",
    },
  },
  search: {
    position: "relative",
    borderRadius: "1rem",

    backgroundColor: fade(theme.palette.common.black, 0.05),
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
    marginLeft: "1%",
    zIndex: 1,
  },
  tweetIcon: {
    marginLeft: "80%",
  },
  messagepage: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
      paddingBottom: "10rem",
    },
  },
  trends: {
    position: "relative",
    marginTop: "15px",
  },
  footer: {
    color: "rgb(101, 119, 134)",
    fontSize: "13px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    lineHeight: "calc(19.6875px)",
    fontWeight: 400,
    "& .MuiTypography-colorPrimary": {
      color: "rgb(101, 119, 134)",
    },
  },
  footerdiv: {
    marginTop: "15px",
  },
}));

const Layout = () => {
  const classes = useStyles();
  const location = useLocation();
  const wrapper = React.createRef();
  const [value, setValue] = React.useState("Home");
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const openDrawer = () => {
    setState(true);
  };

  React.useEffect(() => {
    if (location.pathname === "/layout/messages") {
      setValue("Messages");
    }
  }, [location.pathname]);

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
              <Grid className={classes.sidenavGrid} item xs={4}>
                <div className={classes.paper1}>
                  <SideNavigation
                    openTwtModal={handleOpen}
                    openTweet={handleOpen}
                    onClickHome={() => setValue("Home")}
                    onClickNotify={() => setValue("Notifications")}
                    onClickProfile={() => setValue("Profile")}
                    onClickMessage={() => setValue("Messages")}
                    onClickBookmarks={() => setValue("Bookmarks")}
                    onClickExplore={() => setValue("Search")}
                  />
                </div>
              </Grid>
            </Hidden>
            <Divider />
            {value === "Messages" && (
              <Grid className={classes.messagepage} item xs={8}>
                <Route path="/layout/messages" component={MessagePage} />
                <Hidden smUp>
                  <div className={classes.tweetIcon}>
                    <TweetIcon />
                  </div>
                </Hidden>
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
            )}

            {[
              "Home",
              "Search",
              "Profile",
              "Notifications",
              "Bookmarks",
            ].includes(value) && (
              <>
                <Grid className={classes.content} item md={5}>
                  <header className={classes.topnav}>
                    <TopNavigation
                      openMessage={() => setValue("Messages")}
                      onClick={openDrawer}
                      text={value}
                    />
                  </header>
                  <Switch>
                    <Route exact path="/layout" component={HomePage} />
                    <Route path="/layout/home" component={HomePage} />
                    <Route
                      path="/layout/notifications"
                      component={NotificationsPage}
                    />
                    <Route path="/layout/profile">
                      <ProfilePage openTweet={handleOpen} />
                    </Route>

                    <Route path="/layout/explore" component={ExplorePage} />
                    <Route path="/layout/search" component={SearchDetails} />
                    <Route path="/layout/bookmarks" component={BookMarks} />
                  </Switch>
                  <CreateTweet
                    open={open}
                    onClose={handleClose}
                    closeModal={() => setOpen(false)}
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
                  <Hidden smUp>
                    <div className={classes.tweetIcon}>
                      <TweetIcon />
                    </div>
                  </Hidden>
                </Grid>
                <Divider />
                <Hidden smDown>
                  <Grid item xs={3}>
                    <div className={classes.paper}>
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
                      <div className={classes.trends}>
                        <RightBar />
                      </div>
                      <div className={classes.footerdiv}>
                        <footer className={classes.footer}>
                          <Link
                            target="_blank"
                            rel="noopener"
                            href="https://twitter.com/tos"
                          >
                            Terms
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener"
                            href="https://twitter.com/privacy"
                          >
                            Privacy policy
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener"
                            href="https://support.twitter.com/articles/20170514"
                          >
                            Cookies
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener"
                            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html"
                          >
                            Ads info
                          </Link>
                          &copy;{new Date().getUTCFullYear()}, Inc.
                        </footer>
                      </div>
                    </div>
                  </Grid>
                </Hidden>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
