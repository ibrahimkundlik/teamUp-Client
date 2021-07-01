import React, { useRef, useState } from "react";
import CustomIcon from "../../custom-icon/custom-icon";
import CustomInput from "../../custom-input/custom-input";
import CustomButton from "../../custom-button/custom-button";
import Logo from "../../logo/logo";
import UserProfile from "../../user-profile/user-profile";
import "./teams-navbar.scss";
import { useLocation, Link } from "react-router-dom";
import mainLogo from "../../../images/logo192.png";
import {
	AiOutlinePlus,
	AiOutlineSetting,
	AiOutlineInfoCircle,
	AiOutlineFileSearch,
	AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
	searchTaskAction,
	seperateTasksAction,
} from "../../../redux/task/task.action";

const TeamsNavbar = ({ user, openStateForm, team }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [taskQuery, setTaskQuery] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const resetRef = useRef(null);

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		dispatch(searchTaskAction(taskQuery, team.tasks));
		setSubmitted(true);
		if (resetRef.current) {
			resetRef.current.focus();
		}
	};

	const resetSearchForm = (e) => {
		setTaskQuery("");
		dispatch(seperateTasksAction(team.tasks));
		setSubmitted(false);
		if (resetRef.current) {
			resetRef.current.focus();
		}
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
					<div className={`dashboard-nav1 ${submitted ? "nav1-margin" : ""}`}>
						<Link to="/teams">
							<CustomIcon>
								<img src={mainLogo} alt="teamUp logo" />
							</CustomIcon>
						</Link>
						{team && (
							<form
								autoComplete="off"
								className="search-task-form"
								onSubmit={handleSearchSubmit}
							>
								<CustomInput
									type="search"
									name="searchTask"
									placeholder="Search tasks"
									required
									className="search-task"
									value={taskQuery}
									onChange={(e) => {
										setTaskQuery(e.target.value);
										setSubmitted(false);
									}}
								/>
								{submitted && (
									<p className="search-message">
										Search results displayed below:
									</p>
								)}
								<div className="search-controls">
									{submitted ? (
										<button
											className="custom-button reset-search-form"
											type="button"
											ref={resetRef}
											onClick={resetSearchForm}
										>
											<AiOutlineCloseCircle />
										</button>
									) : (
										<CustomButton type="submit" className="submit-search-form">
											<AiOutlineFileSearch />
										</CustomButton>
									)}
								</div>
							</form>
						)}
					</div>
					<div className="dashboard-nav2">
						{team && (
							<CustomButton
								className="new-task-btn"
								onClick={() => openStateForm("createTask")}
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
