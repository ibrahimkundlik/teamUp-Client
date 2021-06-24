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
							{existingMembers.findIndex((member) => member.userId === _id) <
							0 ? (
								<CustomButton
									className="member-add"
									type="button"
									onClick={() => {
										setAssigned([
											...existingMembers,
											{
												username: name,
												userId: _id,
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

// {
// 	"name": "new task 2 22 222",
// 	"type": "pending",
// 	"priority": "medium",
// 	"assigned": [
// 			{
// 					"username": "Clark Kent",
// 					"userId": "60c4ebb319133a44a8fb1526"
// 			},
// 			{
// 					"username": "Bruce Wayne",
// 					"userId": "60c458f833b9ba19288892c7"
// 			}
// 	],
// 	"description": "nxcm nxmcn mxncm mxncm mnxcm nxmcn",
// 	"teamId": "60c4ec8419133a44a8fb152a"
// }
