import React from "react";
import "./navbar.scss";
import Logo from "../../components/logo/logo";
import CustomButton from "../../components/custom-button/custom-button";
import { Link } from "react-router-dom";

const Navbar = ({ showLogin }) => {
	return (
		<div className="navbar-container">
			<Link to="/">
				<Logo />
			</Link>
			{showLogin && (
				<Link to="/login">
					<CustomButton className="login-btn">Login</CustomButton>
				</Link>
			)}
		</div>
	);
};

export default Navbar;
