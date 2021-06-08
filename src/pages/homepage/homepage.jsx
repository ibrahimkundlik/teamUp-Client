import React, { useEffect } from "react";
import "./homepage.scss";
import dashboardImg from "../../images/dashboard.png";
import CustomButton from "../../components/custom-button/custom-button";
import { Link } from "react-router-dom";
import { useTrialLogin } from "../../hooks/useTrialLogin/useTrialLogin.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/user/user.selector";
import Spinner from "../../components/spinner/spinner";
import { clearErrorRes } from "../../redux/user/user.action";

const HomePage = () => {
	const dispatch = useDispatch();
	const trialLogin = useTrialLogin();
	const auth = useSelector(selectAuth);

	useEffect(() => {
		dispatch(clearErrorRes());
	}, [dispatch]);

	return (
		<div className="hero-section">
			<div className="hero-image">
				<img src={dashboardImg} alt="teamUp dashboard" />
			</div>
			<div className="hero-text">
				<h1>
					Task Management
					<span>Made Delightfully Simple</span>
				</h1>
				<p className="hero-desc">
					“With{" "}
					<strong>
						team
						<span>Up</span>
					</strong>{" "}
					you will complete projects faster and with less overhead”
				</p>
				<Link to="/signup">
					<CustomButton className="signup-btn">Signup for free</CustomButton>
				</Link>
				<CustomButton className="trial-btn" onClick={() => trialLogin()}>
					<span>Login with TRIAL account</span>
					{auth.loading && <Spinner />}
				</CustomButton>
				{auth.errorRes && <p className="error-modal">{auth.errorRes}</p>}
			</div>
		</div>
	);
};

export default HomePage;
