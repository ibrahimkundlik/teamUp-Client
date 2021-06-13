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

export const selectTeams = createSelector(
	[selectAuthUser],
	(user) => user?.teams
);

export const selectSentRequests = createSelector(
	[selectAuthUser],
	(user) => user?.sentRequests
);

export const selectJoinRequests = createSelector(
	[selectAuthUser],
	(user) => user?.joinRequests
);
