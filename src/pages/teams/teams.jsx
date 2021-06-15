import React, { useEffect } from "react";
import "./teams.scss";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Dashboard from "../../components/dashboard/dashboard";
import ErrorPage from "../../components/error-page/error-page";
import TeamsMainpage from "../../components/teams/teams-mainpage/teams-mainpage";
import { getTeams } from "../../redux/teams/teams.action";
import { selectTeams } from "../../redux/teams/teams.selector";
import ErrorMessageModal from "../../components/message-modals/error-message-modal";
import Spinner from "../../components/spinner/spinner";
import CustomButton from "../../components/custom-button/custom-button";
import { logout } from "../../redux/user/user.action";

const Teams = () => {
	let { path } = useRouteMatch();
	const teams = useSelector(selectTeams);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getTeams());
	}, [dispatch]);

	return (
		<div className="teams-container">
			{teams.loading ? (
				<div className="spinner-fullscreen">
					<Spinner />
				</div>
			) : teams.errorRes ? (
				<div className="spinner-fullscreen">
					<ErrorMessageModal errorMssg={teams.errorRes} />
					<CustomButton onClick={() => dispatch(logout(history))}>
						Logout
					</CustomButton>
				</div>
			) : (
				<Switch>
					<Route
						exact
						path={path}
						render={() => <TeamsMainpage teams={teams.teamsRes} />}
					/>
					<Route
						exact
						path={`${path}/dashboard/:id`}
						render={() => <Dashboard teams={teams.teamsRes} />}
					/>
					<Route
						exact
						path={`${path}/settings`}
						render={() => <h4>SETTINGS PAGE</h4>}
					/>
					<Route
						exact
						path={`${path}/info`}
						render={() => <h4>INFO PAGE</h4>}
					/>
					<Route path="*" component={ErrorPage} />
				</Switch>
			)}
		</div>
	);
};

export default Teams;
