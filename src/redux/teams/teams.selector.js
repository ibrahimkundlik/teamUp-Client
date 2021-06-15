import { createSelector } from "reselect";

export const selectTeams = (state) => state.teams;

export const selectSuccessRes = createSelector(
	[selectTeams],
	(teams) => teams.successRes
);
