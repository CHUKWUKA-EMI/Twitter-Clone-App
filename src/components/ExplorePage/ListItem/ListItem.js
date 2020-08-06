import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { SentimentVeryDissatisfied } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  popover: {
    transitionDuration: "0.2s",
    fontSize: "15px",
    marginRight: "5%",
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
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <SentimentVeryDissatisfied />
          </ListItemIcon>
          <ListItemText primary="This trend is spam" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SentimentVeryDissatisfied />
          </ListItemIcon>
          <ListItemText primary="This trend is abusive or harmful" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SentimentVeryDissatisfied />
          </ListItemIcon>
          <ListItemText primary="This trend is a duplicate" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SentimentVeryDissatisfied />
          </ListItemIcon>
          <ListItemText primary="This trend is low quality" />
        </ListItem>
      </List>
    </Popover>
  );
};

export default PopupItems;
