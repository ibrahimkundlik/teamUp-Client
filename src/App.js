import React from "react";
import HomePage from "./pages/homepage/homepage";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/navbar";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import { Route, Switch, withRouter } from "react-router-dom";

const App = ({ location: { pathname } }) => {
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
