import React from "react";
import CustomIcon from "../../custom-icon/custom-icon";
import CustomInput from "../../custom-input/custom-input";
import Logo from "../../logo/logo";
import UserProfile from "../../user-profile/user-profile";
import "./teams-navbar.scss";
//redux
import { useLocation } from "react-router-dom";
//icons
import {
	AiOutlineHome,
	AiOutlinePlus,
	AiOutlineBell,
	AiOutlineSetting,
	AiOutlineInfoCircle,
	AiOutlineSearch,
} from "react-icons/ai";

const TeamsNavbar = ({ user }) => {
	const location = useLocation();

	return (
		<div className="teams-navbar-cont">
			{location.pathname === "/teams" ? (
				<>
					<Logo />
					<UserProfile user={user} />
				</>
			) : (
				<>
					<CustomIcon>
						<AiOutlineHome />
					</CustomIcon>
					<form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
						<CustomInput
							type="search"
							name="searchTask"
							label="Search Task"
							placeholder="Search Task"
							// onChange={handleChange}
							// value={formData.firstname}
							required
							inputIcon={<AiOutlineSearch />}
						/>
					</form>
					<CustomIcon>
						<AiOutlinePlus />
						<p>New Task</p>
					</CustomIcon>
					<CustomIcon>
						<AiOutlineBell />
					</CustomIcon>
					<CustomIcon>
						<AiOutlineInfoCircle />
					</CustomIcon>
					<CustomIcon>
						<AiOutlineSetting />
					</CustomIcon>
					<UserProfile user={user} />
				</>
			)}
		</div>
	);
};

export default TeamsNavbar;
