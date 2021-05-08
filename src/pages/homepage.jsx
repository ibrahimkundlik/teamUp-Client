import React from "react";
import "./homepage.scss";
import dashboardImg from "../images/dashboard.png";
import Logo from "../components/logo.component";

const HomePage = () => {
	return (
		<div className="homepage-container">
			<div className="max-container">
				<div className="navbar">
					<Logo />
					<button className="login-btn">Login</button>
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
						<button className="trial-btn">Login with TRIAL account</button>
						<button className="signup-btn">Sign up</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
