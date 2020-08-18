import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

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
        <ListItem button>
          <ListItemText primary="Topics" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Moments" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Twitter Ads" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Analytics" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Display" />
        </ListItem>
      </List>
    </Popover>
  );
};

export default PopupItems;
