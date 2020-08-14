import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
  paper1: {
    height: "100%",
    position: "fixed",
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

const Layout = (props) => {
  const classes = useStyles();
  const wrapper = React.createRef();
  const [value, setValue] = React.useState("Home");
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
                    onClickMessage={() => setValue("Messages")}
                    onClickBookmarks={() => setValue("Bookmarks")}
                    onClickExplore={() => setValue("Search")}
                  />
                </Paper>
              </Grid>
            </Hidden>
            <Divider />
            {value === "Messages" && (
              <Grid className={classes.messagepage} item xs={8}>
                <Route path="/layout/messages" component={MessagePage} />
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

            {(value === "Home" ||
              value === "Search" ||
              value === "Profile" ||
              value === "Notifications" ||
              value === "Bookmarks") && (
              <>
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
                  <Route path="/layout/bookmarks" component={BookMarks} />

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
