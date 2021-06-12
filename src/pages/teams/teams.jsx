import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dash from "../../components/dashboard/dashboard";
import ErrorPage from "../../components/error-page/error-page";

const Teams = () => {
	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route exact path={path}>
				<h3>Teams Page</h3>
			</Route>
			<Route path={`${path}/dashboard/:id`}>
				<Dash />
			</Route>
			<Route path="*" component={ErrorPage} />
		</Switch>
	);
};

export default Teams;
