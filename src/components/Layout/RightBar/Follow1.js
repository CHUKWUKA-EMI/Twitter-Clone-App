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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "1%",
    overflowY: "hidden",
    overflowX: "hidden",
    backgroundColor: "rgb(245, 248, 250)",
    borderRadius: "15px",
    // width: "100%",
    // maxWidth: "100%",
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
    border: "1.5px solid rgba(29,161,242,1.00)",
    color: "rgba(29,161,242,1.00)",
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
  subtitle: {
    font: "inherit",
    color: "rgb(20, 23, 26)",
    fontSize: "19px",
    fontWeight: 800,
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const items = [0, 1, 2];

  return (
    <List className={classes.root}>
      <ListItem>
        <Typography className={classes.subtitle} variant="h6">
          Who to follow
        </Typography>
      </ListItem>
      <Divider />
      {items.map((item) => {
        return (
          <>
            <ListItem key={item} alignItems="flex-start" button>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary="Big Brother Naija"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      @InstaNaijaBlog
                    </Typography>
                    <Typography className={classes.body1} variant="subtitle2">
                      Big Brother Naija Live Blog. For Advert:
                      Instanaijablog1@gmail.com
                    </Typography>
                  </React.Fragment>
                }
              />

              <ListItemSecondaryAction>
                <Button className={classes.btn}>Follow</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}
