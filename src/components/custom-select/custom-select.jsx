import React from "react";
import "./custom-select.scss";
import { IoIosArrowDropdown } from "react-icons/io";

const CustomSelect = ({ options, label, id, ...otherProps }) => {
	return (
		<div className="custom-select">
			<label
				htmlFor={id}
				className={`${
					otherProps?.required ? "ip-required" : "ip-not-required"
				}`}
			>
				{label}
			</label>
			<select {...otherProps} id={id}>
				{options.map((each) => {
					const { value, key, text } = each;
					return (
						<option value={value} key={key}>
							{text}
						</option>
					);
				})}
			</select>
			<div className="custom-arrow">
				<IoIosArrowDropdown />
			</div>
		</div>
	);
};

export default CustomSelect;
