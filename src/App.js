import React, { useEffect, useState } from "react";
import HomePage from "./pages/homepage/homepage";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Teams from "./pages/teams/teams";
import AuthError from "./components/auth-error/auth-error";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import ErrorPage from "./components/error-page/error-page";
import decode from "jwt-decode";
import {
	Route,
	Switch,
	useLocation,
	Redirect,
	useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, checkUser } from "./redux/user/user.action";
import { selectAuth, selectAuthToken } from "./redux/user/user.selector";
import { firstFetch } from "./api/api-call";

const App = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const auth = useSelector(selectAuth);
	const authToken = useSelector(selectAuthToken);
	const history = useHistory();
	const [firstFetchSS, setFirstFetchSS] = useState(null);

	useEffect(() => {
		dispatch(checkUser());
	}, [dispatch]);

	useEffect(() => {
		const token = authToken;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				dispatch(logout(history));
			}
		}
	}, [authToken, location, dispatch, history]);

	useEffect(() => {
		async function serverWake() {
			try {
				sessionStorage.setItem("firstFetch", "done");
				setFirstFetchSS(sessionStorage.getItem("firstFetch"));
				await firstFetch();
			} catch (error) {
				console.log(error.message);
			}
		}
		serverWake();
	}, []);

	useEffect(() => {
		let timeout = setTimeout(() => {
			sessionStorage.clear();
			setFirstFetchSS(null);
		}, 7000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<div className="App">
			<ScrollToTop />
			<Switch>
				<Route
					exact
					path="/"
					render={() =>
						auth.userRes ? (
							<Redirect to="/teams" />
						) : (
							<HomePage firstFetchSS={firstFetchSS} />
						)
					}
				/>
				<Route
					path="/login"
					render={() => (auth.userRes ? <Redirect to="/teams" /> : <Login />)}
				/>
				<Route
					path="/signup"
					render={() => (auth.userRes ? <Redirect to="/teams" /> : <SignUp />)}
				/>
				<Route
					path="/teams"
					render={() => (auth.userRes ? <Teams /> : <AuthError />)}
				/>
				<Route path="*" component={ErrorPage} />
			</Switch>
		</div>
	);
};

export default App;
