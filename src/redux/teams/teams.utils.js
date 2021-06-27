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

export const addTaskToTeam = (teamList, payload) => {
	return teamList.map((team) => {
		if (team._id === payload.teamId) {
			return {
				...team,
				tasks: [...team.tasks, payload.task],
			};
		}
		return team;
	});
};
