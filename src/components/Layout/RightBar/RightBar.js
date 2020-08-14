import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Grid,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import PopupList from "../../ExplorePage/ListItem/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "1%",
    backgroundColor: "rgb(245, 248, 250)",
    borderRadius: "15px",
  },

  subtitle: {
    font: "inherit",
    color: "rgb(20, 23, 26)",
    fontSize: "19px",
    fontWeight: 800,
  },
  subtitle2: {
    font: "inherit",
    fontSize: "19px",
    color: "rgb(20, 23, 26);",
    fontWeight: 800,
  },
  subtitle2Block: {
    display: "flex",
    height: theme.spacing(6),
    padding: theme.spacing(2),
  },
  trendHeader: {
    display: "flex",
    font: "inherit",
    fontSize: "13px",
    color: "rgb(101, 119, 134)",
    fontWeight: 500,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  user: {
    font: "inherit",
    fontWeight: "bold",
    color: "rgb(20, 23, 26)",
    fontSize: "15px",
    paddingTop: "2px",
  },
  tweetCount: {
    font: "inherit",
    fontSize: "13px",
    marginTop: "5px",
    color: "rgb(101, 119, 134)",
    lineHeight: "calc(19.6875px)",
    fontWeight: 500,
  },
  container: {
    padding: theme.spacing(1),
    position: "relative",
    width: "100%",
  },
  span: {
    color: "white",
    fontSize: "15px",
    fontWeight: "20px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "5%",
    marginTop: "0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const RightBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  let trends = [0, 1, 2, 3];

  const handleExpandClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <Typography className={classes.subtitle} variant="h6">
            What's happening
          </Typography>
        </ListItem>
        <Divider />
        {trends.map((trend) => {
          return (
            <ListItem key={trend} button>
              <Grid item className={classes.container}>
                {" "}
                <div
                  onDoubleClick={() => history.push("/layout/search")}
                  className={classes.trendBody}
                >
                  <div className={classes.trendHeader}>
                    Gaming. Trending
                    <IconButton
                      className={classes.expand}
                      onClick={handleExpandClick}
                    >
                      <ExpandMore />{" "}
                    </IconButton>
                  </div>
                  <PopupList
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                  />
                  <div>
                    <Typography className={classes.user} variant="body1">
                      Kiki
                    </Typography>
                  </div>
                  <div>
                    <Typography className={classes.tweetCount}>
                      65.1k Tweets
                    </Typography>
                  </div>
                </div>
              </Grid>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default RightBar;
