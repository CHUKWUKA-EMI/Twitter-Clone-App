import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/PersonOutline";
import BookmarksIcon from "@material-ui/icons/BookmarkOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import Lock from "@material-ui/icons/Lock";
import CloseIcon from "@material-ui/icons/Close";
import BrightnessIcon from "@material-ui/icons/Brightness4";
import { IconButton } from "@material-ui/core";
import Switch from "../Switch/IOSSwitch";

const useStyles = makeStyles({
  root: {
    marginBottom: "1rem",
    font: "inherit",
    fontWeight: "bold",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    fontWeight: "600px",
    textDecoration: "none",
    textDecorationColor: "none",
    color: "grey",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "1rem",
    marginTop: "1rem",
    alignItems: "center",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "1.5rem",
    wordSpacing: "1.5rem",
  },
  icons: {
    color: "rgba(29,161,242,1.00)",
    height: "2rem",
    width: "2rem",
  },
  btn: {
    textTransform: "capitalize",
    marginTop: "3rem",
    marginLeft: "1rem",
    border: "1.5px solid rgba(29,161,242,1.00)",
    fontWeight: "bold",
    borderRadius: "1.5rem",
  },
  info: {
    marginLeft: "1.5rem",
  },
});

export default function SideDrawer(props) {
  const classes = useStyles();
  const history = useHistory();

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>

          <ListItemText
            onClick={() => history.push("/layout/profile")}
            primary="Profile"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookmarksIcon />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings and privacy" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          className={classes.root}
          open={props.open}
          onClose={props.onClose}
        >
          <header className={classes.header}>
            <div>Account Info</div>
            <IconButton onClick={props.iconClick}>
              <CloseIcon className={classes.icons} />
            </IconButton>
          </header>
          <Divider />
          <div>
            <div className={classes.info}>
              <div>
                <Avatar />
              </div>
              <div>
                Name <Lock />
              </div>
              <div> @username</div>
            </div>
            <div>
              <span className={classes.links}>
                <Link className={classes.link}>Following</Link>{" "}
                <Link className={classes.link}>Followers</Link>
              </span>
            </div>
            {list()}
            <Divider />
            <Button className={classes.btn}>Log out</Button>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
