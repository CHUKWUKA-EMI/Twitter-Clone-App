import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  SentimentVeryDissatisfied,
  VolumeMute,
  Block,
  Person,
  Report,
} from "@material-ui/icons";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Popover from "@material-ui/core/Popover";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { lightBlue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import Badge from "@material-ui/core/Badge";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cardImage from "../../../assets/icons.json";
import "./Tweets.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    margin: "2rem",
    borderRadius: "2rem",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "23rem",
    marginTop: "0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    [theme.breakpoints.down("md")]: {
      marginLeft: "15rem",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: lightBlue[500],
  },
  cardheader: {
    display: "flex",
    width: "100%",
    flexDirection: "row",

    [theme.breakpoints.only("sm")]: {
      width: "90%",
      justifyContent: "space-between",
    },
  },
  popover: {
    marginRight: "15rem",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -7,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "red",
  },
}))(Badge);

export default function TweetCard() {
  const classes = useStyles();
  const wrapper = React.createRef();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = (event) => {
    setExpanded(!expanded);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card ref={wrapper} className={classes.root}>
      <div className={classes.cardheader}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              CE
            </Avatar>
          }
          title="Testing tweets"
          subheader="09-07-2020"
        />
        <IconButton
          className={classes.expand}
          onClick={handleExpandClick}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Popover
        ref={wrapper}
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <SentimentVeryDissatisfied />
            </ListItemIcon>
            <ListItemText primary="Not interested in this Tweet" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Unfollow" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VolumeMute />
            </ListItemIcon>
            <ListItemText primary="Mute" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Block />
            </ListItemIcon>
            <ListItemText primary="Block" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Report />
            </ListItemIcon>
            <ListItemText primary="Report Tweet" />
          </ListItem>
        </List>
      </Popover>
      <CardMedia
        className={classes.media}
        image={cardImage.icons[4].src}
        title="Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StyledBadge className="badge" badgeContent={5}>
            <FavoriteIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="share">
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
