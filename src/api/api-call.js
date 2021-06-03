import axios from "axios";

const url = "http://localhost:5000";

export const login = (formData) => axios.post(`${url}/users/login`, formData);
export const signup = (formData) => axios.post(`${url}/users/signup`, formData);
