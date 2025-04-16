// api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_URL + "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Note: This header is typically set on the server, not client
  },
});

api.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const { jwtToken } = JSON.parse(auth);
      console.log("Attaching token to request:", jwtToken);
      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;