import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Typography,
  Avatar,
  IconButton,
  Divider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  popover: {
    transitionDuration: "0.2s",
    fontSize: "15px",
    marginRight: "5%",
    "& element.style": {
      top: "333px",
    },
  },
  inline: {
    display: "inline",
  },
  listItem: {
    "& .MuiTypography-body1": {
      fontWeight: "bold",
    },
  },
}));

const PopupItems = (props) => {
  const classes = useStyles();
  const wrapper = React.createRef();
  return (
    <Popover
      ref={wrapper}
      className={classes.popover}
      open={props.open}
      onClose={props.onClose}
      anchorReference="anchorPosition"
      anchorPosition={props.anchorPosition}
    >
      <List>
        <ListItem className={classes.listItem}>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
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
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Add an existing account" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Log out @emi_chukwuka" />
        </ListItem>
      </List>
    </Popover>
  );
};

export default PopupItems;
