/* eslint-disable no-undef */
import axios from "axios";

const token = localStorage.getItem("token");

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  baseURL: import.meta.env.VITE_BASE_URL,
});

if (token) {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default http;
