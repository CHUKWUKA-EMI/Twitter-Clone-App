import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Tab,
  Tabs,
  Button,
  Paper,
  Avatar,
  Box,
  Hidden,
  Divider,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Lock,
  KeyboardBackspace,
  CalendarToday,
  NavigateBefore,
  NavigateNext,
} from "@material-ui/icons";
import TweetCard from "../HomePage/TweetsCard/TweetsCard";
import Media from "./Media";
import EditProfile from "./EditProfile/EditProfile";
import "roboto-fontface";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "sticky",
    top: "0rem",
    marginBottom: "0rem",
    background: "white",
    color: "gray",
  },
  tab: {
    minWidth: "100px",
    textTransform: "capitalize",
    borderBottomColor: "rgb(29, 161, 242)",
    "&:hover": {
      backgroundColor: "rgb(206,233,234)",
      color: "rgba(29,161,242,1.00)",
    },
    "&:focus": {
      backgroundColor: "rgb(206,233,234)",
      color: "rgba(29,161,242,1.00)",
    },
  },
  tabs: {
    flexGrow: 1,
    display: "flex",
    fontSize: "15px",
    width: "100%",
    "& .MuiTabs-indicator": {
      backgroundColor: "rgba(29,161,242,1.00)",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "80px",
    },
  },
  paper: {
    backgroundColor: "rgb(204, 214, 221)",
    height: "12rem",
    top: "0rem",
    marginTop: "0rem",
  },
  horizontalDiv: {
    display: "flex",
    flexDirection: "row",
  },
  div1: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem",
  },
  backArrow: {
    color: "rgba(29,161,242,1.00)",
  },
  btn: {
    border: "1.5px solid rgba(29,161,242,1.00)",
    color: "rgba(29,161,242,1.00)",
    fontWeight: "bold",
    borderRadius: "1.5rem",
    marginTop: "0.7rem",
    marginRight: "1rem",
    textTransform: "capitalize",
  },
  lock: {
    height: "1.5rem",
    color: "black",
  },
  avatarBox: {
    position: "relative",
    bottom: "1rem",
    top: "8rem",
    marginLeft: "0.7rem",
  },
  avatar: {
    border: "4px solid white",
    height: "8rem",
    width: "8rem",
    marginTop: "7rem",
  },
  nameTypo: {
    color: "black",
    font: "inherit",
    fontWeight: "bold",
    fontSize: "20px",
  },
  linksDiv: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
  },
  links: {
    textDecoration: "none",
    font: "inherit",
    color: "grey",
    fontWeight: "100px",
    fontSize: "15px",
  },
}));

const ProfilePage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = React.useState("Tweets");
  const [editProfile, setEditProfile] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNextTab = () => {
    let newValue = value;
    if (newValue !== 3) {
      newValue = newValue + 1;
      setValue(newValue);
    }
  };

  const handleBackTab = () => {
    let newValue = value;
    if (newValue !== 0) {
      newValue = newValue - 1;
      setValue(newValue);
    }
  };

  const openProfileEditor = () => {
    setEditProfile(true);
  };

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item xs={12}>
        <header className={classes.root}>
          <div className={classes.div1}>
            <div>
              <Button onClick={() => history.goBack()}>
                <KeyboardBackspace className={classes.backArrow} />
              </Button>
            </div>
            <div className={classes.horizontalDiv}>
              <Typography className={classes.nameTypo} variant="h6">
                Emi Chukwuka
              </Typography>
              <Lock className={classes.lock} />
            </div>
          </div>
        </header>
      </Grid>

      <main style={{ width: "100%", marginTop: "0px" }}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {" "}
              <div className={classes.avatarBox}>
                <Box>
                  <Avatar className={classes.avatar}>Profile Image</Avatar>
                </Box>
              </div>
            </Paper>
          </Grid>
          <Grid style={{ marginLeft: "1rem" }} item xs={12}>
            <div
              style={{ justifyContent: "space-between" }}
              className={classes.horizontalDiv}
            >
              <div></div>
              <Button onClick={openProfileEditor} className={classes.btn}>
                <span>Edit profile</span>
              </Button>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{ marginTop: "1rem" }}
                className={classes.horizontalDiv}
              >
                <Typography className={classes.nameTypo} variant="h6" id="name">
                  Emi Chukwuka
                </Typography>
                <Lock />
              </div>
              <span>
                <Typography id="username">
                  <small>@emi_chukwuka</small>
                </Typography>
              </span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <span>
                <Typography id="status">My status</Typography>
              </span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <div className={classes.horizontalDiv}>
                <CalendarToday fontSize="small" />
                <div style={{ width: "0.8rem" }}></div>
                <Typography id="date-joined">Date Joined</Typography>
              </div>
            </div>
            <div className={classes.linksDiv}>
              <Link className={classes.links} to="/following">
                Following
              </Link>
              <div style={{ width: "2.5rem" }}></div>
              <Link className={classes.links} to="/followers">
                Followers
              </Link>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid style={{ flexGrow: 1 }} item xs={12}>
            <div>
              <Hidden smUp>
                <Button onClick={handleBackTab}>
                  <NavigateBefore className={classes.backArrow} />
                </Button>
              </Hidden>
              <Tabs
                variant="fullWidth"
                component="nav"
                className={classes.tabs}
                value={value}
                indicatorColor="primary"
                onChange={handleChange}
              >
                <Tab
                  tabIndex={0}
                  label="Tweets"
                  onClick={() => setTab("Tweets")}
                  className={classes.tab}
                />
                <Tab
                  tabIndex={1}
                  label="Tweets & replies"
                  onClick={() => setTab("Tweets & replies")}
                  className={classes.tab}
                />
                <Tab
                  tabIndex={2}
                  label="Media"
                  onClick={() => setTab("Media")}
                  className={classes.tab}
                />
                <Tab
                  tabIndex={3}
                  label="Likes"
                  onClick={() => setTab("Likes")}
                  className={classes.tab}
                />
              </Tabs>
              <Divider />
              <Hidden smUp>
                <Button onClick={handleNextTab}>
                  <NavigateNext className={classes.backArrow} />
                </Button>
              </Hidden>
            </div>
          </Grid>
          <Grid item xs={12}>
            {tab === "Tweets" && <TweetCard />}
            {tab === "Tweets & replies" && <TweetCard />}
            {tab === "Media" && <Media onClick={props.openTweet} />}
            {tab === "Likes" && (
              <Typography style={{ textAlign: "center" }} variant="subtitle1">
                Likes
              </Typography>
            )}
          </Grid>
        </Grid>
        <EditProfile
          open={editProfile}
          onClose={() => setEditProfile(false)}
          closeModal={() => setEditProfile(false)}
        />
      </main>
    </Grid>
  );
};

export default ProfilePage;
