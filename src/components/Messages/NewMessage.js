import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Grid,
  Container,
  Divider,
  Paper,
  IconButton,
  Typography,
  Fab,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import AutoComplete from "./AutoComplete/AutoComplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    minHeight: "400px",
    maxWidth: "80vw",
    maxHeight: "90vh",
    height: "650px",
    minWidth: "40%",
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "3%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  form: {
    width: "100%",
  },
  paper: {
    width: "100%",
    borderRadius: "1rem",
  },
  iconDiv: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    color: "rgba(29,161,242,1.00)",
  },
  title: {
    color: "rgb(20, 23, 26)",
    fontWeight: 800,
    fontSize: "19px",
    marginTop: "1rem",
  },
  btnDiv: {
    width: "5rem",
  },
  btn: {
    backgroundColor: "rgba(29,161,242,1.00)",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    margin: "0.7rem",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(29,161,242,1.00)",
    },
    "&:focus": {
      backgroundColor: "rgba(29,161,242,1.00)",
    },
  },
  search: {
    width: "100%",
    border: "none",
    backgroundColor: "rgb(230, 236, 240)",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      color: "rgb(101, 119, 134)",
      fontSize: "2rem",
    },
  },

  textDiv: {
    width: "90%",
    display: "flex",
    marginLeft: "10%",
    border: "none",
  },
}));

const ModalContent = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid component="nav" item className={classes.header}>
          <div className={classes.iconDiv}>
            <IconButton onClick={props.onClick}>
              <Close className={classes.icon} />
            </IconButton>
            <Typography className={classes.title} variant="h5" component="span">
              New Message
            </Typography>
          </div>
          <div>
            <Fab
              onClick={props.openChat}
              size="small"
              variant="extended"
              type="submit"
              className={classes.btn}
            >
              <div className={classes.btnDiv}>
                <span>Next</span>
              </div>
            </Fab>
          </div>
        </Grid>
        <Divider />
        <Grid item>
          <form className={classes.form}>
            <AutoComplete friends={props.friends} />
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};
const NewMessage = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xs">
      <Grid item>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.open}
          onClose={props.onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <ModalContent
            openChat={props.openChat}
            onClick={props.onClick}
            friends={props.friends}
          />
        </Modal>
      </Grid>
    </Container>
  );
};

export default NewMessage;
