import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	}
	return req;
});

export const login = (formData) => API.post(`/users/login`, formData);
export const signup = (formData) => API.post(`/users/signup`, formData);
