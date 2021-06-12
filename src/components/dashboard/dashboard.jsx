import React from "react";
import { useParams } from "react-router-dom";

const Dash = () => {
	const { id } = useParams();

	return (
		<div>
			<h2>DASHBOARD</h2>
			<h5>{id}</h5>
		</div>
	);
};

export default Dash;
