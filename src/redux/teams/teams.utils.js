//utils

export const generateUpdatedTeams = (teamList, payload) => {
	return teamList.map((team) => {
		if (team._id === payload.teamId) {
			return {
				...team,
				[payload.field]: payload.value,
			};
		}
		return team;
	});
};
