import { createSelector } from "reselect";

export const selectAuth = (state) => state.auth;

export const selectAuthToken = createSelector(
	[selectAuth],
	(auth) => auth.userRes?.token
);

export const selectAuthUser = createSelector(
	[selectAuth],
	(auth) => auth.userRes?.user
);
