import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../../redux/user/user.action";

const TeamsNavbar = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logout(history));
	};

	return (
		<div>
			<h3>Teams Navbar</h3>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default TeamsNavbar;
