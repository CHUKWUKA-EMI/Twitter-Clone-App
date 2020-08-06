import React from "react";
import { Grid, Paper, Avatar, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import "roboto-fontface";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    height: "100%",
    marginLeft: "4%",
    marginTop: "0px",
    alignItems: "center",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    justifyContent: "space-between",
  },
  avatar: {
    marginLeft: "1rem",
  },
  typo: {
    marginLeft: "10%",
  },

  item: {
    width: "100%",
    marginTop: "1rem",
  },
  btn: {
    border: "1.5px solid rgba(29,161,242,1.00)",
    color: "rgba(29,161,242,1.00)",
    fontWeight: "bold",
    borderRadius: "2rem",
    height: "2rem",
    marginTop: "0px",
    marginRight: "4%",
    textTransform: "capitalize",
  },

  header: {
    marginLeft: "1%",
    display: "flex",
    flexDirection: "row",
    fontSize: "15px",
    width: "50%",
    maxWidth: "100%",
  },
  container: {
    height: "10%",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    padding: " 5px",
  },
  avatarDiv: {
    display: "flex",
    flexBasis: "10%",
    justifyContent: "flex-start",
    flexGrow: 0,
  },
  headerDiv: {
    display: "flex",
    flexShrink: 1,
    maxWidth: "100%",
    wordSpacing: "3px",
  },
}));

const Follow = () => {
  const classes = useStyles();

  return (
    <Grid justify="center" container className={classes.item}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Paper className={classes.container}>
            <div className={classes.top}>
              <div className={classes.avatarDiv}>
                <Avatar className={classes.avatar}></Avatar>
              </div>
              <div className={classes.paper}>
                <div className={classes.headerDiv}>
                  <div className={classes.header}>
                    <b>
                      <span>Big Brother Naija</span> @InstaNaijaBlog
                    </b>
                  </div>
                </div>
                <Button className={classes.btn}>Follow</Button>
              </div>
            </div>
            <div>
              <Typography className={classes.typo} variant="body1">
                Big Brother Naija Live Blog. For Advert:
                Instanaijablog1@gmail.com
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Follow;
