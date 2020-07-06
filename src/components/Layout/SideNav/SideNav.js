import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/Inbox";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import { Bookmarks, More, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "relative",
    maxWidth: "relative",
    backgroundColor: theme.palette.background.paper,
    position: "fixed",
    marginTop: "5rem",
    marginLeft: "2rem",
  },
}));

const SideNavigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Twitter />
      <List component="nav" aria-label="main navigation folders">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Expore" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Bookmarks />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="Profle" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <More />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>
        <Divider />
        <Button>Tweet</Button>
      </List>
    </div>
  );
};

export default SideNavigation;
