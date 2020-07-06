import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import LabelBottomNavigation from "./BottomNav/BottomNav";
import TopNavigation from "./TopNav/TopNavigation";
import HomePage from "../HomePage/HomePage";
import SideNavigation from "./SideNav/SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const wrapper = React.createRef();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const HandleDrawer = () => {};

  return (
    <div ref={wrapper} className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Hidden smDown>
              <Grid item xs={0} md={4}>
                <SideNavigation />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={5}>
              <TopNavigation onClick={HandleDrawer} text={value} />
              <Divider />
              <HomePage />
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
              <Grid item xs={0} md={3}>
                <Paper style={{ height: "70%" }}>Right Bar</Paper>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
