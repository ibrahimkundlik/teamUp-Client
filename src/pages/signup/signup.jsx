import React, { useState } from "react";
import "./signup.scss";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import {
	HiOutlineMail,
	HiUserCircle,
	HiOutlineUserCircle,
	HiLockClosed,
	HiOutlineLockClosed,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const INITIAL_SIGNUP_DATA = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [formData, setFormData] = useState(INITIAL_SIGNUP_DATA);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData(INITIAL_SIGNUP_DATA);
	};

	return (
		<form
			className="signup-container"
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<h2>Create Account</h2>
			<CustomInput
				type="text"
				name="firstname"
				label="First Name"
				placeholder="John"
				onChange={handleChange}
				value={formData.firstname}
				required
				inputIcon={<HiOutlineUserCircle />}
			/>
			<CustomInput
				type="text"
				name="lastname"
				label="Last Name"
				placeholder="Doe"
				onChange={handleChange}
				value={formData.lastname}
				required
				inputIcon={<HiUserCircle />}
			/>
			<CustomInput
				type="email"
				name="email"
				label="Email"
				placeholder="Enter your email"
				onChange={handleChange}
				value={formData.email}
				required
				inputIcon={<HiOutlineMail />}
			/>
			<CustomInput
				type="password"
				name="password"
				label="Password"
				placeholder="Enter your password"
				onChange={handleChange}
				value={formData.password}
				required
				inputIcon={<HiLockClosed />}
			/>
			<CustomInput
				type="password"
				name="confirmPassword"
				label="Confirm Password"
				placeholder="Confirm your password"
				onChange={handleChange}
				value={formData.confirmPassword}
				required
				inputIcon={<HiOutlineLockClosed />}
			/>
			<CustomButton type="submit" className="signup-btn">
				Sign Up
			</CustomButton>
			<div className="other-auths">
				<p>Already have an acoount ?</p>
				<Link to="/login">
					<CustomButton type="button" className="login-btn">
						Login
					</CustomButton>
				</Link>
				<p>
					<strong>OR</strong>
				</p>
				<CustomButton type="button" className="trial-btn">
					Login with TRIAL account
				</CustomButton>
			</div>
		</form>
	);
};

export default SignUp;
