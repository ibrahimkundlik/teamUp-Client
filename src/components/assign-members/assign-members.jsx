import React from "react";
import "./assign-members.scss";
import CustomButton from "../custom-button/custom-button";
import { BsPersonCheck } from "react-icons/bs";

const AssignMembers = ({ members, existingMembers, setAssigned }) => {
	return (
		<div className="assign-members-cont">
			<p className="assign-members-label">Add Members</p>
			<ul className="members-list">
				{members.map((member) => {
					const { _id, name } = member._id;
					return (
						<li className="member" key={_id}>
							<p>{name}</p>
							{existingMembers.findIndex(
								(memberExist) => memberExist._id === _id
							) < 0 ? (
								<CustomButton
									className="member-add"
									type="button"
									onClick={() => {
										setAssigned([
											...existingMembers,
											{
												_id: _id,
												username: name,
											},
										]);
									}}
								>
									Add
								</CustomButton>
							) : (
								<CustomButton className="member-added" type="button">
									<BsPersonCheck />
								</CustomButton>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AssignMembers;
