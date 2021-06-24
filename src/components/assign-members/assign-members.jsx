import React from "react";
import "./assign-members.scss";
import CustomButton from "../custom-button/custom-button";

const AssignMembers = ({ members }) => {
	return (
		<div className="assign-members-cont">
			<p className="assign-members-label">Add Members</p>
			<ul className="members-list">
				{members.map((member) => {
					const { _id, name } = member._id;
					return (
						<li className="member" key={_id}>
							<p>{name}</p>
							<CustomButton className="member-add">Add</CustomButton>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AssignMembers;
