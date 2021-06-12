import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../components/dashboard/dashboard";
import ErrorPage from "../../components/error-page/error-page";
import TeamsMainpage from "../../components/teams/teams-mainpage/teams-mainpage";

const Teams = () => {
	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route exact path={path} component={TeamsMainpage} />
			<Route path={`${path}/dashboard/:id`} component={Dashboard} />
			<Route path="*" component={ErrorPage} />
		</Switch>
	);
};

export default Teams;
