import axios from "axios";

const API = axios.create({
	baseURL: "http://192.168.8.105:5000",
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	}
	return req;
});

//users
export const login = (formData) => {
	return API.post("/users/login", formData);
};
export const signup = (formData) => {
	return API.post("/users/signup", formData);
};
export const joinRequest = (details, adminId) => {
	return API.patch(`/users/request/${adminId}`, details);
};
export const memberRequest = (requestData) => {
	return API.patch("/users/add-member", requestData);
};

//teams
export const getTeams = () => {
	return API.get("/teams");
};
export const createTeam = (teamData) => {
	return API.post("/teams", teamData);
};

//common
export const searchCollection = (query, collection) => {
	return API.get(`/${collection}/search?searchQuery=${query}`);
};

//tasks
export const createTask = (formData) => {
	return API.post("/tasks/create", formData);
};
