import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";

const useStyles = makeStyles({
  root: {
    color: "rgba(29,161,242,1.00)",
  },
});

const MessageList = (props) => {
  const classes = useStyles();
  return <ModeCommentOutlinedIcon className={classes.root} />;
};
export default MessageList;
