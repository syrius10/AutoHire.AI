import axios from "axios";

const API_URL = "http://localhost:5001/api/interviews";

export const scheduleInterview = async (data) => {
    return axios.post(`${API_URL}/schedule`, data);
};

export const fetchInterviews = async () => {
    return axios.get(API_URL);
};