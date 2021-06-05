import React, { useEffect } from "react";
import "./teams.scss";
import Spinner from "../../components/spinner/spinner";
//redux
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../redux/user/user.action";
import { getTeams } from "../../redux/teams/teams.action";

const Teams = () => {
	const { auth, teams } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("getTeams - useEffect");
		dispatch(getTeams());
	}, [dispatch]);

	// if (auth.userRes === null) {
	// 	return <Redirect to="/login" />;
	// }

	if (teams.loading) {
		return <Spinner />;
	}

	return (
		<div className="teams-container">
			Teams Page
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};

export default Teams;
