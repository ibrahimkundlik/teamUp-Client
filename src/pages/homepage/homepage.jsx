import React from "react";
import "./homepage.scss";
import dashboardImg from "../../images/dashboard.png";
import Logo from "../../components/logo/logo";
import CustomButton from "../../components/custom-button/custom-button";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="homepage-container">
			<div className="navbar">
				<Logo />
				<Link to="/login">
					<CustomButton className="login-btn">Login</CustomButton>
				</Link>
			</div>
			<div className="hero-section">
				<div className="hero-image">
					<img src={dashboardImg} alt="teamUp dashboard" />
				</div>
				<div className="hero-text">
					<h1>
						Task Management
						<span>Made Delightfully Simple</span>
					</h1>
					<p>
						“With{" "}
						<strong>
							team
							<span>Up</span>
						</strong>{" "}
						you will complete projects faster and with less overhead”
					</p>
					<CustomButton className="trial-btn">
						Login with TRIAL account
					</CustomButton>
					<Link to="/signup">
						<CustomButton className="signup-btn">Sign up</CustomButton>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
