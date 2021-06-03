import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/navbar";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import { Route, Switch, withRouter } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/user/user.action";

const App = ({ location: { pathname } }) => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		const data = {
			email: "masckwils@live.com",
			password: "12345678",
		};
		dispatch(login(data));
	}, [dispatch]);

	return (
		<div className="App">
			<ScrollToTop />
			<Navbar showLogin={pathname === "/"} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
