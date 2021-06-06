import React, { useState } from "react";
import "./user-profile.scss";
import CustomButton from "../custom-button/custom-button";
import { logout } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const UserProfile = ({ user }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [showProfile, setShowProfile] = useState(false);

	const handleLogout = () => {
		dispatch(logout(history));
	};

	return (
		<div
			className="user-profile-cont"
			style={{
				backgroundImage: `url("https://ui-avatars.com/api/?background=19be72&color=fdfdfd&bold=true&name=${user.name}")`,
			}}
			onClick={() => setShowProfile(!showProfile)}
		>
			<div
				className={`${showProfile ? "show-profile " : ""}user-profile-modal`}
			>
				<img
					src={`https://ui-avatars.com/api/?background=19be72&color=fdfdfd&bold=true&name=${user.name}`}
					alt={user.name}
					className="user-image"
				/>
				<p className="user-name">{user.name}</p>
				<p className="user-email">{user.email}</p>
				<CustomButton onClick={handleLogout}>Logout</CustomButton>
			</div>
		</div>
	);
};

export default UserProfile;
