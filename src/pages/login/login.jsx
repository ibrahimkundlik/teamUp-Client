import React from "react";
import "./login.scss";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<form
			className="login-container"
			autoComplete="off"
			onSubmit={(e) => e.preventDefault()}
		>
			<h2>Welcome Back!</h2>
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
			<CustomButton type="submit" className="login-btn">
				Log In
			</CustomButton>
			<div className="other-auths">
				<p>Don't have an acoount ?</p>
				<Link to="/signup">
					<CustomButton type="button" className="signup-btn">
						Signup
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

export default Login;
