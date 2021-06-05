import React from "react";
import "./teams.scss";
//redux
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../redux/user/user.action";

const Teams = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	if (auth.userRes === null) {
		return <Redirect to="/" />;
	}

	return (
		<div className="teams-container">
			Teams Page
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};
export default Teams;
