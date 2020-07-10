import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0,
    width: "40rem",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgba(29,161,242,1.00)",
    height: "30px",
    borderRadius: "1.5rem",
    fontWeight: "bold",
    color: "white",
  },
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  nav: {
    backgroundColor: "white",
    justifyItems: "center",
    color: "grey",
  },
  grid: {
    marginLeft: "27%",
  },
  span: {
    fontSize: "25px",
  },
  twitter: {
    color: "rgba(29,161,242,1.00)",
    height: "3rem",
    width: "3rem",
  },
}));

export default function PasswordReset() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState("English");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <AppBar elevation={1} className={classes.nav} position="fixed">
        <Toolbar>
          <Grid container xs={10}>
            <Grid className={classes.grid} item xs>
              <Twitter className={classes.twitter} />
              <span className={classes.span}>Password Reset</span>
            </Grid>
            <Grid item>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={handleChange}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Espanol">Espanol</MenuItem>
                <MenuItem value="Deutsch">Deutsch</MenuItem>
                <MenuItem value="Latin">Latin</MenuItem>
                <MenuItem value="Francais">Francais</MenuItem>
                <MenuItem value="Portugues">Portugues</MenuItem>
                <MenuItem value="Chinese">Chinese</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Find your Twitter account
        </Typography>

        <span>
          <Typography component="h4" variant="h7">
            Enter your email, phone number, or username.
          </Typography>
        </span>
        <form className={classes.form}>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="text"
              id="resetPassword"
              name="resetPassword"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
        </form>
      </div>
    </Container>
  );
}
