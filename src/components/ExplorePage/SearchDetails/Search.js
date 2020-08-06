import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, IconButton, Divider, Tab, Tabs } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import TweetsCard from "../../HomePage/TweetsCard/TweetsCard";
import Follow1 from "./Follow1";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginLeft: "1%",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
    },
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paper: {
    height: "100vh",
    width: "100%",
  },
  tabs: {
    width: "100%",
    minWidth: "0rem",
    "& .PrivateTabIndicator-colorPrimary-29": {
      backgroundColor: "rgba(29,161,242,1.00)",
    },
    "& .MuiButtonBase-root": {
      minWidth: 0,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "rgb(206,233,234)",
        color: "rgba(29,161,242,1.00)",
      },
      "&:focus": {
        backgroundColor: "rgb(206,233,234)",
        color: "rgba(29,161,242,1.00)",
      },
    },
  },
  tab: {
    minWidth: "100px",
    textTransform: "capitalize",
    borderBottomColor: "rgb(29, 161, 242)",

    "&:hover": {
      backgroundColor: "rgb(206,233,234)",
      color: "rgba(29,161,242,1.00)",
    },
    "&:focus": {
      backgroundColor: "rgb(206,233,234)",
      color: "rgba(29,161,242,1.00)",
    },
  },
  icon: {
    color: "rgba(29,161,242,1.00)",
    height: "2rem",
    width: "3rem",
  },
}));

const Search = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = React.useState("Top");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item className={classes.header}>
          <div className={classes.topBar}>
            <IconButton onClick={() => history.goBack()}>
              <KeyboardBackspace className={classes.icon} />
            </IconButton>
          </div>
          <Grid item>
            <Tabs
              className={classes.tabs}
              variant="fullWidth"
              component="nav"
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab tabIndex={0} label="Top" onClick={() => setTab("Top")} />
              <Tab
                tabIndex={1}
                label="Latest"
                onClick={() => setTab("Latest")}
              />
              <Tab
                tabIndex={2}
                label="People"
                onClick={() => setTab("People")}
              />
              <Tab
                tabIndex={3}
                label="Photos"
                onClick={() => setTab("Photos")}
              />
            </Tabs>
          </Grid>
        </Grid>
        <Divider />
        <Grid item>
          {tab === "Top" && <TweetsCard />}
          {tab === "Latest" && <TweetsCard />}
          {tab === "People" && <Follow1 />}

          {tab === "Photos" && <TweetsCard />}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Search;
