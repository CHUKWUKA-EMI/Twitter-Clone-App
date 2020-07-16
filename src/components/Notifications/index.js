import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Notifications from "./Notification";
import Mentions from "./Mentions";
import "roboto-fontface";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "static",
    background: "white",
    color: "gray",
  },
  tab: {
    fontWeight: 800,
    "&:active": {
      backgroundColor: "rgba(29,161,242,1.00)",
      color: "white",
    },
    "&:focus": {
      color: "rgba(29,161,242,1.00)",
    },
  },
}));

export default function NotificationsPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = React.useState("notifications");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar elevation={1} component="nav" className={classes.root}>
          <Tabs
            variant="fullWidth"
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
            centered
          >
            <Tab
              label="All"
              onClick={() => setTab("notifications")}
              className={classes.tab}
            />
            <Tab
              label="Mentions"
              onClick={() => setTab("mentions")}
              className={classes.tab}
            />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        {tab === "notifications" && <Notifications />}
        {tab === "mentions" && <Mentions />}
      </Grid>
    </Grid>
  );
}
