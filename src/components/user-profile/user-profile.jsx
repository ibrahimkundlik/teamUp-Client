import React, { useState, useRef } from "react";
import "./user-profile.scss";
import CustomButton from "../custom-button/custom-button";
import CustomIcon from "../custom-icon/custom-icon";
import { logout } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useClickOutside } from "../../hooks/useClickOutside/useClickOutside.js";
import { FaUserAstronaut } from "react-icons/fa";

const UserProfile = ({ user }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const ref = useRef();
	const [visible, setVisible] = useState(false);

	useClickOutside(ref, () => setVisible(false));

	const handleLogout = () => {
		dispatch(logout(history));
	};

	return (
		<div className="user-profile-cont" ref={ref}>
			<CustomIcon
				className="user-profile-icon"
				onClick={() => setVisible(!visible)}
			>
				<FaUserAstronaut />
			</CustomIcon>
			<div className={`${visible ? "show-profile " : ""}user-profile-modal`}>
				<p className="user-image">
					{user.name.split(" ")[0][0]}
					{user.name.split(" ")[1][0]}
				</p>
				<p className="user-name">{user.name}</p>
				<p className="user-email">{user.email}</p>
				<CustomButton onClick={handleLogout}>Logout</CustomButton>
			</div>
		</div>
	);
};

export default UserProfile;
