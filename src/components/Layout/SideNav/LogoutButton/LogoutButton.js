import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ExpandMore } from "@material-ui/icons";
import { ListItemSecondaryAction, Hidden, IconButton } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    height: "2.5rem",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  listItem: {
    fontWeight: "bold",
    borderRadius: "3.5rem",
    "&:hover": {
      backgroundColor: "rgb(206,233,234)",
      color: "black",
    },
    "& .MuiTypography-body1": {
      fontWeight: "bold",
    },
  },
}));

export default function LogoutButton() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button className={classes.listItem}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <Hidden mdDown>
          <ListItemText
            primary="Emi Chukwuka"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  @emi_chukwuka
                </Typography>
              </React.Fragment>
            }
          />

          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="expandmore">
              <ExpandMore />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
    </List>
  );
}
