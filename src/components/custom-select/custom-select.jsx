import React from "react";
import "./custom-select.scss";

const CustomSelect = ({ options }) => {
	return (
		<div className="custom-select">
			<select name="tasks" id="tasks-select">
				{options.map((each) => (
					<option value={each} key={each}>
						{each}
					</option>
				))}
			</select>
		</div>
	);
};

export default CustomSelect;

// all tasks
// backlog
// progress
// review
// done
