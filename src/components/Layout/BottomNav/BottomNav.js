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
    "& .MuiBottomNavigationAction-root.Mui-selected": {
      color: "rgba(29,161,242,1.00)",
      "& .makeStyles-icons-45": {
        color: "rgba(29,161,242,1.00)",
      },
    },
    justifyContent: "space-evenly",
  },
  icons: {
    width: "2.5rem",
    height: "2.5rem",
    color: "rgb(20, 23, 26)",
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
        value={props.homeVal}
        icon={<HomeIcon className={classes.icons} />}
        component={NavLink}
        to="/layout/home"
      />
      <BottomNavigationAction
        value={props.searchVal}
        icon={<SearchIcon className={classes.icons} />}
        component={NavLink}
        to="/layout/explore"
      />
      <BottomNavigationAction
        value={props.notifyVal}
        icon={<NotificationIcon className={classes.icons} />}
        component={NavLink}
        to="/layout/notifications"
      />
      <BottomNavigationAction
        value={props.inboxVal}
        icon={<InboxIcon className={classes.icons} />}
        component={NavLink}
        to="/layout/messages"
      />
    </BottomNavigation>
  );
}
