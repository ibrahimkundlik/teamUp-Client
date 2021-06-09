import React from "react";
import "./members.scss";

const Members = ({ members }) => {
	return (
		<div className="members-cont">
			{members.slice(0, 5).map((member) => (
				<div className="member" key={member._id?._id}>
					<p>
						{member._id?.name.split(" ")[0][0]}
						{member._id?.name.split(" ")[1][0]}
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
