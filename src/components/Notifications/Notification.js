import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  IconButton,
  Popover,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import {
  ExpandMore,
  Twitter,
  SentimentVeryDissatisfied as Emoji,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "roboto-fontface";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
    height: "1rem",
    marginLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    justifyContent: "space-between",
    alignItems: "top",
  },
  avatar: {
    marginLeft: "2rem",
    color: "rgba(29,161,242,1.00)",
    backgroundColor: "white",
  },
  typo: {
    marginLeft: theme.spacing(6),
    color: "rgb(101, 119, 134)",
    fontWeight: 400,
    fontSize: "15px",
  },
  expand: {
    marginRight: theme.spacing(3),
  },
  item: {
    width: "100%",
    marginTop: "0.5%",
    marginLeft: "1%",
  },
}));
const Notifications = () => {
  const classes = useStyles();
  const items = [0, 1, 2, 3, 4, 5];
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid justify="center" container className={classes.item}>
      <Grid item xs={12}>
        {items.map((item) => {
          return (
            <Grid item key={item} xs={12}>
              <Paper elevation={1} square>
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <Twitter />
                  </Avatar>
                  <IconButton
                    onClick={handleClickOpen}
                    className={classes.expand}
                    aria-label="see less often"
                  >
                    <ExpandMore />
                  </IconButton>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Typography className={classes.typography}>
                      <ListItem button>
                        <ListItemIcon onClick={handleClose}>
                          <Emoji /> See less often
                        </ListItemIcon>
                      </ListItem>
                    </Typography>
                  </Popover>
                </div>
                <Typography
                  className={classes.typo}
                  variant="subtitle1"
                  gutterBottom
                >
                  In case you missed <b>Donald J. Trump</b>'s Tweet
                </Typography>
                <div>
                  <Typography
                    variant="body1"
                    className={classes.typo}
                    gutterBottom
                  >
                    Cases, Cases, Cases! If we didn’t test so much and so
                    successfully, we would have very few cases. If you test
                    40,000,000 people, you are going to have many cases that,
                    without the testing (like other countries), would not show
                    up every night on the Fake Evening News.....
                  </Typography>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Notifications;
