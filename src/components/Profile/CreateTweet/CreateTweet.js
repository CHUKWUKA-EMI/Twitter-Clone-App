import React from "react";
import {
  Modal,
  Backdrop,
  Grid,
  Avatar,
  IconButton,
  Divider,
  Paper,
  Fab,
} from "@material-ui/core";
import { Close, Mood, Photo } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "80vw",
    maxHeight: "90vh",
    minWidth: "600px",
    borderRadius: "1rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(29,161,242,1.00);",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(29,161,242,1.00);",
    },
  },
  btnDiv: {
    width: "6rem",
  },
  paperDiv: {
    flexGrow: 1,
  },
  paper: {
    height: "20rem",
    width: "40rem",
    [theme.breakpoints.only("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20rem",
    },
  },
  body: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
  },
  avatarDiv: {
    display: "flex",
    flexDirection: "column",
    width: "10%",
    marginTop: "0.7rem",
    marginLeft: "0.7rem",
  },
  avatar: {
    width: "4rem",
    height: "4rem",
  },
  textDiv: {
    diplay: "flex",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: "22rem",
    },
    height: "10rem",
    textAlign: "center",
    padding: "9px 0",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2rem",
    },
  },
  textField: {
    boxSizing: "border-box",
    zIndex: -1000,
    paddingTop: "9px",
    paddingBottom: "9px",
    paddingLeft: "5px",
    tabSize: 8,
    overflow: "hidden",
    lineHeight: "normal",
    width: "90%",
    fontWeight: 400,
    fontSize: "18px",
    height: "100%",
    border: "none",
    backgroundColor: "transparent",
    resize: "none",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  },
  bottomDiv: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {},
  },
  input: {
    display: "none",
  },
  icon: {
    color: "rgba(29,161,242,1.00)",
    height: "2rem",
    width: "2rem",
  },
  iconsdiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

const ModalContent = (props) => {
  const classes = useStyles();
  const ref = React.useRef();
  return (
    <div className={classes.paperDiv}>
      <Paper className={classes.paper}>
        <div>
          <IconButton onClick={props.closeModal}>
            <Close className={classes.icon} />
          </IconButton>
          <Divider />
        </div>
        <div className={classes.body}>
          <div className={classes.avatarDiv}>
            <Avatar className={classes.avatar}>AA</Avatar>
          </div>
          <div>
            <div className={classes.textDiv}>
              <textarea
                ref={ref}
                value={props.value}
                onChange={props.onChange}
                placeholder="What's happening?"
                className={classes.textField}
              ></textarea>
            </div>

            <div className={classes.bottomDiv}>
              <div className={classes.iconsdiv}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <IconButton aria-label="upload picture" component="span">
                    <Photo className={classes.icon} />
                  </IconButton>
                </label>
                <IconButton onClick={props.onClick}>
                  <Mood className={classes.icon} />
                </IconButton>
              </div>
              <Fab
                size="large"
                variant="extended"
                className={classes.button}
                aria-label="add"
              >
                <div className={classes.btnDiv}>
                  <span>Tweet</span>
                </div>
              </Fab>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const CreateTweet = (props) => {
  const classes = useStyles();
  const [emojiPickerState, SetEmojiPicker] = React.useState(false);
  const [message, SetMessage] = React.useState("");

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={props.open}
          onClose={props.onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Grid item>
            <ModalContent
              value={message}
              onChange={(e) => SetMessage(e.target.value)}
              closeModal={props.closeModal}
              onClick={() => SetEmojiPicker(!emojiPickerState)}
            />
            {emojiPickerState && (
              <Picker
                title="Pick your emoji…"
                emoji="point_up"
                emojiTooltip={true}
                onSelect={(emoji) => SetMessage(message + emoji.native)}
              />
            )}
          </Grid>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default CreateTweet;
