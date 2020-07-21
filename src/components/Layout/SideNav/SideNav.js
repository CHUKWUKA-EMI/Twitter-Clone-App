import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
import Hashtag from "../../../assets/icons.json";
import "./sidenav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "relative",
    maxWidth: "relative",
    backgroundColor: theme.palette.background.paper,
    position: "fixed",
    marginLeft: "4rem",
  },
  twitter: {
    color: "rgba(29,161,242,1.00);",
    marginLeft: "1.2rem",
    height: "2.5rem",
    width: "2.5rem",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(29,161,242,1.00);",
    color: "white",
    textTransform: "capitalize",
  },
  btnDiv: {
    width: "12rem",
  },
  link: {
    textDecoration: "none",
    textDecorationColor: "none",
  },
  icons: {
    width: "2.5rem",
    height: "2.5rem",
  },
}));

const HashTag = () => {
  return <img src={Hashtag.icons[3].src} alt="hashtag" />;
};

const SideNavigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Twitter className={classes.twitter} />
      <List component="nav" aria-label="main navigation folders">
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <HomeIcon className={classes.icons} />
          </ListItemIcon>
          <NavLink to="/layout/home" className={classes.link}>
            <ListItemText primary="Home" />
          </NavLink>
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <HashTag className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Expore" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <NotificationsIcon className={classes.icons} />
          </ListItemIcon>
          <NavLink to="/layout/notifications" className={classes.link}>
            <ListItemText primary="Notifications" />
          </NavLink>
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <InboxIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <Bookmark className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <ProfileIcon className={classes.icons} />
          </ListItemIcon>
          <NavLink to="/layout/profile" className={classes.link}>
            <ListItemText primary="Profle" />
          </NavLink>
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <MoreHoriz className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>

        <Button
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
      </List>
    </div>
  );
};

export default SideNavigation;
