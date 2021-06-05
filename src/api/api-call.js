import axios from "axios";

const API = axios.create({
	baseURL: "http://192.168.8.108:5000",
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	}
	return req;
});

export const login = (formData) => API.post("/users/login", formData);
export const signup = (formData) => API.post("/users/signup", formData);

export const getTeams = () => API.get("/teams");
export const createTeam = (teamData) => API.post("/teams", teamData);
