import React from "react";
import "./auth-error.scss";
import CustomButton from "../custom-button/custom-button";
import { Link } from "react-router-dom";

const AuthError = () => {
	return (
		<div className="auth-error-modal">
			<h3 className="error-type">Authorization Error</h3>
			<h5 className="error-mssg">
				Kindly LOGIN or SIGNUP for user authentication
			</h5>
			<div className="redirects">
				<CustomButton>
					<Link to="/login">Login</Link>
				</CustomButton>
				<h4>OR</h4>
				<CustomButton>
					<Link to="/signup">Signup</Link>
				</CustomButton>
			</div>
			<CustomButton className="home-btn">
				<Link to="/">Back to Home</Link>
			</CustomButton>
		</div>
	);
};

export default AuthError;
