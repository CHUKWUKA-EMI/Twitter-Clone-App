import React from "react";
import "moment";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MomentUtils from "@date-io/moment";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import twitterLogo from "../../../assets/icons.json";

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
		backgroundColor: "skyBlue",
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: "skyBlue",
		height: "50px",
		borderRadius: "2rem",
		fontWeight: "bold",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

export default function SignUp(props) {
	const classes = useStyles();

	const moment = new MomentUtils();
	const [selectedDate, setSelectedDate] = React.useState(
		moment.date("2020-07-01T11:44:00.000Z")
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<img src={twitterLogo.icons[0].src} alt="Twitter Logo" />
				<Typography component="h1" variant="h5">
					Create your account
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="none"
								name="Name"
								variant="filled"
								required
								fullWidth
								id="Name"
								label="Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="filled"
								required
								fullWidth
								id="Email"
								label="Email"
								name="Email"
								autoComplete="none"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="filled"
								required
								fullWidth
								id="Phone"
								label="Phone"
								name="Phone"
								autoComplete="none"
							/>
						</Grid>
						<Grid>
							<div>
								<span>Date of birth</span>
							</div>
							<div>
								<span>
									This will not be shown publicly. Confirm your age to receive
									the appropriate experience
								</span>
							</div>
							<MuiPickersUtilsProvider utils={MomentUtils}>
								<KeyboardDatePicker
									margin="normal"
									id="date-picker-dialog"
									label="Birthday"
									format="YYYY-MM-DD"
									value={selectedDate}
									onChange={handleDateChange}
									KeyboardButtonProps={{
										"aria-label": "change date",
									}}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="#" onClick={props.onClick} variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
