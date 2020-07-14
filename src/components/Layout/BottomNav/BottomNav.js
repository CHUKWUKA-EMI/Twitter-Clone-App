import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import InboxIcon from "@material-ui/icons/MailOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  icons: {
    width: "2.5rem",
    height: "2.5rem",
  },
}));

export default function LabelBottomNavigation(props) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={props.value}
      onChange={props.handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value={props.homeVal}
        icon={<HomeIcon className={classes.icons} />}
        component={NavLink}
        to="/layout/home"
      />
      <BottomNavigationAction
        label="Search"
        value={props.searchVal}
        icon={<SearchIcon className={classes.icons} />}
      />
      <BottomNavigationAction
        label="Notifications"
        value={props.notifyVal}
        icon={<NotificationIcon className={classes.icons} />}
        component={NavLink}
        to="/layout/notifications"
      />
      <BottomNavigationAction
        label="Messages"
        value={props.inboxVal}
        icon={<InboxIcon className={classes.icons} />}
      />
    </BottomNavigation>
  );
}
