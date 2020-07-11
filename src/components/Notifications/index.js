import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Notifications from "./Notification";
import "roboto-fontface";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "static",
    width: "100%",
    background: "white",
    justifyContent: "flex-ends",
  },
  content: {
    marginTop: "2rem",
    marginLeft: "10rem",
    height: "100vh",
    width: "100%",
  },
});

export default function NotificationsPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isAll, setIsAll] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Paper component="nav" className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" onClick={() => setIsAll(true)} />
          <Tab label="Mentions" onClick={() => setIsAll(false)} />
        </Tabs>
      </Paper>
      {isAll ? (
        <Notifications />
      ) : (
        <div className={classes.content}>
          <Typography variant="h5">Nothing to see here — yet</Typography>
          <Typography variant="body1" paragraph>
            When someone mentions you, you’ll find it here.
          </Typography>
        </div>
      )}
    </React.Fragment>
  );
}
