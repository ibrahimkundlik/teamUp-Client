import React, { useEffect, useState } from "react";
import HomePage from "./pages/homepage/homepage";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Teams from "./pages/teams/teams";
import Navbar from "./components/navbar/navbar";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import ErrorPage from "./components/error-page/error-page";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logout, checkUser } from "./redux/user/user.action";
import { selectAuth, selectAuthToken } from "./redux/user/user.selector";

const App = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const auth = useSelector(selectAuth);
	const authToken = useSelector(selectAuthToken);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		dispatch(checkUser());
	}, [dispatch]);

	useEffect(() => {
		setCurrentUser(JSON.parse(localStorage.getItem("profile")));
	}, [auth.userRes]);

	useEffect(() => {
		const token = authToken;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				dispatch(logout());
			}
		}
	}, [authToken, location, dispatch]);

	return (
		<div className="App">
			<ScrollToTop />
			{location.pathname !== "/dashboard" && (
				<Navbar showLogin={location.pathname === "/"} />
			)}
			<Switch>
				<Route
					exact
					path="/"
					render={() => (currentUser ? <Redirect to="/teams" /> : <HomePage />)}
				/>
				<Route
					exact
					path="/login"
					render={() => (currentUser ? <Redirect to="/teams" /> : <Login />)}
				/>
				<Route
					exact
					path="/signup"
					render={() => (currentUser ? <Redirect to="/teams" /> : <SignUp />)}
				/>
				<Route exact path="/teams" component={Teams} />
				<Route path="/*" component={ErrorPage} />
			</Switch>
		</div>
	);
};

export default App;
