import React from "react";
import "./member-request.scss";
import CustomButton from "../../custom-button/custom-button";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectJoinRequests } from "../../../redux/user/user.selector";

const MemberRequest = ({ showMemberRequest, handleClose }) => {
	const requests = useSelector(selectJoinRequests);

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
			<div className="requests-cont">
				{requests.length === 0 ? (
					<p>Currently there are no member requests to show.</p>
				) : (
					<ul className="requests-list">
						{requests.map((request) => {
							const { _id, teamId, teamName, userId, userName } = request;
							return (
								<li className="request" key={_id}>
									<p className="request-mssg">
										<span>{userName}</span> wants to join{" "}
										<span>{teamName}</span>
									</p>
									<CustomButton className="accept-btn">Accept</CustomButton>
									<CustomButton className="reject-btn">Reject</CustomButton>
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
