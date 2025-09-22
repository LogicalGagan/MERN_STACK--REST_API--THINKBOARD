import axios from "axios";
const BASE_URL = import.meta.env.MODE==="development" ? "http://localhost:5001/api" : "/api"
const api= axios.create(
    {
        baseURL:BASE_URL,
    }
);

api.interceptors.request.use((config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo) {
        config.headers.Authorization = `Bearer ${userInfo.token}`;
    }

    return config;
});

export default api;