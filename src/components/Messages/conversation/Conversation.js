import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    "& .MuiTypography-body1": {
      fontWeight: 700,
    },
    "& .MuiTypography-body2": {
      fontWeight: 400,
      color: "rgb(101, 119, 134);",
    },
    "& .MuiListItemSecondaryAction-root": {
      top: "20%",
    },
    "& .MuiAvatar-root": {
      width: "50px",
      height: "50px",
    },
  },
  inline: {
    display: "inline",
  },
  btn: {
    backgroundColor: " rgba(29,161,242,1.00)",
    color: "rgba(255, 255, 255)",
    fontWeight: "bold",
    borderRadius: "2rem",
    height: "2rem",
    marginRight: "4%",
    textTransform: "capitalize",
  },
  body1: {
    fontWeight: 400,
    color: "rgb(20, 23, 26)",
    fontSize: "15px",
  },
  secondaryAction: {
    marginTop: "4%",
  },
  notification: {
    fontSize: "19px",
    fontWeight: 800,
    marginLeft: "3%",
  },
  muteNotify: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionDiv: {
    marginTop: "10px",
  },
  textDiv: {
    textAlign: "center",
    justifyContent: "center",
    hover: {
      backgroundColor: "rgb(206,233,234)",
    },
  },
  names: {
    fontWeight: 400,
    fontSize: "15px",
    color: "rgba(29,161,242,1.00)",
    textAlign: "center",
  },
  delete: {
    color: "red",
    fontWeight: 400,
    fontSize: "15px",
    textAlign: "center",
  },
  emptyDiv: {
    height: "10px",
    backgroundColor: "rgb(230, 236, 240)",
  },
  muteText: {
    marginLeft: "3%",
    color: "rgb(20, 23, 26);",
  },
}));

export default function Conversation() {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem alignItems="flex-start" button>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="name"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  @username
                </Typography>
              </React.Fragment>
            }
          />

          <ListItemSecondaryAction className={classes.secondaryAction}>
            <Button className={classes.btn}>Following</Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
      <div className={classes.emptyDiv}></div>
      <Divider />
      <div className={classes.sectionDiv}>
        <Typography variant="h6" className={classes.notification}>
          Notifications
        </Typography>
        <Divider />
        <div className={classes.muteNotify}>
          <Typography className={classes.muteText}>
            Mute notifications
          </Typography>
          <div>
            <Switch />
          </div>
        </div>
      </div>
      <Divider />
      <div className={classes.emptyDiv}></div>
      <Divider />
      <div className={classes.sectionDiv}>
        <div className={classes.textDiv}>
          <ListItem className={classes.textDiv} button>
            <Typography className={classes.names}>Block @username</Typography>
          </ListItem>
        </div>
        <Divider />
        <div className={classes.textDiv}>
          <ListItem className={classes.textDiv} button>
            <Typography className={classes.names}>Report @username</Typography>
          </ListItem>
        </div>
        <Divider />
        <div className={classes.textDiv}>
          <ListItem className={classes.textDiv} button>
            <Typography className={classes.delete}>
              Leave conversation
            </Typography>
          </ListItem>
        </div>
      </div>
    </div>
  );
}
