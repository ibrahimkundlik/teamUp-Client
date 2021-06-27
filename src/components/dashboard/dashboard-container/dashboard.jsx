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

const INITIAL_STATE = {
	createTask: false,
	addMembers: false,
};

const Dashboard = ({ teams }) => {
	const { id } = useParams();
	const user = useSelector(selectAuthUser);
	const teamsSuccessMssg = useSelector(selectSuccessRes);
	const [team, setTeam] = useState(null);
	const [formState, setFormState] = useState(INITIAL_STATE);
	const dispatch = useDispatch();

	useEffect(() => {
		setTeam(teams.find((team) => team._id === id));
	}, [teams, id]);

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
	};

	const openCreateTaskForm = () => {
		setFormState({ ...formState, createTask: true });
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
				formState.createTask || formState.addMembers ? "add-overlay" : ""
			} dashboard-container`}
		>
			<TeamsNavbar
				user={user}
				openCreateTaskForm={openCreateTaskForm}
				team={team}
			/>
			{!team ? (
				<p className="error-message-modal">Invalid team ID provided.</p>
			) : team?.tasks.length === 0 ? (
				<div
					className={`${
						formState.createTask || formState.addMembers ? "hide-dashboard" : ""
					} dashboard-no-tasks`}
				>
					<DashboardTeam loadTeam={team} />
					<div className="create-task-img">
						<img src={createTaskImg} alt="create-task" />
					</div>
					<div className="no-task-desc">
						<p>Currently there are no tasks added in this team.</p>
						<CustomButton className="new-task-btn" onClick={openCreateTaskForm}>
							<AiOutlinePlus />
							<p>Add New Task</p>
						</CustomButton>
					</div>
				</div>
			) : (
				<div
					className={`${
						formState.createTask || formState.addMembers ? "hide-dashboard" : ""
					} dashboard-with-tasks`}
				>
					<DashboardTeam loadTeam={team} />
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
		</div>
	);
};

export default Dashboard;

/* 
<img
src={`/tasks/images/${key}`}
alt="s3 downloads"
style={{ width: "50px" }}
key={key}
/> 
*/

// {
//   "attachments": [
//     "a02c18b5f28f0ead56e671f899d26322",
//     "b9059ac9cc274b154efe25c63c871c11"
//   ],
//   "_id": "60d81b1956c43b3af8b72cbf",
//   "name": "task 1",
//   "type": "backlog",
//   "priority": "high",
//   "assigned": [
//     {
//       "_id": "60d81b1956c43b3af8b72cc0",
//       "username": "Adnan Kiks",
//       "userId": "60d28ff00ae47418982f1a38"
//     },
//     {
//       "_id": "60d81b1956c43b3af8b72cc1",
//       "username": "Manal Kiks",
//       "userId": "60d4ae95f99d7e10640836ba"
//     }
//   ],
//   "description": "task 1 task 1 task 1 task 1 task 1",
//   "comments": [],
//   "createdAt": "2021-06-27T06:30:49.590Z",
//   "updatedAt": "2021-06-27T06:30:49.590Z",
//   "__v": 0
// }
