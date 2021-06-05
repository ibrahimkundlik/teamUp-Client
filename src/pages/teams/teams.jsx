import React, { useEffect } from "react";
import "./teams.scss";
import Spinner from "../../components/spinner/spinner";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button";
//redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/user/user.action";
import { getTeams } from "../../redux/teams/teams.action";
import { selectAuth } from "../../redux/user/user.selector";
import { selectTeams } from "../../redux/teams/teams.selector";

const Teams = () => {
	const auth = useSelector(selectAuth);
	const teams = useSelector(selectTeams);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("getTeams - useEffect");
		dispatch(getTeams());
	}, [dispatch]);

	return (
		<div className="teams-container">
			{teams.loading ? (
				<Spinner />
			) : auth.userRes === null ? (
				<div className="message-modal">
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
			) : (
				<div>
					<p>Welcome</p>
					<button onClick={() => dispatch(logout())}>Logout</button>
				</div>
			)}
		</div>
	);
};

export default Teams;
