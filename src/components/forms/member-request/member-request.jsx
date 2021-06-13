import React, { useEffect } from "react";
import "./member-request.scss";
import CustomButton from "../../custom-button/custom-button";
import Spinner from "../../spinner/spinner";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	selectAuth,
	selectJoinRequests,
} from "../../../redux/user/user.selector";
import {
	clearErrorRes,
	memberRequestAction,
} from "../../../redux/user/user.action";

const MemberRequest = ({ showMemberRequest, handleClose }) => {
	const requests = useSelector(selectJoinRequests);
	const dispatch = useDispatch();
	const { loading, errorRes, successRes } = useSelector(selectAuth);

	useEffect(() => {
		console.log("nxncbnxcbnc");
		let timeout = setTimeout(() => {
			dispatch(clearErrorRes());
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [successRes, dispatch]);

	const handleRequest = (type, request) => {
		const requestData = {
			userId: request.userId,
			teamId: request.teamId,
			requestId: request._id,
			type,
		};
		dispatch(memberRequestAction(requestData));
	};

	return (
		<div
			className={`${
				showMemberRequest ? "form-visible " : ""
			}abs-form-cont member-request-cont`}
		>
			<h2>Member requests</h2>
			<div
				className="close-icon"
				onClick={() => {
					handleClose();
				}}
			>
				<AiFillCloseCircle />
			</div>

			<div className="message-modal">
				{loading && <Spinner />}
				{errorRes && (
					<p className="error-message-modal">
						Could not complete the previous request.{" "}
						<span className="error-highlight">
							{typeof errorRes === "string" && errorRes}
						</span>
					</p>
				)}
				{successRes && <p className="success-message-modal">{successRes}</p>}
			</div>

			<div className="requests-cont">
				{requests.length === 0 ? (
					<p>Currently there are no member requests to show.</p>
				) : (
					<ul className="requests-list">
						{requests.map((request) => {
							const { _id, teamName, userName } = request;
							return (
								<li className="request" key={_id}>
									<p className="request-mssg">
										<span>{userName}</span> wants to join{" "}
										<span>{teamName}</span>
									</p>
									<CustomButton
										className="accept-btn"
										onClick={() => handleRequest("accept", request)}
									>
										Accept
									</CustomButton>
									<CustomButton
										className="reject-btn"
										onClick={() => handleRequest("reject", request)}
									>
										Reject
									</CustomButton>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default MemberRequest;
