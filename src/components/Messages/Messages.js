import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  Fab,
  Typography,
  Hidden,
  IconButton,
  Box,
  Card,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import NewMessage from "./NewMessage";
import MesssageIcon from "./icons/MessageIcon";
import Chat from "./chat";
import NavBar from "../Layout/TopNav/TopNavigation";
import SearchBox from "./SearchBox/Search";
import InfoBar from "./InforBar/InfoBar";
import ConversationInfo from "./conversation/Conversation";
import ScrollToBottom from "react-scroll-to-bottom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    minWidth: "90%",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      minWidth: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "39px",
    marginTop: "20px",
    backgroundColor: "rgba(29,161,242,1.00)",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgb(29, 161, 242)",
      color: "white",
    },
  },
  btnDiv: {
    width: "9rem",
    maxWidth: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "19px",
    marginBottom: "10px",
    textAlign: "center",
    lineHeight: "1.3125",
    unicodeBidi: "webkitIsolate",
  },
  span: {
    whiteSpace: "pre-line",
    color: "rgb(101, 119, 134)",
    fontWeight: 400,
    fontSize: "15px",
    textAlign: "center",
    overflow: "break-word",
    lineHeight: "1.3125",
    unicodeBidi: "webkitIsolate",
  },
  btnbox: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    minWidth: "calc(62.79px)",
  },
  main: {
    marginTop: "10%",
  },
  header: {
    height: "3rem",
    justifyContent: "center",
    textAlign: "center",
  },
  section1: {
    width: "100%",
    borderRight: "1px solid rgb(230, 236, 240)",
    borderLeft: "1px solid rgb(230, 236, 240)",
    maxWidth: "100%",
    height: "100%",
    minWidth: "42%",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },

  section2: {
    width: "100%",
    borderRight: "1px solid rgb(230, 236, 240)",
    borderLeft: "1px solid rgb(230, 236, 240)",
    maxWidth: "100%",
    height: "100%",
    minWidth: "57%",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },
  section2Div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20rem",
  },
  IconButton: {
    backgroundColor: "rgba(29,161,242,1.00)",
    postion: "fixed",
    color: "white",
    height: "4rem",
    width: "4rem",
    zIndex: 2,
    top: 600,
    left: "80%",
  },

  chatDiv2: {
    top: 0,
    position: "fixed",
    marginTop: "90%",
    marginLeft: "4rem",
  },
  chatBody: {
    position: "fixed",
    display: "flex",
    textAlign: "center",

    flexDirection: "column",

    right: 5,
    marginRight: "2rem",
    paddingTop: "5px",
  },
  chatCard: {
    marginTop: "5px",
    display: "flex",
    flexWrap: "wrap",
    textOverflow: "ellipsis",
  },
}));

const Messages = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [openChat, setOpenChat] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [chat, setChat] = React.useState([]);
  const [info, setInfo] = React.useState(false);

  const handleChat = (e) => {
    setChat((chat) => {
      const newChat = [...chat, message];
      return newChat;
    });

    setMessage("");
  };

  return (
    <Grid
      className={classes.root}
      container
      component="div"
      direction="row"
      spacing={0}
    >
      <Hidden smDown>
        <Grid
          className={classes.section1}
          item
          xs={3}
          component="section"
          aria-labelledby="root-header"
          aria-label="section-navigation"
          role="region"
        >
          <Hidden smDown>
            <NavBar />
            <header className={classes.header}>
              <SearchBox />
            </header>
          </Hidden>
          <Divider />
          <main className={classes.main}>
            {!openChat && (
              <>
                <Typography className={classes.heading}>
                  Send a message, get a message
                </Typography>
                <Typography className={classes.span}>
                  Direct messages are private conversations between you and
                  other people on Twitter. Share Tweets, media and more!
                </Typography>
                <div className={classes.btnbox}>
                  <Fab
                    onClick={() => {
                      setOpen(true);
                      history.push("/layout/messages/compose");
                    }}
                    size="medium"
                    variant="extended"
                    className={classes.button}
                  >
                    <div className={classes.btnDiv}>
                      <span>Start a conversation</span>
                    </div>
                  </Fab>
                </div>
              </>
            )}
          </main>
        </Grid>
      </Hidden>
      <Grid
        className={classes.section2}
        item
        xs={5}
        aria-labelledby="detail-header"
        aria-label="section-details"
        role="region"
      >
        <section style={{ display: "flex", flexDirection: "column" }}>
          {!openChat && (
            <div className={classes.section2Div}>
              <Typography className={classes.heading}>
                You don't have a message selected
              </Typography>
              <Typography className={classes.span}>
                Choose one from your existing messages, or start a new one
              </Typography>
              <div className={classes.btnbox}>
                <Fab
                  onClick={() => {
                    setOpen(true);
                    history.push("/layout/messages/compose");
                  }}
                  size="medium"
                  variant="extended"
                  className={classes.button}
                >
                  <div className={classes.btnDiv}>
                    <span>New message</span>
                  </div>
                </Fab>
              </div>
            </div>
          )}

          {openChat && (
            <>
              <InfoBar
                info={info}
                closeInfo={() => setInfo(false)}
                switchToInfo={() => setInfo(true)}
              />

              <Divider />

              {info ? (
                <ConversationInfo />
              ) : (
                <div>
                  {chat !== null && (
                    <ScrollToBottom>
                      <Box className={classes.chatBody}>
                        {chat.map((msg, index) => {
                          return (
                            <Card className={classes.chatCard} key={index}>
                              <Typography>{msg}</Typography>
                            </Card>
                          );
                        })}
                      </Box>
                    </ScrollToBottom>
                  )}
                  <Chat
                    id="chat"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onClick={handleChat}
                  />
                  <Hidden smUp>
                    <div>
                      <IconButton
                        onClick={() => setOpen(true)}
                        className={classes.IconButton}
                      >
                        <MesssageIcon />
                      </IconButton>
                    </div>
                  </Hidden>
                </div>
              )}
            </>
          )}
          <NewMessage
            openChat={() => {
              setOpenChat(true);
              setOpen(false);
            }}
            open={open}
            onClick={() => {
              setOpen(false);
              history.goBack();
            }}
            onClose={() => setOpen(false)}
            friends={friends}
          />
        </section>
      </Grid>
    </Grid>
  );
};

const friends = [
  { name: "Chukwuka Emi", username: "@emichukwuka" },
  { name: "Rowland Ekemezie", username: "@rowlandekemezie" },
  { name: "Justice Justice", username: "@justicejustice" },
  { name: "Oliver Chiama", username: "@oliverchiama" },
  { name: "Ekemezie Ugo", username: "@ekemezieugo" },
  { name: "Ekene Emi", username: "@ekeneemi" },
  { name: "Chukwuka Emi", username: "@chukwukaemi" },
  { name: "Emi Emi", username: "@emiemi" },
];

export default Messages;
