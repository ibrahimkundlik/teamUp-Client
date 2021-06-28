import React from "react";
import "./members.scss";

const Members = ({ members }) => {
	return (
		<div className="members-cont">
			<h5>Members:</h5>
			{members.slice(0, 5).map((member) => (
				<div className="member" key={member._id}>
					<p>
						{member.username.split(" ")[0][0]}
						{member.username.split(" ")[1][0]}
					</p>
				</div>
			))}
			{members.length > 5 ? (
				<p className="remaining-members">+{members.length - 5}</p>
			) : null}
		</div>
	);
};

export default Members;
