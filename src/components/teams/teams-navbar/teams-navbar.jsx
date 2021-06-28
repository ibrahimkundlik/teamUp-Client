import React, { useState } from "react";
import CustomIcon from "../../custom-icon/custom-icon";
import CustomInput from "../../custom-input/custom-input";
import CustomButton from "../../custom-button/custom-button";
import Logo from "../../logo/logo";
import UserProfile from "../../user-profile/user-profile";
import "./teams-navbar.scss";
import { useLocation, Link } from "react-router-dom";
import {
	AiOutlineHome,
	AiOutlinePlus,
	AiOutlineSetting,
	AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
	searchTaskAction,
	seperateTasksAction,
} from "../../../redux/task/task.action";

const TeamsNavbar = ({ user, openCreateTaskForm, team }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [taskQuery, setTaskQuery] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		dispatch(searchTaskAction(taskQuery, team.tasks));
		setSubmitted(true);
	};

	const resetSearchForm = (e) => {
		setTaskQuery("");
		dispatch(seperateTasksAction(team.tasks));
		setSubmitted(false);
		e.target.focus();
	};

	return (
		<div className="teams-navbar-cont">
			{location.pathname === "/teams" ? (
				<nav className="teams-navbar">
					<Logo />
					<UserProfile user={user} />
				</nav>
			) : (
				<nav className="dashboard-navbar">
					<div className="dashboard-nav1">
						<Link to="/teams">
							<CustomIcon>
								<AiOutlineHome />
							</CustomIcon>
						</Link>
						<form autoComplete="off" onSubmit={handleSearchSubmit}>
							<CustomInput
								type="search"
								name="searchTask"
								placeholder="Search Task"
								required
								className="search-task"
								value={taskQuery}
								onChange={(e) => {
									setTaskQuery(e.target.value);
									setSubmitted(false);
								}}
							/>
							<div>
								{submitted ? (
									<button
										className="custom-button"
										type="button"
										onClick={resetSearchForm}
									>
										R
									</button>
								) : (
									<CustomButton type="submit">S</CustomButton>
								)}
							</div>
						</form>
					</div>
					<div className="dashboard-nav2">
						{team && (
							<CustomButton
								className="new-task-btn"
								onClick={() => openCreateTaskForm()}
							>
								<AiOutlinePlus />
								<p>New Task</p>
							</CustomButton>
						)}
						<CustomIcon>
							<FiActivity />
						</CustomIcon>
						<Link to="/teams/settings">
							<CustomIcon>
								<AiOutlineSetting />
							</CustomIcon>
						</Link>
						<Link to="/teams/info">
							<CustomIcon>
								<AiOutlineInfoCircle />
							</CustomIcon>
						</Link>
						<UserProfile user={user} />
					</div>
				</nav>
			)}
		</div>
	);
};

export default TeamsNavbar;
