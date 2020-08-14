import React from "react";
import { Grid, Paper, IconButton, Avatar, Fab } from "@material-ui/core";
import { Photo, Mood, GifOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import ProfilePic from "../../assets/icons.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "5rem",
    marginLeft: "1%",
  },
  button: {
    backgroundColor: "rgba(29,161,242,1.00);",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(29,161,242,1.00);",
    },
    marginRight: "1rem",
  },
  btnDiv: {
    width: "4rem",
  },
  avatarDiv: {
    display: "block",
    flexDirection: "column",
    width: "10%",
    marginTop: "0.7rem",
    marginLeft: "0.7rem",
  },
  avatar: {
    width: "4rem",
    height: "4rem",
  },
  textField: {
    boxSizing: "border-box",
    paddingTop: "0px",
    paddingBottom: "12px",
    paddingLeft: "5px",
    tabSize: 8,
    overflow: "hidden",
    lineHeight: "normal",
    width: "85%",
    marginLeft: "10%",
    fontWeight: 400,
    fontSize: "19px",
    color: "black",
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
  },
  input: {
    display: "none",
  },
  icon: {
    color: "rgba(29,161,242,1.00)",
    height: "2rem",
    width: "2rem",
  },
  body: {
    width: "100%",
  },
}));

const TweetBar = (props) => {
  const classes = useStyles();
  const [emojiPickerState, setEmojiPicker] = React.useState(false);
  const [message, SetMessage] = React.useState("");

  return (
    <>
      <Grid container className={classes.paperDiv}>
        <Grid item className={classes.body}>
          <Paper square className={classes.paper}>
            <div className={classes.avatarDiv}>
              <Avatar className={classes.avatar}>
                <img src={ProfilePic.icons[4].src} alt="profile" />{" "}
              </Avatar>
            </div>
            <div>
              <div style={{ height: "max-content", marginTop: 0 }}>
                <textarea
                  value={message}
                  onChange={(e) => SetMessage(e.target.value)}
                  className={classes.textField}
                  placeholder="What's happening ?"
                ></textarea>
              </div>
              <div className={classes.bottomDiv}>
                <div>
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
                  <IconButton onClick={() => setEmojiPicker(!emojiPickerState)}>
                    <Mood className={classes.icon} />
                  </IconButton>
                  <IconButton>
                    <GifOutlined className={classes.icon} />
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
          </Paper>
        </Grid>
      </Grid>
      {emojiPickerState && (
        <Picker
          title="Pick your emoji…"
          emoji="point_up"
          emojiTooltip={true}
          onSelect={(emoji) => SetMessage(message + emoji.native)}
        />
      )}
    </>
  );
};

export default TweetBar;
