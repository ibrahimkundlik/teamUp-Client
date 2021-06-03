import React, { useState } from "react";
import "./login.scss";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { startLogin } from "../../redux/user/user.action";
import { useHistory } from "react-router-dom";

const INITIAL_LOGIN_DATA = {
	email: "",
	password: "",
};

const Login = () => {
	const [formData, setFormData] = useState(INITIAL_LOGIN_DATA);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startLogin(formData, history));
		setFormData(INITIAL_LOGIN_DATA);
	};

	return (
		<form
			className="login-container"
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<h2>Welcome Back!</h2>
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
