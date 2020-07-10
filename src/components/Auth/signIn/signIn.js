import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Twitter from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bold",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(29,161,242,1.00)",
  },
  form: {
    width: "90%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgba(29,161,242,1.00)",
    height: "50px",
    borderRadius: "2rem",
    fontWeight: "bold",
  },
  twitter: {
    color: "rgba(29,161,242,1.00)",
    height: "3rem",
    width: "3rem",
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Twitter className={classes.twitter} />
        <Typography component="h1" variant="h5">
          Log in to Twitter
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Phone, email, or username"
            name="email"
            autoComplete="none"
            autoFocus
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="none"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" onClick={props.onReset} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" onClick={props.onClick} variant="body2">
                Sign up for Twitter
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
