import axios from "axios";

const API_URL = "http://localhost:5000/api/analytics";

export const getJobCount = async () => {
    const response = await axios.get(`${API_URL}/jobs-count`);
    return response.data;
};

export const getApplicationCount = async () => {
    const response = await.axios.get(`${API_URL}/applications-count`);
    return response.data;
};