import React from "react";
import HomePage from "./pages/homepage/homepage";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import { Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
};

export default App;
