import React from "react";
import "./join-team.scss";
import { AiFillCloseCircle, AiOutlineFileSearch } from "react-icons/ai";
import CustomInput from "../../custom-input/custom-input";
import CustomButton from "../../custom-button/custom-button";
import { useInputState } from "../../../hooks/useInputState/useInputState";
import { searchCollection } from "../../../redux/search/search.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../spinner/spinner";

const DisplaySearchTeams = ({ teams }) => {
	return (
		<div className="search-result-cont">
			<h4>Search results:</h4>
			{teams.length === 0 ? (
				<p>No teams found!</p>
			) : (
				teams.map((team) => <p>{team.name}</p>)
			)}
		</div>
	);
};

const JoinTeam = ({ showJoinForm, handleClose }) => {
	const [state, bindState] = useInputState({ searchQuery: "" });
	const dispatch = useDispatch();
	const search = useSelector((state) => state.search);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchCollection(state.searchQuery, "teams"));
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
					handleClose(false);
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
