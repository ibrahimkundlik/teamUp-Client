import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import createTaskImg from "../../../images/create_task.svg";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { selectAuthUser } from "../../../redux/user/user.selector";
import TeamsNavbar from "../../teams/teams-navbar/teams-navbar";
import { selectSuccessRes } from "../../../redux/teams/teams.selector";
import DashboardTeam from "../dashboard-team/dashboard-team";
import CustomButton from "../../custom-button/custom-button";
import { AiOutlinePlus } from "react-icons/ai";
import CreateTask from "../../forms/create-task/create-task";
import { clearMssgResAction } from "../../../redux/teams/teams.action";
import TaskGroup from "../task-group/task-group";
import TaskWindow from "../task-window/task-window";
import AddMemberByEmail from "../../forms/add-member-by-email/add-member-by-email";
import { taskActionType } from "../../../redux/task/task.type";

const INITIAL_STATE = {
	createTask: false,
	addMember: false,
	showTaskWindow: false,
};

const Dashboard = ({ teams }) => {
	const { id } = useParams();
	const user = useSelector(selectAuthUser);
	const teamsSuccessMssg = useSelector(selectSuccessRes);
	const taskWindow = useSelector((state) => state.task.window);
	const [team, setTeam] = useState(null);
	const [formState, setFormState] = useState(INITIAL_STATE);
	const dispatch = useDispatch();

	useEffect(() => {
		setTeam(teams.find((team) => team._id === id));
	}, [teams, id]);

	useEffect(() => {
		if (taskWindow) {
			setFormState({ ...INITIAL_STATE, showTaskWindow: true });
			window.scrollTo(0, 0);
		}
	}, [taskWindow]);

	useEffect(() => {
		let timeout = setTimeout(() => {
			if (teamsSuccessMssg) dispatch(clearMssgResAction());
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [teamsSuccessMssg, dispatch]);

	const handleCloseForm = () => {
		setFormState(INITIAL_STATE);
		window.scrollTo(0, 0);
		dispatch({
			type: taskActionType.CLEAR_REQ_MSSG,
		});
	};

	const openStateForm = (formField) => {
		setFormState({ ...INITIAL_STATE, [formField]: true });
		window.scrollTo(0, 0);
	};

	if (
		teamsSuccessMssg === "All teams loaded successfully." &&
		teams.length === 0
	) {
		return <Redirect to="/teams" />;
	}

	return (
		<div
			className={`${
				Object.values(formState).find((element) => element) ? "add-overlay" : ""
			} dashboard-container`}
		>
			<TeamsNavbar user={user} openStateForm={openStateForm} team={team} />
			{!team ? (
				<p className="error-message-modal">Invalid team ID provided.</p>
			) : team?.tasks.length === 0 ? (
				<div
					className={`${
						Object.values(formState).find((element) => element)
							? "hide-dashboard"
							: ""
					} dashboard-no-tasks`}
				>
					<DashboardTeam loadTeam={team} openStateForm={openStateForm} />
					{teamsSuccessMssg && (
						<p className="success-message-modal">{teamsSuccessMssg}</p>
					)}
					<div className="create-task-img">
						<img src={createTaskImg} alt="create-task" />
					</div>
					<div className="no-task-desc">
						<p>Currently there are no tasks added in this team.</p>
						<CustomButton
							className="new-task-btn"
							onClick={() => openStateForm("createTask")}
						>
							<AiOutlinePlus />
							<p>Add New Task</p>
						</CustomButton>
					</div>
				</div>
			) : (
				<div
					className={`${
						Object.values(formState).find((element) => element)
							? "hide-dashboard"
							: ""
					} dashboard-with-tasks`}
				>
					<DashboardTeam loadTeam={team} openStateForm={openStateForm} />
					{teamsSuccessMssg && (
						<p className="success-message-modal">{teamsSuccessMssg}</p>
					)}
					<TaskGroup tasks={team.tasks} />
				</div>
			)}
			{formState.createTask && (
				<CreateTask
					handleCloseForm={handleCloseForm}
					members={team.members}
					teamId={team._id}
				/>
			)}
			{formState.showTaskWindow && (
				<TaskWindow
					handleCloseForm={handleCloseForm}
					task={taskWindow}
					teamName={team.name}
				/>
			)}
			{formState.addMember && (
				<AddMemberByEmail handleCloseForm={handleCloseForm} teamId={team._id} />
			)}
		</div>
	);
};

export default Dashboard;
