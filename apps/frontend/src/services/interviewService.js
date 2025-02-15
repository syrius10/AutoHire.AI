import axios from "axios";

const API_URL = "http://localhost:5001/api/interviews";

export const scheduleInterview = async (data) => {
    return axios.post(`${API_URL}/schedule`, data);
};

export const fetchInterviews = async () => {
    return axios.get(API_URL);
};

export const analyzeInterview = async(file) => {
    const formData = new FormData();
    formData.append("audio", file);
    const response = await axios.post(`${API_URL}/analyze`, formData);
    return response.data;
};

export const fetchInterviewInsights = async (interviewId) => {
    const response = await axios.get(`${API_URL}/insights/${interviewId}`);
    return response.data;
};