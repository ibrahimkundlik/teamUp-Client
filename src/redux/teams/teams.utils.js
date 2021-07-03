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
				tasks: [payload.task, ...team.tasks],
			};
		}
		return team;
	});
};

export const updateTaskToTeam = (teamList, payload) => {
	return teamList.map((team) => {
		if (team._id === payload.teamId) {
			return {
				...team,
				tasks: team.tasks.map((task) => {
					if (task._id === payload.updatedTask._id) {
						return payload.updatedTask;
					}
					return task;
				}),
			};
		}
		return team;
	});
};
