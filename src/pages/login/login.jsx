import React, { useEffect, useState } from "react";
import "./login.scss";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import Spinner from "../../components/spinner/spinner";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { startLogin, clearErrorRes } from "../../redux/user/user.action";
import { useHistory } from "react-router-dom";
import { selectAuth } from "../../redux/user/user.selector";

const INITIAL_LOGIN_DATA = {
	email: "",
	password: "",
};

const Login = () => {
	const [formData, setFormData] = useState(INITIAL_LOGIN_DATA);
	const dispatch = useDispatch();
	const history = useHistory();
	const auth = useSelector(selectAuth);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startLogin(formData, history));
	};

	useEffect(() => {
		dispatch(clearErrorRes());
	}, [dispatch]);

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
			{auth.errorRes && (
				<div className="message-modal">
					<p>{auth.errorRes}</p>
				</div>
			)}
			<CustomButton type="submit" className="login-btn">
				<p>Log In</p>
				{auth.loading && <Spinner />}
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
