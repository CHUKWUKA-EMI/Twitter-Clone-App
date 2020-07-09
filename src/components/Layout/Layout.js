import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import LabelBottomNavigation from "./BottomNav/BottomNav";
import HomePage from "../HomePage/HomePage";
import SideNavigation from "./SideNav/SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "40rem",
    width: "80%",
    position: "fixed",
    marginRight: "2rem",
  },
  paper1: {
    height: "100%",
    position: "fixed",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const wrapper = React.createRef();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div ref={wrapper} className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Hidden smDown>
              <Grid item md={4}>
                <Paper className={classes.paper1}>
                  <SideNavigation />
                </Paper>
              </Grid>
            </Hidden>
            <Grid item md={5}>
              <HomePage iconLabel={value} />
              <Hidden mdUp>
                <LabelBottomNavigation
                  value={value}
                  handleChange={handleChange}
                  homeVal="Home"
                  searchVal="Search"
                  notifyVal="Notifications"
                  inboxVal="Messages"
                />
              </Hidden>
            </Grid>
            <Hidden smDown>
              <Grid item md={3}>
                <Paper className={classes.paper}>Right Bar</Paper>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
