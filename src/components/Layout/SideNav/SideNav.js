import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Fab";
import InboxIcon from "@material-ui/icons/MailOutline";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import ProfileIcon from "@material-ui/icons/PersonOutlineOutlined";
import {
  BookmarkBorder as Bookmark,
  MoreHoriz,
  Twitter,
} from "@material-ui/icons";
import TweetButton from "./TweetButton";
import LogoutButton from "./LogoutButton/LogoutButton";
import LogoutPopover from "./LogoutButton/LogoutModal";
import MorePopover from "./More/More";
import "./sidenav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "255px",
    // maxWidth: "relative",
    backgroundColor: theme.palette.background.paper,
    position: "fixed",
    marginLeft: "10%",
    alignItems: "left",
    WebkitBoxPack: "justify",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "4%",
      width: "fit-content",
    },
  },
  twitter: {
    color: "rgba(29,161,242,1.00);",
    marginLeft: "1.2rem",
    height: "2.5rem",
    width: "2.5rem",
  },
  list: {
    position: "fixed",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(29,161,242,1.00);",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(29,161,242,1.00)",
    },
    [theme.breakpoints.down("md")]: {
      width: "0px",
    },

    "& .MuiFab-extended": {
      [theme.breakpoints.down("md")]: {
        width: "0px",
      },
    },
  },
  btnDiv: {
    width: "12rem",
  },
  listItem: {
    borderRadius: "2rem",
    width: "fit-content",
    "&:hover, &:active, &.active": {
      backgroundColor: "rgb(206,233,234)",
      color: "rgba(29,161,242,1.00)",
      "& .MuiSvgIcon-root": {
        color: "rgba(29,161,242,1.00)",
      },
      "& .MuiTypography-root": {
        color: "rgba(29,161,242,1.00)",
      },
    },
  },
  link: {
    textDecoration: "none",
    textDecorationColor: "none",
    "& .MuiTypography-root": {
      fontWeight: "bold",
      fontSize: "19px",
      color: "black",
    },
    "&:hover, &:active, &.active": {
      "& .MuiTypography-root": {
        fontWeight: "bold",
        fontSize: "19px",
        color: "rgba(29,161,242,1.00)",
        "&:focus, &.active": {
          color: "rgba(29,161,242,1.00)",
        },
      },
      "& .MuiSvgIcon-root": {
        color: "rgba(29,161,242,1.00)",
      },
    },
  },

  icons: {
    width: "2.5rem",
    height: "1.75rem",
    color: "rgb(20, 23, 26);",
    "&:hover, &:active, &.active": {
      color: "rgba(29,161,242,1.00)",
    },
  },

  svg: {
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    width: "2.5rem",
    marginLeft: "0.1rem",
    height: "1.75rem",
    position: "relative",
  },
  tweetButton: {
    marginLeft: "0rem",
  },
  logout: {
    marginTop: "8rem",
  },
  popover: {
    positon: "absolute",
    marginBottom: "4rem",
  },
}));

const HashTag = () => {
  const classes = useStyles();

  return (
    <svg viewBox="0 0 24 24" className={classes.svg}>
      <g>
        <path d="M20.585 9.468c.66 0 1.2-.538 1.2-1.2 0-.662-.54-1.2-1.2-1.2h-3.22l.31-3.547c.027-.318-.07-.63-.277-.875-.206-.245-.495-.396-.822-.425-.65-.035-1.235.432-1.293 1.093l-.326 3.754H9.9l.308-3.545c.06-.658-.43-1.242-1.097-1.302-.665-.05-1.235.43-1.293 1.092l-.325 3.754h-3.33c-.663 0-1.2.538-1.2 1.2 0 .662.538 1.2 1.2 1.2h3.122l-.44 5.064H3.416c-.662 0-1.2.54-1.2 1.2s.538 1.202 1.2 1.202h3.22l-.31 3.548c-.057.657.432 1.24 1.09 1.3l.106.005c.626 0 1.14-.472 1.195-1.098l.327-3.753H14.1l-.308 3.544c-.06.658.43 1.242 1.09 1.302l.106.005c.617 0 1.142-.482 1.195-1.098l.325-3.753h3.33c.66 0 1.2-.54 1.2-1.2s-.54-1.202-1.2-1.202h-3.122l.44-5.064h3.43zm-5.838 0l-.44 5.063H9.253l.44-5.062h5.055z"></path>
      </g>
    </svg>
  );
};

const SideNavigation = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const closeMore = () => {
    setOpenMore(false);
  };
  return (
    <div className={classes.root}>
      <Twitter className={classes.twitter} />
      <List
        className={classes.list}
        component="nav"
        aria-label="main navigation folders"
      >
        <ListItem button className={classes.listItem}>
          <ListItemIcon onClick={() => history.push("/layout/home")}>
            <HomeIcon className={classes.icons} />
          </ListItemIcon>
          <NavLink
            onClick={props.onClickHome}
            to="/layout/home"
            className={classes.link}
          >
            <Hidden mdDown>
              <ListItemText primary="Home" />
            </Hidden>
          </NavLink>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon onClick={() => history.push("/layout/explore")}>
            <HashTag className={classes.icons} />
          </ListItemIcon>
          <NavLink
            onClick={props.onClickExplore}
            to="/layout/explore"
            className={classes.link}
          >
            <Hidden mdDown>
              <ListItemText primary="Expore" />
            </Hidden>
          </NavLink>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon onClick={() => history.push("/layout/notifications")}>
            <NotificationsIcon className={classes.icons} />
          </ListItemIcon>
          <NavLink
            onClick={props.onClickNotify}
            to="/layout/notifications"
            className={classes.link}
          >
            <Hidden mdDown>
              <ListItemText primary="Notifications" />
            </Hidden>
          </NavLink>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon onClick={() => history.push("/layout/messages")}>
            <InboxIcon className={classes.icons} />
          </ListItemIcon>
          <NavLink
            onClick={props.onClickMessage}
            to="/layout/messages"
            className={classes.link}
          >
            <Hidden mdDown>
              <ListItemText primary="Messages" />
            </Hidden>
          </NavLink>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon onClick={() => history.push("/layout/bookmarks")}>
            <Bookmark className={classes.icons} />
          </ListItemIcon>
          <NavLink
            onClick={props.onClickBookmarks}
            to="/layout/bookmarks"
            className={classes.link}
          >
            <Hidden mdDown>
              <ListItemText primary="Bookmarks" />
            </Hidden>
          </NavLink>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon onClick={() => history.push("/layout/profile")}>
            <ProfileIcon className={classes.icons} />
          </ListItemIcon>
          <NavLink
            onClick={props.onClickProfile}
            to="/layout/profile"
            className={classes.link}
          >
            <Hidden mdDown>
              <ListItemText primary="Profle" />
            </Hidden>
          </NavLink>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon onClick={() => setOpenMore(true)}>
            <MoreHoriz className={classes.icons} />
          </ListItemIcon>
          <Hidden mdDown>
            <ListItemText primary="More" />
          </Hidden>
        </ListItem>
        <Hidden mdDown>
          <Button
            onClick={props.openTwtModal}
            size="large"
            variant="extended"
            color="primary"
            className={classes.button}
            aria-label="add"
          >
            <div className={classes.btnDiv}>
              <span>Tweet</span>
            </div>
          </Button>
        </Hidden>
        <Hidden lgUp>
          <div onClick={props.openTweet} className={classes.tweetButton}>
            <TweetButton />
          </div>
        </Hidden>
        <MorePopover
          anchorPosition={{ left: 113, top: 293 }}
          open={openMore}
          onClose={closeMore}
        />
        <div className={classes.popover}>
          <LogoutPopover
            anchorPosition={{ left: 113, top: 393 }}
            open={open}
            onClose={handleClose}
          />
        </div>
        <div onClick={() => setOpen(true)} className={classes.logout}>
          <LogoutButton />
        </div>
      </List>
    </div>
  );
};

export default SideNavigation;
