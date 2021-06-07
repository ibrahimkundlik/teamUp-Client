import React, { useState, useEffect } from "react";
import "./signup.scss";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import Spinner from "../../components/spinner/spinner";
import {
	HiOutlineMail,
	HiOutlineUserCircle,
	HiOutlineLockClosed,
} from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { startSignup, clearErrorRes } from "../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/user/user.selector";
import { useTrialLogin } from "../../hooks/useTrialLogin/useTrialLogin";

const INITIAL_SIGNUP_DATA = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [formData, setFormData] = useState(INITIAL_SIGNUP_DATA);
	const history = useHistory();
	const dispatch = useDispatch();
	const trialLogin = useTrialLogin();
	const auth = useSelector(selectAuth);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startSignup(formData, history));
	};

	useEffect(() => {
		dispatch(clearErrorRes());
	}, [dispatch]);

	return (
		<form
			className="signup-container"
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<h2>Create Account</h2>
			<div className="signup-input-cont">
				<CustomInput
					type="text"
					name="firstname"
					label="First Name"
					placeholder="John"
					onChange={handleChange}
					value={formData.firstname}
					required
					inputIcon={<HiOutlineUserCircle />}
					className="name-field"
				/>
				<CustomInput
					type="text"
					name="lastname"
					label="Last Name"
					placeholder="Doe"
					onChange={handleChange}
					value={formData.lastname}
					required
					inputIcon={<HiOutlineUserCircle />}
					className="name-field"
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
					className="email-field"
				/>
				<CustomInput
					type="password"
					name="password"
					label="Password"
					placeholder="Minimum length of 8 chars"
					onChange={handleChange}
					value={formData.password}
					required
					inputIcon={<HiOutlineLockClosed />}
					className="password-field"
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
					className="password-field"
				/>
			</div>
			{auth.errorRes && (
				<div className="message-modal">
					<p>{auth.errorRes}</p>
				</div>
			)}
			<CustomButton type="submit" className="signup-btn">
				<p>Signup</p>
				{auth.loading && <Spinner />}
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
				<CustomButton
					type="button"
					className="trial-btn"
					onClick={() => trialLogin()}
				>
					Login with TRIAL account
				</CustomButton>
			</div>
		</form>
	);
};

export default SignUp;
