import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/SendOutlined";
import ImageRoundedIcon from "@material-ui/icons/ImageRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    overflowX: "none",
    fontSize: "15px",
    color: "rgb(20, 23, 26)",
    width: "40%",
    marginTop: "35rem",
    maginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "5px",
    webkitBoxAlign: "end",
    alignItems: "center",
    [theme.breakpoints.only("md")]: {
      marginTop: "30rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "28rem",
    },
  },

  input: {
    display: "none",
  },
  icon: {
    color: "rgba(29,161,242,1.00)",
    height: "2.5rem",
    width: "2.5rem",
  },
  imageDiv: {
    display: "flex",
    flexDirection: "row",
  },
  textDiv: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
  },
  textfield: {
    width: "100%",
    borderRadius: "1rem",
    textTransform: "none",
    height: "10%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "3.5rem",
      height: "2.7rem",
      marginTop: "0.5rem",
    },
  },
}));

const Chat = (props) => {
  const classes = useStyles();

  return (
    <div id={props.id} className={classes.root}>
      <div className={classes.imageDiv}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <IconButton aria-label="upload picture" component="span">
            <ImageRoundedIcon className={classes.icon} />
          </IconButton>
        </label>
      </div>
      <div className={classes.textDiv}>
        <TextField
          className={classes.textfield}
          multiline
          variant="outlined"
          placeholder="Start a new message"
          autoCorrect="true"
          value={props.value}
          onChange={props.onChange}
          autoFocus
          fullWidth
          name="chat"
        />
      </div>
      <div>
        <IconButton onClick={props.onClick}>
          <SendIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
