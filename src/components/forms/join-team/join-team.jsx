import React from "react";
import "./join-team.scss";
import {
	AiFillCloseCircle,
	AiOutlineFileSearch,
	AiOutlineTeam,
	AiOutlineCheckCircle,
	AiOutlineSend,
} from "react-icons/ai";
import CustomInput from "../../custom-input/custom-input";
import CustomButton from "../../custom-button/custom-button";
import { useInputState } from "../../../hooks/useInputState/useInputState";
import {
	joinRequestAction,
	searchCollectionAction,
} from "../../../redux/search/search.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../spinner/spinner";
import {
	selectAuthUser,
	selectSentRequests,
	selectTeams,
} from "../../../redux/user/user.selector";

const DisplaySearchTeams = ({ teams }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectAuthUser);
	const userTeams = useSelector(selectTeams);
	const userSentRequests = useSelector(selectSentRequests);

	const handleJoinRequest = (team) => {
		const joinDetails = {
			userName: user.name,
			teamName: team.name,
			teamId: team._id,
		};

		const admin = team.members.find((member) => member.level === "admin");

		dispatch(joinRequestAction(joinDetails, admin._id));
	};

	return (
		<div className="search-result-cont">
			<h4>Search results:</h4>
			<ul className="teams-list">
				{teams.length === 0 ? (
					<p>No teams found!</p>
				) : (
					teams.map((team) => (
						<li key={team._id} className="team">
							<p>{team.name}</p>
							{userTeams.findIndex((id) => id === team._id) >= 0 ? (
								<CustomButton className="member-btn">
									<p>Member</p> <AiOutlineTeam />
								</CustomButton>
							) : userSentRequests.findIndex((id) => id === team._id) >= 0 ? (
								<CustomButton className="request-btn">
									<p>Request sent</p> <AiOutlineCheckCircle />
								</CustomButton>
							) : (
								<CustomButton
									className="join-btn"
									onClick={() => handleJoinRequest(team)}
								>
									<p>Join</p> <AiOutlineSend />
								</CustomButton>
							)}
						</li>
					))
				)}
			</ul>
		</div>
	);
};

const JoinTeam = ({ showJoinForm, handleClose }) => {
	const [state, bindState] = useInputState({ searchQuery: "" });
	const dispatch = useDispatch();
	const search = useSelector((state) => state.search);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchCollectionAction(state.searchQuery, "teams"));
	};

	return (
		<div
			className={`${
				showJoinForm ? "form-visible " : ""
			}abs-form-cont join-team-cont`}
		>
			<h3>Join new team</h3>
			<div
				className="close-icon"
				onClick={() => {
					handleClose();
				}}
			>
				<AiFillCloseCircle />
			</div>
			<form
				autoComplete="off"
				className="search-teams-form"
				onSubmit={handleSubmit}
			>
				<CustomInput
					type="search"
					name="searchQuery"
					placeholder="Enter team name"
					value={state.searchQuery}
					{...bindState}
					required
					inputIcon={<AiOutlineFileSearch />}
					className="search-teams"
				/>
				<CustomButton type="submit">Search</CustomButton>
			</form>
			{search.loading ? (
				<Spinner />
			) : search.errorRes ? (
				<p className="error-message-modal">
					Could not complete the search request.{" "}
					<span className="error-highlight">
						{typeof search.errorRes === "string" && search.errorRes}
					</span>
				</p>
			) : search.searchRes ? (
				<DisplaySearchTeams teams={search.searchRes} />
			) : null}
		</div>
	);
};

export default JoinTeam;
