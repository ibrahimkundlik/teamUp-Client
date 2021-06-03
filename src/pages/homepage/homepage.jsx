import React from "react";
import "./homepage.scss";
import dashboardImg from "../../images/dashboard.png";
import CustomButton from "../../components/custom-button/custom-button";
import { Link } from "react-router-dom";
//redux
// import { useDispatch } from "react-redux";
// import { createPost } from "../../redux/posts/posts.action";

const HomePage = () => {
	// const dispatch = useDispatch();

	// const postRequest = () => {
	// 	const postData = {
	// 		title: "second post",
	// 		message: "saving second post request",
	// 		creator: "haris",
	// 		tags: ["5", "3", "25"],
	// 	};
	// 	dispatch(createPost(postData));
	// };

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
				<p>
					“With{" "}
					<strong>
						team
						<span>Up</span>
					</strong>{" "}
					you will complete projects faster and with less overhead”
				</p>
				<CustomButton className="trial-btn" onClick={postRequest}>
					Login with TRIAL account
				</CustomButton>
				<Link to="/signup">
					<CustomButton className="signup-btn">Signup</CustomButton>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
