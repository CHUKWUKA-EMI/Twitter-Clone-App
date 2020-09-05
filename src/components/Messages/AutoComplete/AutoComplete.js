import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "100%",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
  textfield: {
    border: "hidden",
    marginLeft: "8%",

    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
      "&:hover": {
        borderBottom: "none",
      },
    },
  },
  search: {
    width: "100%",
    border: "none",
    backgroundColor: "rgb(230, 236, 240)",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      color: "rgb(101, 119, 134)",
      fontSize: "2rem",
    },
  },
  textDiv: {
    width: "90%",
    display: "flex",
    marginLeft: "10%",
    border: "none",
  },
  avatar: {
    marginRight: "8px",
  },
  name: {
    fontWeight: "bold",
  },
  username: {
    display: "inline",
  },
}));

export default function Friends(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        fullWidth
        options={props.friends}
        freeSolo
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            <Avatar className={classes.avatar} />
            <div>
              <div className={classes.name} style={{ fontWeight: "bold" }}>
                {option.name}
              </div>
              <div className={classes.username} style={{ display: "inline" }}>
                {option.username}
              </div>
            </div>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <div className={classes.textDiv}></div>
            <TextField
              {...params}
              variant="standard"
              fullWidth
              className={classes.textfield}
              name="search"
              placeholder="Search people"
              autoFocus
            />
          </div>
        )}
      />
    </div>
  );
}
