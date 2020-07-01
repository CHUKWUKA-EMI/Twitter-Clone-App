import React from "react";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import PasswordReset from "./PswdReset/pswdReset";

const Auth = () => {
	const [logIn, setLogin] = React.useState(true);
	const [resetPage, setResetPage] = React.useState(false);

	const switchHandler = () => {
		setLogin(!logIn);
	};
	const goToReset = () => {
		setResetPage(true);
	};
	return (
		<div>
			{!resetPage && logIn && (
				<SignIn onReset={goToReset} onClick={switchHandler} />
			)}
			{!logIn && <SignUp onClick={switchHandler} />}
			{resetPage && <PasswordReset />}
		</div>
	);
};

export default Auth;
