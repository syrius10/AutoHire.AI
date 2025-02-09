import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs";

export const fetchJobs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const applyForJob = async (jobId, candidateId) => {
    return axios.post(`${API_URL}/apply`, { jobId, candidateId });
};