import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import Badge from "@material-ui/core/Badge";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  ShareOutlined,
} from "@material-ui/icons";
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
    height: "3.5rem",
    width: "3.5rem",
    marginLeft: "21%",
    marginTop: "0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    [theme.breakpoints.down("xs")]: {
      marginRight: "25%",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    width: "2.5rem",
    height: "2.5rem",
  },
  cardheader: {
    flexShrink: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "7%",
    marginRight: "9%",
    [theme.breakpoints.only("sm")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around",
      marginLeft: "10%",
      marginRight: "15%",
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
      "& .MuiCardHeader-avatar": {
        marginLeft: "70%",
      },
    },
  },
  popover: {
    marginRight: "15rem",
  },
  cardActions: {
    justifyContent: "space-evenly",
    marginLeft: "0rem",
  },
  typography: {
    fontSize: "20px",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
  verified: {
    marginRight: "10rem",
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "14%",
    },
  },
  svg: {
    height: "1.5em",
    verticalAlign: "text-bottom",
    display: "inline",
    overflow: "hidden",
    lineHeight: 1,
    fontWeight: "bold",
    fontSize: "15px",
  },
  path: {
    fill: "rgba(29,161,242,1.00)",
  },
  svg2: {
    height: "1.5em",
    width: "1.5em",
    verticalAlign: "text-bottom",
    display: "inline",
    overflow: "hidden",
    lineHeight: 1,
    fontWeight: 400,
    fontSize: "15px",
  },
  path2: {
    fill: "rgb(101, 119, 134);",
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

const RetweetIcon = () => {
  const classes = useStyles();
  return (
    <svg className={classes.svg2}>
      <g>
        <path
          className={classes.path2}
          d="M 23.77 15.67 c -0.292 -0.293 -0.767 -0.293 -1.06 0 l -2.22 2.22 V 7.65 c 0 -2.068 -1.683 -3.75 -3.75 -3.75 h -5.85 c -0.414 0 -0.75 0.336 -0.75 0.75 s 0.336 0.75 0.75 0.75 h 5.85 c 1.24 0 2.25 1.01 2.25 2.25 v 10.24 l -2.22 -2.22 c -0.293 -0.293 -0.768 -0.293 -1.06 0 s -0.294 0.768 0 1.06 l 3.5 3.5 c 0.145 0.147 0.337 0.22 0.53 0.22 s 0.383 -0.072 0.53 -0.22 l 3.5 -3.5 c 0.294 -0.292 0.294 -0.767 0 -1.06 Z m -10.66 3.28 H 7.26 c -1.24 0 -2.25 -1.01 -2.25 -2.25 V 6.46 l 2.22 2.22 c 0.148 0.147 0.34 0.22 0.532 0.22 s 0.384 -0.073 0.53 -0.22 c 0.293 -0.293 0.293 -0.768 0 -1.06 l -3.5 -3.5 c -0.293 -0.294 -0.768 -0.294 -1.06 0 l -3.5 3.5 c -0.294 0.292 -0.294 0.767 0 1.06 s 0.767 0.293 1.06 0 l 2.22 -2.22 V 16.7 c 0 2.068 1.683 3.75 3.75 3.75 h 5.85 c 0.414 0 0.75 -0.336 0.75 -0.75 s -0.337 -0.75 -0.75 -0.75 Z"
        ></path>
      </g>
    </svg>
  );
};
const VerifiedIcon = () => {
  const classes = useStyles();
  return (
    <svg viewBox="0 0 24 24" className={classes.svg}>
      <g>
        <path
          className={classes.path}
          d="M 22.5 12.5 c 0 -1.58 -0.875 -2.95 -2.148 -3.6 c 0.154 -0.435 0.238 -0.905 0.238 -1.4 c 0 -2.21 -1.71 -3.998 -3.818 -3.998 c -0.47 0 -0.92 0.084 -1.336 0.25 C 14.818 2.415 13.51 1.5 12 1.5 s -2.816 0.917 -3.437 2.25 c -0.415 -0.165 -0.866 -0.25 -1.336 -0.25 c -2.11 0 -3.818 1.79 -3.818 4 c 0 0.494 0.083 0.964 0.237 1.4 c -1.272 0.65 -2.147 2.018 -2.147 3.6 c 0 1.495 0.782 2.798 1.942 3.486 c -0.02 0.17 -0.032 0.34 -0.032 0.514 c 0 2.21 1.708 4 3.818 4 c 0.47 0 0.92 -0.086 1.335 -0.25 c 0.62 1.334 1.926 2.25 3.437 2.25 c 1.512 0 2.818 -0.916 3.437 -2.25 c 0.415 0.163 0.865 0.248 1.336 0.248 c 2.11 0 3.818 -1.79 3.818 -4 c 0 -0.174 -0.012 -0.344 -0.033 -0.513 c 1.158 -0.687 1.943 -1.99 1.943 -3.484 Z m -6.616 -3.334 l -4.334 6.5 c -0.145 0.217 -0.382 0.334 -0.625 0.334 c -0.143 0 -0.288 -0.04 -0.416 -0.126 l -0.115 -0.094 l -2.415 -2.415 c -0.293 -0.293 -0.293 -0.768 0 -1.06 s 0.768 -0.294 1.06 0 l 1.77 1.767 l 3.825 -5.74 c 0.23 -0.345 0.696 -0.436 1.04 -0.207 c 0.346 0.23 0.44 0.696 0.21 1.04 Z"
        ></path>
      </g>
    </svg>
  );
};

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
            <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
          }
          title="Testing tweets"
        />
        <div className={classes.verified}>
          <VerifiedIcon />
        </div>
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
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
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
      <CardContent className={classes.typography}>
        <Typography
          style={{ fontSize: "20px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={cardImage.icons[4].src}
        title="Image"
      />
      <CardActions className={classes.cardActions}>
        <IconButton aria-label="comment on tweet">
          <StyledBadge className="chat">
            <ChatBubbleOutlineOutlined />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="retweet">
          <StyledBadge className="retweet">
            <RetweetIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <StyledBadge className="favourite" badgeContent={5}>
            <FavoriteBorderOutlined />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="share tweet">
          <StyledBadge className="share">
            <ShareOutlined />
          </StyledBadge>
        </IconButton>
      </CardActions>
    </Card>
  );
}
