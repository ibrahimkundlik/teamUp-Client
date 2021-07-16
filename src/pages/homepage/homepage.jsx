import React, { useEffect } from "react";
import "./homepage.scss";
import dashboardImg from "../../images/dashboard.png";
import CustomButton from "../../components/custom-button/custom-button";
import { useHistory } from "react-router-dom";
import { useTrialLogin } from "../../hooks/useTrialLogin/useTrialLogin.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/user/user.selector";
import Spinner from "../../components/spinner/spinner";
import { clearMessageResAction } from "../../redux/user/user.action";
import Navbar from "../../components/navbar/navbar";

const HomePage = ({ firstFetchSS }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const trialLogin = useTrialLogin();
	const auth = useSelector(selectAuth);

	useEffect(() => {
		dispatch(clearMessageResAction());
	}, [dispatch]);

	return (
		<>
			<Navbar showLogin={true} />
			{firstFetchSS && (
				<p className="server-request-mssg">
					<strong>
						team<span>Up</span>
					</strong>{" "}
					server is deployed on Heroku, due to which it might take few seconds
					to make the first server request.
				</p>
			)}
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
					<CustomButton
						className="signup-btn"
						onClick={() => history.push("/signup")}
					>
						Signup for free
					</CustomButton>
					<CustomButton className="trial-btn" onClick={() => trialLogin()}>
						<span>Login with TRIAL account</span>
						{auth.loading && <Spinner />}
					</CustomButton>
					{auth.errorRes && <p className="error-modal">{auth.errorRes}</p>}
				</div>
			</div>
		</>
	);
};

export default HomePage;
