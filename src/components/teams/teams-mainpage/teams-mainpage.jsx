import React, { useEffect } from "react";
import "./teams-mainpage.scss";
import Spinner from "../../spinner/spinner";
import CustomButton from "../../custom-button/custom-button";
import TeamsNavbar from "../../teams/teams-navbar/teams-navbar";
import NewUserTeams from "../../teams/new-user-teams/new-user-teams";
import ExistUserTeams from "../../teams/exist-user-teams/exist-user-teams";

import { useSelector, useDispatch } from "react-redux";
import { getTeams } from "../../../redux/teams/teams.action";
import { selectAuth } from "../../../redux/user/user.selector";
import { selectTeams } from "../../../redux/teams/teams.selector";
import { logout } from "../../../redux/user/user.action";
import { useHistory } from "react-router-dom";

const TeamsMainpage = () => {
	const auth = useSelector(selectAuth);
	const teams = useSelector(selectTeams);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getTeams());
	}, [dispatch]);

	return (
		<div className="teams-container">
			{teams.loading ? (
				<div className="spinner-fullscreen">
					<Spinner />
				</div>
			) : teams.errorRes ? (
				<div className="spinner-fullscreen">
					<p className="error-message-modal">
						Could not complete the previous request.{" "}
						<span className="error-highlight">
							{typeof teams.errorRes === "string" && teams.errorRes}
						</span>
					</p>
					<CustomButton onClick={() => dispatch(logout(history))}>
						Logout
					</CustomButton>
				</div>
			) : (
				<>
					<TeamsNavbar user={auth.userRes?.user} />
					<div className="user-teams-cont">
						{teams.teamsRes.length === 0 ? (
							<NewUserTeams teams={teams} />
						) : (
							<ExistUserTeams
								teams={teams.teamsRes}
								username={auth.userRes?.user?.name}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default TeamsMainpage;
