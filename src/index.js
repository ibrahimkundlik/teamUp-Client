import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./redux/root";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = createStore(
	rootReducer,
	compose(applyMiddleware(...middlewares))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
