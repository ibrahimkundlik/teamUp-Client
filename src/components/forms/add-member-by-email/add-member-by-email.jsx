import React, { useState } from "react";
import "./add-member-by-email.scss";
import {
	AiFillCloseCircle,
	AiOutlineMail,
	AiOutlineUserAdd,
} from "react-icons/ai";
import CustomInput from "../../custom-input/custom-input";
import CustomButton from "../../custom-button/custom-button";
import Spinner from "../../spinner/spinner";
import { useDispatch, useSelector } from "react-redux";
import { addMemberByEmailAction } from "../../../redux/task/task.action";
import ErrorMessageModal from "../../message-modals/error-message-modal";

const AddMemberByEmail = ({ handleCloseForm, teamId }) => {
	const dispatch = useDispatch();
	const reqStatus = useSelector((state) => state.task);
	const [emailInput, setEmailInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			userMail: emailInput,
			teamId,
		};
		dispatch(addMemberByEmailAction(userData, handleCloseForm));
	};

	return (
		<div className="add-member-by-email-cont">
			<h3>Add member by email</h3>
			<div className="close-icon" onClick={() => handleCloseForm()}>
				<AiFillCloseCircle />
			</div>
			<form
				autoComplete="off"
				className="add-member-form"
				onSubmit={handleSubmit}
			>
				<CustomInput
					type="email"
					name="email"
					label="Email"
					placeholder="Enter member's email address"
					required
					inputIcon={<AiOutlineMail />}
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
				/>
				<CustomButton type="submit" className="add-member-btn">
					<AiOutlineUserAdd />
					<p>Add member</p>
					{reqStatus.loading && <Spinner />}
				</CustomButton>
			</form>
			{reqStatus.errorRes && (
				<ErrorMessageModal errorMssg={reqStatus.errorRes} />
			)}
		</div>
	);
};

export default AddMemberByEmail;
