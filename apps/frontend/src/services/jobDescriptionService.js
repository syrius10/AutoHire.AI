import axios from "axios";

const API_URL = "http://localhost:5001/api/job-description";

export const generateJodDescription = async (jobRole, companyName) => {
    const response = await axios.post(`${API_URL}/generate`, { job_role: jobRole, company_name: companyName });
    return response.data;
};

export const optimizeJobDescription = async (jobDescription) => {
    const response = await axios.post(`${API_URL}/optimize`, { job_description: jobDescription });
    return response.data;
};