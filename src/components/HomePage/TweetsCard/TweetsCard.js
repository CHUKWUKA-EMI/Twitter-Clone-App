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
  VerifiedUser,
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
    color: "rgba(29,161,242,1.00)",
    marginRight: "10rem",
    marginTop: "1rem",
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
  return <i className="fa fa-retweet" style={{ fontSize: "24px" }}></i>;
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
            <Avatar aria-label="recipe" className={classes.avatar}>
              CE
            </Avatar>
          }
          title="Testing tweets"
        />
        <VerifiedUser className={classes.verified} />
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
