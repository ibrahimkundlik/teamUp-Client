import React from "react";
import "./signup.scss";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import {
	HiOutlineMail,
	HiOutlineLockClosed,
	HiOutlineUserCircle,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<form
			className="signup-container"
			autoComplete="off"
			onSubmit={(e) => e.preventDefault()}
		>
			<h2>Create Account</h2>
			<CustomInput
				type="text"
				name="firstname"
				label="First Name"
				placeholder="John"
				required
				inputIcon={<HiOutlineUserCircle />}
			/>
			<CustomInput
				type="text"
				name="lastname"
				label="Last Name"
				placeholder="Doe"
				required
				inputIcon={<HiOutlineUserCircle />}
			/>
			<CustomInput
				type="email"
				name="email"
				label="Email"
				placeholder="Enter your email"
				required
				inputIcon={<HiOutlineMail />}
			/>
			<CustomInput
				type="password"
				name="password"
				label="Password"
				placeholder="Enter your password"
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
