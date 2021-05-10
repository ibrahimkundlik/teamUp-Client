import React from "react";
import "./logo.scss";
import mainLogo from "../../images/logo192.png";

const Logo = () => {
	return (
		<div className="teamUp-logo-cont">
			<div className="logo-image">
				<img src={mainLogo} alt="teamUp logo" />
			</div>
			<h2>
				<span className="red-text">team</span>
				<span className="blue-text">Up</span>
			</h2>
		</div>
	);
};

export default Logo;
