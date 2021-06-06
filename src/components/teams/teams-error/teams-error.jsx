import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../custom-button/custom-button";
import "./teams-error.scss";

const TeamsError = ({ teams }) => {
	return (
		<div className="teams-error-modal">
			{teams.errorRes?.error === "/errors/auth" ? (
				<div className="redirects">
					<p>{teams.errorRes.message}</p>
					<h5>Kindly LOGIN or SIGNUP for user authentication</h5>
					<CustomButton>
						<Link to="/login">Login</Link>
					</CustomButton>
					<h4>OR</h4>
					<CustomButton>
						<Link to="/signup">Signup</Link>
					</CustomButton>
				</div>
			) : (
				<div className="redirects">
					<p>{typeof teams.errorRes === "string" && teams.errorRes}</p>
					<CustomButton>
						<Link to="/">Back to Home</Link>
					</CustomButton>
				</div>
			)}
		</div>
	);
};

export default TeamsError;
