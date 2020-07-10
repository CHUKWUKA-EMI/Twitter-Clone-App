import React from "react";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Fab";
import InboxIcon from "@material-ui/icons/Inbox";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ProfileIcon from "@material-ui/icons/Person";
import { Bookmarks, MoreHoriz, Twitter } from "@material-ui/icons";
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
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(29,161,242,1.00);",
    color: "white",
    textTransform: "capitalize",
  },
  btnDiv: {
    width: "8rem",
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
            <HomeIcon />
          </ListItemIcon>
          <NavLink to="/layout/home">
            <ListItemText primary="Home" />
          </NavLink>
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <HashTag />
          </ListItemIcon>
          <ListItemText primary="Expore" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <Bookmarks />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="Profle" />
        </ListItem>
        <ListItem button className="list-item-icons">
          <ListItemIcon>
            <MoreHoriz />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>

        <Button
          size="medium"
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
