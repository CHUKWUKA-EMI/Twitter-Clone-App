import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/Notifications";
import InboxIcon from "@material-ui/icons/InboxOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
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
        icon={<HomeIcon />}
        component={NavLink}
        to="/layout/home"
      />
      <BottomNavigationAction
        label="Search"
        value={props.searchVal}
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Notifications"
        value={props.notifyVal}
        icon={<NotificationIcon />}
        component={NavLink}
        to="/layout/notifications"
      />
      <BottomNavigationAction
        label="Messages"
        value={props.inboxVal}
        icon={<InboxIcon />}
      />
    </BottomNavigation>
  );
}
