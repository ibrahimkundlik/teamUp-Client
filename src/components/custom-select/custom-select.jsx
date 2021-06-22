import React from "react";
import "./custom-select.scss";
import { AiFillCaretDown } from "react-icons/ai";

const CustomSelect = ({ options }) => {
	return (
		<div className="custom-select">
			<select name="pets" id="pet-select">
				{options.map((each) => (
					<option value={each} key={each}>
						{each}
					</option>
				))}
			</select>
			<div className="select-icon">
				<AiFillCaretDown />
			</div>
			<ul className="option-list-mod">
				{options.map((each) => (
					<li key={each} className="option-mod">
						{each}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CustomSelect;

// all tasks
// backlog
// progress
// review
// done
