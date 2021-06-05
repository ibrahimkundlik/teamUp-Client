import React from "react";
import errorImage from "../../images/errorImage.png";
import CustomButton from "../custom-button/custom-button";
import "./error-page.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="error-page-cont">
			<div className="error-image-cont">
				<img src={errorImage} alt="errorImage" />
			</div>
			<h4 className="error-head">This Page is Lost in Space</h4>
			<h5 className="error-para">
				You thought this mission to the moon would be a quick six month thing.
				Your neighbor offered to look after your dog. Your high school math
				teacher was impressed. Your dog will be so sad. Your math teacher will
				be so smug. Pretty devastating.
			</h5>
			<CustomButton>
				<Link to="/">Back to Home</Link>
			</CustomButton>
		</div>
	);
};

export default ErrorPage;
